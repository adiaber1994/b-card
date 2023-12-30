import { NavLink } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Copyright } from "@mui/icons-material";
import FacebookButton from "./SocialsButtons/FacebookButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InstegramButton from "./SocialsButtons/InstegramButton";
import { Grid } from "@mui/material";
import PintrestButton from "./SocialsButtons/PintrestButton";
import PinterestIcon from '@mui/icons-material/Pinterest';


function Fotter() {
    

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        www.BcardWedding.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  return (
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container fixed>
            <Typography>
              <div className="">
                <div className="">
                  <h4>
                    Spread The News
                  </h4>
                  <Grid  container direction="row" justifyContent="center" alignItems="center">
                  <FacebookButton icon={< FacebookIcon></FacebookIcon>}/> 
                  <InstegramButton icon={<InstagramIcon></InstagramIcon>}/> 
                  <PintrestButton icon={<PinterestIcon></PinterestIcon>}/> 
                  </Grid>
                </div>
                

              </div>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    
  );
}

    
       
 


export default Fotter;