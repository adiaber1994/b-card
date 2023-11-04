import { useContext, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import { verifyToken } from "../auth/TokenManager";
import { AppContext } from "../App";
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import React from "react";
import MenuIcon from '@mui/icons-material/Menu'
import { createTheme } from '@mui/material/styles';

function Header() {
  const [search, setSearch] = useState("");
  const context = useContext(AppContext);
  const[mode, setMode] = useState<'light' | 'dark'>('light')
  

  const pages = ['About', '', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };




//  const theme =useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

  

  // function handleClick() {
  //   const toggleMode = mode === 'dark' ? 'light' : 'dark';
  //   setMode(toggleMode)
  // }

  return (

  


    <AppBar position="static">
       <Container maxWidth="xl">
      
        <Toolbar disableGutters >
          <Diversity1Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
            BCARD WEDDING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >


              < li className="nav-item">
                <NavLink
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                ABOUT
              </NavLink>
            </li>

            < li className="nav-item">
                <NavLink
                to="/fav Cards"
                className="nav-link active"
                aria-current="page"
              >
                FAV CARDS
              </NavLink>
            </li>




              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
        
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Diversity1Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BCARD WEDDING
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mt: 2}} >
            <ul>
              <NavLink
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                ABOUT
              </NavLink>
            </ul>
            {/* {!verifyToken() && ( */}
              <ul>
                <NavLink
                  to="/fav Cards"
                  className="nav-link active"
                  aria-current="page"
                >
                  FAV CARDS
                </NavLink>
              </ul>
            {/* )} */}
            {/* {!verifyToken() &&  */}

            <ul className="nav-item">
              <NavLink to="/my cards" className="nav-link">
                MY CARDS
              </NavLink>
            </ul>
             {/* } */}
            <ul className="nav-item">
              <NavLink to="/add" className="nav-link">
                ADD CARD
              </NavLink>
            </ul>
           {/* {context?.admin && */}
            <ul className="nav-item">
              <NavLink to="/sandBox" className="nav-link">
                SANDBOX
              </NavLink>
            </ul>
            {/* } */}
            </Box>

            <Box sx={{ flexGrow:0, display: { xs: 'none', md: 'flex' }, mt: 2} }>
            <ul className="nav-item">
              <NavLink to="/Signup" className="nav-link">
               SIGN IN
              </NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink to="/login" className="nav-link">
               LOGIN
              </NavLink>
            </ul>
            <ul className="nav-item">
            
              <Logout/>
            </ul>
            

            </Box>
            </Toolbar>
            </Container>
            
        </AppBar>
       
       

    
  );
}

export default Header;


