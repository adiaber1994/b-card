import { Box, Button, Container, CssBaseline, Grid, Link, Stack, TextField } from "@mui/material";
import Title from "../../component/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editCard, getCardsById } from "../../services/ApiService";



function EditCard() {
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

    function validate():boolean {
        if (!title) {
            setError("title is required");
      return false;
        }

        setError('')
        return true
    }

    function handleClick() {

        if (!validate()) {
            return
        }


        if (!id) return;

        editCard(id, {
            title,
            subtitle,
            description,
            phone,
            email,
            web,
            imageUrl,
            imageAlt,
            state,
            country,
            city,
            street,
            houseNumber,
           
            
        }) 
        .then(json => {
            console.log(json)
            navigate('/')

        })
    
        
    }







    return ( 
       
        
        <Container component="main" maxWidth="md">
        <CssBaseline />
             <Box
                 sx={{
                 marginTop: 3,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                }}
        >




<div className="text-center mb-3">
            <Title mainText={"Edit Card"} />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error */}
        </div>

      <Box
  
    >


    <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>


     <TextField
         required
         fullWidth
         type="text"
         label="title"
         id="title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         
        />

        </Grid>
    
             <Grid item xs={12} sm={6}>

              <TextField
               required
               fullWidth
               type="text"
               className="form-control"
               label="Subtitle"
               id="Subtitle"
               value={subtitle}
               onChange={(e) => setSubtitle(e.target.value)}
               
             />
            </Grid>

             <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  className="form-control"
                  type="text"
                  label="description"
                  id="description"
                  autoComplete="description"
                  value={description}

                  onChange={(e) => setDescription(e.target.value)}
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                 label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="web"
                  type="text"
                  label="web"
                  id="web"
                  autoComplete="web"
                  onChange={(e) => setWeb(e.target.value)}
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="imag"
                  label="Image URL"
                  type="text"
                  id="imagUrl"
                  value={imageUrl}
                  autoComplete="Image"
                  onChange={(e) => setImageUrl(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="imag"
                  label="imag ALT"
                  type="text"
                  id="imageAlt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="State"
                  label="State"
                  type="State"
                  id="state"
                  value={state}
                  autoComplete="State"
                  onChange={(e) => setState(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Country"
                  label="Country"
                  type="Country"
                  id="country"
                  value={country}
                  autoComplete="Country"
                  onChange={(e) => setCountry(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="City"
                  label="City"
                  type="City"
                  id="city"
                  value={city}
                  autoComplete="City"
                  onChange={(e) => setCity(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="Street"
                  label="Street"
                  type="Street"
                  id="street"
                  value={street}
                  autoComplete="Street"
                  onChange={(e) => setStreet(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="Housenumber"
                  label="Housenumber"
                  id="houseNumber"
                  type="text"
                  value={houseNumber}
                  autoComplete="Housenumber"
                  onChange={(e) => setHouseNumber(e.target.value)}
                  
                />
              </Grid>
              
              <Stack spacing={2} direction="row" alignItems={"center"} sx={{ mt: 3, mb: 2 }}>
              <Button
              type="submit"
              variant="contained"
              onClick={handleClick}
        
              
              
            >
             Update
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="error"
              href="/"
              
              
            >
             Cancel
            </Button>
            </Stack> 
            </Grid>
              
            

            
            </Box>
    
    
    </Box>
    </Container>
    
        
       
  
    )
     
}

export default EditCard;