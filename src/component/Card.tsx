import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, ButtonGroup, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCard, favorite, editCard, getCards} from "../services/ApiService";
import { CardProps } from "../interface/InterCard"
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext";
import { getToken, verifyToken } from "../auth/TokenManager";






// interface Props extends CardProps {
//   children: React.ReactNode;
// }

function Card({ card }: { card:CardProps  }){
  
  
  const [cards, setCards] = useState<Array<CardProps>>([]);
  const {userData, favorites, setFavorites} = useContext(UserContext)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);


  const handleFavoriteClick = async (_id: string) => {
    setIsFavoriteLoading(true);
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    try {
      const result = await favorite(_id).then((data) => {
        const updatedIsFavorite = !isFavorite;


        setIsFavorite(updatedIsFavorite);

        if (Array.isArray(favorites)) {
          
        
          if (updatedIsFavorite) {
          setFavorites([...favorites, card]);
          console.log('Favorites after setFavorites:', favorites);
        } else {
          setFavorites(favorites.filter((cardItem) => cardItem._id !== card._id));
          
        }

      }
      if(updatedIsFavorite)
      toast.success(`${card.title} added to favorites successfully!`)
    else toast.success(`${card.title} removed from favorites`)

    
     });


    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Failed to update favorites on the server");
    }
  }

  useEffect(() => {
    // Check if the current card is in the user's favorites
    setIsFavorite(Array.isArray(favorites) && favorites.some((cardItem) => cardItem._id === card._id));
  }, [card, favorites]);



  
  




  // const context = useContext(AppContext);

  // const handleFavoriteClick = async (_id: string) => {
    
  //     if (context?.userData) {
  //       if (card._id) {
  //           try {
  //             await context.toggleFavorite(card._id);
  //             if(context.isFavorite(card._id)) {
  //               toast.success(`${card.title} removed from favorites!`);
  //             }else {
  //               toast.success(`${card.title} added to favorites successfully!`)
  //             }
  //         } catch(e) {
  //           toast.error("Failed to update favorites on the server");
  //         }
  //       } else {
  //         console.error("Card ID is undefined");
  //       }
  //     } else {
     
  //       toast.warning("You must be logged in to add to favorites");
  //     }
  // }



  async function onDelete (_id: string) {
   

    const res = await deleteCard(_id);

    const updated = [...cards].filter(
      cards => cards._id !== _id
    )


    setCards(updated);
  }
 


  

  

  return (

    
   
    <div className="cardBody">

      
    
    
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= {card.imageUrl}
          alt={card.imageAlt}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
          {card.title}
          </Typography>
          <Typography variant="body2" >
          {card.subtitle}
          </Typography>
  
             
        </CardContent>
        {userData && (
        <Typography>
        phone:  {card.phone} <br />
            email:  {card.email} <br />
            
              address:  {card.city} {card.street} {card.houseNumber} <br />
             
       </Typography>  )}
      </CardActionArea>
      <CardActions>
      {userData && (
    
           <Checkbox
            icon={<FavoriteBorder  />}
            checkedIcon={<Favorite   />} onClick={() =>
                        handleFavoriteClick(card._id as string)
                      }   /> )}
      

           {userData?.isAdmin &&  (
           
           <IconButton aria-label="delete" color="primary">
           <DeleteIcon onClick={()=> onDelete(card._id as string)} />
            </IconButton>
            )}
            
           {userData?.isAdmin && (

           <Link to={`/edit/${card._id}`}>
           <IconButton aria-label="edit" color="primary"  >
           <EditIcon/>
             </IconButton>
             </Link>
             )
             
          }
         <Link className="" to={`/view/${card._id}`}> <Button variant="contained">View Details</Button> </Link>

       </CardActions>
      
      
    </div>
      
      
      
   
    


    

    
  );
};

export default Card;


