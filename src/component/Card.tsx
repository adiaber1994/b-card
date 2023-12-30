import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, ButtonGroup, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCard, favorite, editCard, getCards, getFavorites } from "../services/ApiService";
import { CardProps } from "../interface/InterCard"
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext";
import { verifyToken } from "../auth/TokenManager";
import { AppContext } from "../App";





// interface Props extends CardProps {
//   children: React.ReactNode;
// }

function Card({ card }: { card:CardProps  }){
  
  
  const [cards, setCards] = useState<Array<CardProps>>([]);
  const {userData, favorites, setFavorites} = useContext(UserContext)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Check if the current card is in the user's favorites
    if (Array.isArray (favorites)) {
      setIsFavorite(favorites.findIndex((cardItem) => cardItem._id === card._id) !== -1);
    }
  }, [card, favorites]);

  const handleFavoriteClick = async (_id: string) => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    try {
      const result = await favorite(_id).then((data) => {
        const updatedIsFavorite = !isFavorite
        setIsFavorite(updatedIsFavorite);
        if (updatedIsFavorite) {
          setFavorites([...favorites, card]);
        } else {
          setFavorites(favorites.filter((cardItem) => cardItem._id !== card._id));
        }
        updatedIsFavorite
        ? toast.success(`${card.title} added to favorites successfully!`)
        : toast.success(`${card.title} removed from favorites`)

    //     toast.success(`${card.title} ${updatedIsFavorite ? "added to" : "removed from"} favorites successfully!`);
    // } catch (error) {
    //   console.error("Error toggling favorite:", error);
    //   toast.error("Failed to update favorites on the server");
    // }
     });

    //   await favorite(_id);


    //   toast.success(`${card.title} ${updatedIsFavorite ? "added to" : "removed from"} favorites successfully!`);
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Failed to update favorites on the server");
    }
  }
  




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
        {verifyToken() && (
        <Typography>
        phone:  {card.phone} <br />
            email:  {card.email} <br />
            
              address:  {card.city} {card.street} {card.houseNumber} <br />
             
       </Typography>  )}
      </CardActionArea>
      <CardActions>

      {/* <span className={`bi bi-heart${isFavorite ? '-fill' : ''}`} onClick={() => handleFavoriteClick(card._id as string)}></span> */}
           <Checkbox icon={<FavoriteBorder  />} checkedIcon={<Favorite   />} onClick={() =>
                        handleFavoriteClick(card._id as string)
                      }   />

           {verifyToken() && (
           
           <IconButton aria-label="delete" color="primary">
           <DeleteIcon onClick={()=> onDelete(card._id as string)} />
            </IconButton>
            )}
            
           {verifyToken() && (

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


