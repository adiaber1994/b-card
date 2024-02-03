import { useContext, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import { removeUser, verifyToken } from "../auth/TokenManager";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import React from "react";
import MenuIcon from '@mui/icons-material/Menu'

import Brightness6Icon from '@mui/icons-material/Brightness6';
import { UserContext } from "../context/userContext";


interface HeaderProps {
  onClick: () => void;
  mode: 'light' | 'dark';
}

function Header( {onClick, mode}: HeaderProps ): JSX.Element{
  const { userData} = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   
   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
 
  return (

  <>


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

            {userData &&(

            < li className="nav-item">
                <NavLink
                to="/my cards"
                className="nav-link active"
                aria-current="page"
              >
                MY CARDS
              </NavLink>
            </li>
            )}

            {userData?.isAdmin &&(

              < li className="nav-item">
                 <NavLink
                 to="/admin area"
                  className="nav-link active"
                 aria-current="page"
                                    >
                             Users Managment
                          </NavLink>
                      </li>
                      
            )}
            {userData?.isAdmin &&(

             < li className="nav-item">
             <NavLink
             to="/add"
             className="nav-link active"
              aria-current="page"
                      >
               ADD CARD
            </NavLink>
        </li>
        
)}

          {!userData && (


            <li className="nav-item">
              <NavLink to="/Signup" className="nav-link">
                 SIGN UP
               </NavLink>
               </li>
               
            )}
            
           {!userData && (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
               LOGIN
              </NavLink>
            </li>
            )}

           {userData && (
            <li className="nav-item">
              <Logout/>
              </li>
            )}

            
                   

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
            {userData &&(
              <ul className="nav-item">
              <NavLink to="/my cards" className="nav-link">
                MY CARDS
              </NavLink>
            </ul>
            )}
          
          {userData?.isAdmin &&(
            <ul className="nav-item">
              <NavLink to="/add" className="nav-link">
                ADD CARD
              </NavLink>
            </ul>
          )}

           {userData?.isAdmin &&(
            <ul className="nav-item">
              <NavLink to="/admin Area" className="nav-link">
                ADMIN AREA
              </NavLink>
            </ul>
          )}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mt: 2 }}>
                <ul className="nav-item">
                <IconButton
                 onClick={onClick}
                  
                 >
                <Brightness6Icon   />
                <Typography>
                  {mode === 'dark' ? '' : ''}
                </Typography>
              </IconButton>
              </ul>
              {!userData && (
                <ul className="nav-item">
                <NavLink to="/Signup" className="nav-link">
                 SIGN UP
                </NavLink>
                </ul>
              )}
            
            {!userData && (
            <ul className="nav-item">
              <NavLink to="/login" className="nav-link">
               LOGIN
              </NavLink>
            </ul>
            )}

            {userData && (

                <ul className="nav-item">
                <Logout/>
                 </ul>
             )}

        </Box>
            </Toolbar>
            </Container>
            
        </AppBar>
        </>
        
       

    
  );
}

export default Header;


