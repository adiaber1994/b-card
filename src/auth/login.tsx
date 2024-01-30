import { useContext, useState } from "react";
import Title from "../component/Title";
import { login } from "../services/ApiService";
import { Link, useNavigate } from "react-router-dom";
import { setToken, setUser } from "./TokenManager";
import { Box, Button, Container, CssBaseline, TextField } from "@mui/material";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";
import Grid from '@mui/material/Grid';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const context = useContext(AppContext);
  const [error, setError] = useState("");
  const { userData, setUserData } = useContext(UserContext)
  


  

  function validate(): boolean {
    if (!email) {
      setError("email is reqired");
      return false;
    }
    if (!password || password.length < 8) {
      setError("Password must contain at least 6 characters.");
      return false;
    }
    return true;
  }

  function handleClick() {
    if (!validate()) {
      return;
    }

    login({
      email,
      password,
    }).then((user) => {
      console.log(user)

      
      // setToken(user.token)
      if(user.token){
      setToken(user.token);
      setUser(user)
      setUserData(user)
     }
      navigate("/");
      
      toast.success(`Welcome ${user.firstName}`)
    })
   
    .catch((err) => {
      toast.error("cannot log in,please check again email/password ");

    });
  }
  const handleRefresh = () => {
    setEmail("");
    setPassword("");
  };

    
  

  return (

    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >



      <div>
      <Title mainText={"LOGIN"} />
      </div>
      
      <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-danger">{error}</div>
             <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>

            <Grid container spacing={1}>
            <Grid item xs>
              <Button
               href="/"
                variant="outlined"
                color="error"
                sx={{ mt: 3, mb: 2, mr: 5 }}
              >
                CANCEL
              
              </Button>
            </Grid>
            <Grid item xs>
              <Button
              onClick={handleRefresh}
                variant="outlined"
                color="error"
                sx={{ mt: 3, mb: 2 }}
              >
                <i className="bi bi-arrow-repeat"></i>
              </Button>
            </Grid>
            <Grid item xs>
              <Link to="/Signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
           
            </Box>

            
            
          </Box>
        

         
                
        
       </Container>
       
        
    
        
    
  );
}

export default Login;

