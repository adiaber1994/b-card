import Title from '../../component/Title';
import * as React from 'react'
import { Link, json, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCardsById } from '../../services/ApiService';
import Card, { CardProps } from "../../component/Card";
import "./ViewCard.css";
import { Avatar, Box, Button, Container, Grid, Paper } from '@mui/material';




function ViewCard() {

    const navigate = useNavigate();
    const {id} = useParams();
    const [error, setError] = useState("");
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [web, setWeb] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');



    useEffect(() => {

        if (!id) return;

     getCardsById(id)
        .then(json => {
            setTitle(json.title);
           setSubtitle(json.subtitle);
           setDescription(json.description);
           setPhone(json.phone);
           setEmail(json.email);
           setWeb(json.web);
           setImageUrl(json.imageUrl);
           setImageAlt(json.imageAlt);
           setState(json.state);
           setCountry(json.country);
           setCity(json.city);
           setStreet(json.street);
           setHouseNumber(json.houseNumber);
           

        })

    }, [id])




    return ( 
        <>
        
        <Grid 
         container
         justifyContent="center"
         alignItems="center"
         marginTop={10}>
         <div className="text-center fs-7"></div>
        <Paper elevation={24}
        sx={{
            width: 500,
            height: 500,
            backgroundColor: 'primary.main',
            textAlign: 'center',
            alignItems: 'center',
            
        }}>
        <div className="text-center fs-7">

       <Title 
      
        mainText={title}
        subText={subtitle}  
       
      />
      <img src={imageUrl} alt={imageAlt} width={300} height={200} />
      </div>
    
        
      <p>{description}<br />
      {web} <br />
      {state} {country} ,{city} <br /> {street}, {houseNumber} <br /> {phone} <br />{email} </p>
      
      

        
        </Paper>

        
       
        </Grid>

        <Link to={`/`}> <Button variant="contained">Back</Button> </Link>
      

        

        
        
        </>
        
     );
}





export default ViewCard;
