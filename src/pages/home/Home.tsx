 import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Title from "../../component/Title";
import Card, { CardProps } from "../../component/Card";
import "./Home.css";
import "../../component/Header";
import {  deleteCard, getCards } from "../../services/ApiService";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { AppContext } from "../../App";
import { toast } from "react-toastify/dist/core";
import { CardActionArea, CardMedia, CardContent, Typography, Box, createTheme, ThemeProvider, CssBaseline, Container, Grid, CardActions, Checkbox, IconButton, Fab, Button } from "@mui/material";
import './Home.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import { Favorite, FavoriteBorder} from "@mui/icons-material";
export const data: Array<CardProps> = [
 
  
];

function Home() {
  const [cards, setCards] = useState<Array<CardProps>>([]);
  const context = useContext(AppContext)
  const [search, setSearch] = useState('');
  const [origData, setOrigData] = useState<Array<CardProps>>([]);


  

  useEffect(() => {
    getCards().then((json) => {
      
      setCards(json);
      setOrigData(json);
    });
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    const term = value.toLowerCase();
    const result = [...origData].filter(card =>
        card.subtitle.toLowerCase().includes(term)
    )

    setCards(result);
}

 
  async function onDelete (_id: string) {
   

    const res = await deleteCard(_id);

    const updated = [...cards].filter(
      cards => cards._id !== _id
    )


    setCards(updated);
  }

  


  


  return (

    <>
    
    


    <div className="home">
      


      <Title 
      
        mainText={"Build your wedding"}
        subText={"Here you can choose and save all the cards you liked"}
      />

     
      <div className="main">

      <div className="d-flex">
        <div className="px-5">
        <input className="form-control mx-3" 
        placeholder="Search"
        value={search}
        onChange={handleSearch} />
        </div>
     </div>
        

       
    
      <section className="album">
         
        {cards.length === 0 && <div>No Cards</div>}
        <div className="cards">
        {cards.map(card => (

          <div className="card">

          

         


            <Card   
              
            children={undefined}
            key={card._id}
            {...card}/>

          

            

           <CardActions>
           <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
           <IconButton aria-label="delete"  color="primary">
           <DeleteIcon onClick={()=> onDelete(card._id as string)} />
            </IconButton>
           <Link to={`/edit/${card._id}`}>
           <IconButton aria-label="edit"  color="primary">
            <EditIcon/>
             </IconButton>
             </Link> 
             
             <Link to={`/view/${card._id}`}> <Button variant="contained">View Details</Button> </Link>

       </CardActions>
          
     </div>
          
        ))
        }
        </div>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Link  to="add"> 
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Link>
      </Box>
         
        
        
        
        
        </section>
      
      
      </div>
      
      </div>
      
    </>

   
    
  );
}

export default Home;
