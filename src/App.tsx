import React, {createContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Signup from "./auth/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./auth/login";
import RouteGuard from "./auth/RouteGuard";
import AdminGuard from "./auth/AdminGuard";
import AddCard from "./pages/home/AddCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EditCard from "./pages/home/EditCard";
import ViewCard from "./pages/home/ViewCard";
import Footer from "./component/Footer";
import MyCards from "./pages/myCards/MyCards";
import { UserContext } from "./context/userContext";
import { CardProps } from "./interface/InterCard";
import { User } from "./interface/InterUser";
import { favorite, fetchUserData } from "./services/ApiService";
import { getToken } from "./auth/TokenManager";
import {AuthRoute} from "./auth/AuthRoute"






function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState('');
  const[userData,setUserData] = useState<User| undefined>()
  const [favorites, setFavorites] = useState<CardProps[]>([]);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
          
            primary: {
              light: "#d7a8df",
              main: "#EFC8F1",
              dark: "#906697",
              contrastText: "#000",
            },
            secondary: {
              light: "#ff7961",
              main: "#9f51af",
              dark: "#ba000d",
              contrastText: "#000",
            },
          }
        : {}),
    },
  });


  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  

function handleClick() {
  const toggleMode = mode === 'dark' ? 'light' : 'dark';
  setMode(toggleMode);
}

 
  return (
    
      <ThemeProvider theme={mode === 'dark' ? darkTheme : theme}>
     
      <CssBaseline/>
    
    <Header onClick={handleClick} mode={mode} />
      <ToastContainer position="top-right" theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<RouteGuard><AddCard/></RouteGuard>} />
        <Route path="edit/:id" element={<RouteGuard><EditCard/></RouteGuard>}/>
        <Route path="view/:id" element={<RouteGuard><ViewCard/></RouteGuard>}/>
        <Route
          path="my cards" element={ <MyCards />}
        />
        <Route path="Signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        
      </Routes>

      

      <Footer/>
      
      </ThemeProvider>
     
    
  );
}

export default App;
