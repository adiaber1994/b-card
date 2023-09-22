import { toast } from "react-toastify";
import FormLayout from "../component/FormLayout";
import Title from "../component/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/ApiService";
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, createTheme } from "@mui/material";


export interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  isAdmin?: Boolean;
  token?: string;
}

const defaultTheme = createTheme();

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function validate(): boolean {
    if (!firstName || firstName.length < 2) {
      toast.error("firstname is reqired");
      return false;
    }

    if (!email) {
      // also check that email is required with regex
      toast.error("email is required.");
      return false;
    }

    if (!password || password.length < 8) {
      toast.error("Password must contain at least 8 characters.");
      return false;
    }

    return true;
  }

  function handleSubmit() {
    if (!validate()) {
      return;
    }

    signup({
      firstName,
      lastName,
      email,
      password,
    })
    .then(( user) => {
      console.log(user);
      navigate("/login");
    });
  }

  return (
    <>

<ThemeProvider theme={defaultTheme}>
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
        <Title mainText={"SIGN-UP"} />
      </div>
      
      <Box
     component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}
      
    >


      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>

      <TextField  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>

              <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setlastName(e.target.value)}
    
                />


              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
              </Box>
            </Box>
              
</Container>

</ThemeProvider>





  
    {/* </div>


        <FormLayout>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="phone"
              className="form-control"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </FormLayout>

        <div className="row g-2 justify-content-center mb-5">
          <div className="col-sm-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <FormLayout>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text" 
              className="form-control"
              placeholder="Image alt"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country*"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="City*"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Street*"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3">
            <input
              type="string"
              className="form-control"
              placeholder="House number*"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <input
            type="string"
              placeholder="Zip"
              className="form-control"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="form-check col-sm-6 mb-5">
            <input
              className="form-check-input"
              type="checkbox"
             checked={biusiness}
              onChange={(e) => setBiusiness(!biusiness)}
            />
            <label className="form-check-label">Signup as business</label>
          </div>
        </FormLayout>
        <FormLayout>
          <div className="text-center">
            <button className="btn btn-outline-danger col-3">CANCEL</button>
            <button className="btn btn-outline-primary col-3">
              <i className="bi bi-arrow-repeat"></i>
            </button>
          </div>
        </FormLayout>
        <div className="text-center">
          <button className="btn btn btn-secondary col-3" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
       */}
    </>
  );
}

export default Signup;
