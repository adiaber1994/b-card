 import React, { useContext, useEffect, useState } from "react";
import Title from "../../component/Title";
import Card, { CardProps } from "../../component/Card";
import "./Home.css";
import "../../component/Header";
import {  deleteCard, getCards } from "../../services/ApiService";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { AppContext } from "../../App";
import { toast } from "react-toastify/dist/core";
import { CardActionArea, CardMedia, CardContent, Typography, Box, createTheme, ThemeProvider, CssBaseline, Container, Grid, CardActions, Checkbox, IconButton } from "@mui/material";
import './Home.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Favorite, FavoriteBorder } from "@mui/icons-material";
export const data: Array<CardProps> = [
 
  
];

function Home() {
  const [cards, setCards] = useState<Array<CardProps>>([]);
  const context = useContext(AppContext)
  

  useEffect(() => {
    getCards().then((json) => {
      
      setCards(json);
    });
  }, []);

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
        mainText={"Cards Page"}
        subText={"Here you can find business cards from all categories"}
      />
      <main>
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
  
  
      
      </CardActions>
          
            </div>
          
        ))
        }
        </div>
         
        
        <div className="ronded">
        <Link className="rounded btn btn-primary" to="add">
          <i className="bi bi-plus"></i>
        </Link>
        
        
        
        </div>
        </section>
      
      
      </main>
      
      </div>
      
    </>

   
    
  );
}

export default Home;
