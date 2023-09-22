import React, { useContext, useEffect, useState } from "react";
import Title from "../../component/Title";
import Card, { CardProps } from "../../component/Card";
import "./Home.css";
import "../../component/Header";
import {  getCards } from "../../services/ApiService";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { AppContext } from "../../App";
import { toast } from "react-toastify/dist/core";
import { CardActionArea, CardMedia, CardContent, Typography, Box, createTheme, ThemeProvider, CssBaseline, Container, Grid } from "@mui/material";
import './Home.css';
export const data: Array<CardProps> = [
 
  // {
  //   title: "Hofit-flower",
  //   image:
  //     "https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_640.jpg",
  //   text: "Natural flowers, bouquets and decorations for the bride and groom's car",
  //   phone: "038554233",
  //   address: "Jabotinsky 130, Ramat Gan",
  //   cardNumber: 0,
  // },
  // {
  //   title: "SEGAL",
  //   image:
  //     "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_640.jpg",
  //   text: "Groom suits at good prices",
  //   phone: "035887412",
  //   address: "Sderot Giborei Israel 5, Netanya,",
  //   cardNumber: 0,
  // },
];

function Home() {
  const [cards, setCards] = useState<Array<CardProps>>([]);
  const context = useContext(AppContext)
  

  useEffect(() => {
    getCards().then((json) => {
      
      setCards(json);
    });
  }, []);

  
  // function addCard(card: CardProps) {
  //   addCard(card).then((json) => {
  //     setCards([...cards, json]);

  //     toast.success(
  //       `Vacation to ${json.cardNumber} has been added successfully`
  //     );
  //   });
  // }

  // const filtered: Array<CardProps> = data.filter((card) =>
  //   card.title.toLowerCase().includes(value.trim().toLowerCase())
  // );
  // setCards(filtered);

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
