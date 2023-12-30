import Title from '../../component/Title';
import * as React from 'react'
import { Link, json, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCardsById } from '../../services/ApiService';
import { CardProps } from "../../interface/InterCard";
import "./ViewCard.css";
import { Avatar, Box, Button, Container, Grid, Paper } from '@mui/material';
import Card from "../../component/Card";






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
        
        <Paper elevation={24}
        sx={{
            width: 600,
            height: 650,
            backgroundColor: 'primary.main',
            textAlign: 'center',
            alignItems: 'center',
            
        }}>
        <div className="text-center fs-7">

       <Title 
      
        mainText={title}
        subText={subtitle}  
       
      />
      <img src={imageUrl} alt={imageAlt} width={450} height={250} />
      </div>
    <div className='m-4'>
        
      <p>
        <div style={{fontSize:"20px"}}>{description} </div> <br /> 
      {web} <br />
      {state} {country} ,{city} <br /> {street}, {houseNumber} <br /> {phone} <br />{email} </p>
      </div>
      
      

        
        </Paper>

        
       
        </Grid>
        <div className='text-center fs-7 mt-4'>
        <Link to={`/`}> <Button variant="contained">Back</Button> </Link>
        </div>
        

      

        

        
        
        </>
        
     );
}





export default ViewCard;
