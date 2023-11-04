import { useState } from "react";
import FormLayout from "../../component/FormLayout";
import Title from "../../component/Title";
import { useNavigate } from "react-router-dom";
import { addCard } from "../../services/ApiService";
import { useInputText } from "../../hooks/useInputText";
import { Box, Button, Container, CssBaseline, Grid, TextField } from "@mui/material";



 function AddCard() {
  const navigate = useNavigate();
  const titleProps = useInputText(''); 
  const subTitleProps = useInputText('');
  const decriptionProps = useInputText('');
  const phoneProps = useInputText('');
  const emailProps = useInputText('');
  const webProps = useInputText('');
  const imageUrlProps = useInputText('');
  const imageAltProps = useInputText('');
  const stateProps = useInputText('');
  const countryProps = useInputText('');
  const cityProps = useInputText('');
  const streetProps = useInputText('');
  const houseNumberProps = useInputText('');
  const [error, setError] = useState("");
  

  function validate(): boolean {
    if (!titleProps) {
      setError("title is required");
      return false;
    }
 

    setError("");
    return true;
  }

  

  function handleClick() {
    if (!validate()) {
      return;
    }

    addCard({
      title: titleProps.value,
      subtitle: subTitleProps.value,
      description: decriptionProps.value,
      imageUrl: imageUrlProps.value,
      imageAlt:imageAltProps.value,
      phone: phoneProps.value,
      email: emailProps.value,
      web: webProps.value,
      state:stateProps.value,
      country:countryProps.value,
      city:cityProps.value,
      street:streetProps.value,
      houseNumber:houseNumberProps.value,

    }).then(() => {
      navigate("/")
    
    })


  };

  return (
    <>
        
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
        <Title mainText={"Ceate Card"} />
      </div>

      <Box
  
    >


    <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>


     <TextField
         required
         fullWidth
         type="text"
         className="form-control"
         placeholder="Title"
         {...titleProps}
        />

        </Grid>
    
             <Grid item xs={12} sm={6}>

              <TextField
               required
               fullWidth
               type="text"
               className="form-control"
               placeholder="Subtitle*"
               {...subTitleProps}
             />
            </Grid>

             <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  className="form-control"
                  type="text"
                  id="description"
                  label="description"
                  autoComplete="description"
                  {...decriptionProps}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  {...phoneProps}
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
                  autoComplete="email"
                  {...emailProps}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="web"
                  label="web"
                  type="text"
                  id="web"
                  autoComplete="web"
                  {...webProps}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="imag"
                  label="image URL"
                  type="text"
                  id="image"
                  autoComplete="Image"
                  {...imageUrlProps}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="imag"
                  label="image ALT"
                  type="text"
                  id="imageALT"
                  {...imageAltProps}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="State"
                  label="State"
                  type="State"
                  id="State"
                  autoComplete="State"
                  {...stateProps }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Country"
                  label="Country"
                  type="Country"
                  id="Country"
                  autoComplete="Country"
                  {...countryProps}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="City"
                  label="City"
                  type="City"
                  id="City"
                  autoComplete="City"
                  {...cityProps}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="Street"
                  label="Street"
                  type="Street"
                  id="Street"
                  autoComplete="Street"
                  {...streetProps}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="Housenumber"
                  label="Housenumber"
                  type="text"
                  id="Housenumber"
                  autoComplete="Housenumber"
                  {...houseNumberProps}
                />
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
             Add
            </Button>
            </Box>
    
    
    </Box>
    </Container>
    
        
       
  </>
  
  );
}

export default AddCard;

