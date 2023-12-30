import { Button, Grid, Paper } from "@mui/material";
import Title from "../component/Title";
import { Box, Container } from "@mui/system";
import { Link, json, useNavigate, useParams } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="text-center">
        <Title mainText="About Us" />
      </div>

      <Container fixed>
        <Grid container
         justifyContent="center"
         alignItems="center"
         marginTop={5}>
      <Paper elevation={24}
        sx={{
            width: 900,
            height: 400,
            backgroundColor: 'primary.main',
            textAlign: 'center',
            alignItems: 'center',
            
        }}>
      <div className="text-center fs-4">
        <p>
          getting married? Don't even know where to start planning the event?
        </p>
        <br />
        <p>
          uWe, the BCard Wedding company, will sort things out for you:
We have collected for you the best businesses that provide service to you, the bride and groom. <br />
Here you can find a collection of local places. 
        </p>
        <br />
        <p>
        you can decide and mark the places you liked the most in order to organize and help you choose the places and business owners that best suit you for the big event
        </p>
      </div>
      </Paper>
      </Grid>
      <div className='text-center fs-7 mt-4'>
        <Link to={`/`}> <Button variant="contained">Back</Button> </Link>
        </div>
      
      </Container>
    </>
  );
}

export default About;
