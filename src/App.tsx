import React, {createContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Signup from "./auth/SignUp";
import { ToastContainer } from "react-toastify";
import Login from "./auth/login";
import RouteGuard from "./auth/RouteGuard";
import SandBox from "./pages/SandBox";
import AdminGuard from "./auth/AdminGuard";
import AddCard from "./pages/home/AddCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EditCard from "./pages/home/EditCard";
import ViewCard from "./pages/home/ViewCard";
import Footer from "./component/Footer";
import MyCards from "./pages/MyCards";
import { UserContext } from "./context/userContext";
import { CardProps } from "./interface/InterCard";
import { User } from "./interface/InterUser";
import { favorite, fetchUserData } from "./services/ApiService";
import { getToken } from "./auth/TokenManager";
import { UserProvider } from './context/userContext';




interface Context {
  setUserData: Function;
  admin: Boolean;
  setAdmin: Function;
  toggleFavorite: (id: any) => Promise<void>
  isFavorite: (id:any) => boolean
  userName: string
  setUserName: Function
  userData: User | undefined;
  favorites: CardProps[];
  setFavorites: React.Dispatch<React.SetStateAction<CardProps[]>>;
}
export const AppContext = createContext <Context | null>(null);

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState('');
  const[userData,setUserData] = useState<User| undefined>()
  const [favorites, setFavorites] = useState<CardProps[]>([]);

  // useEffect(() => {
  //   const storedToken = getToken();
  //   if (storedToken) {
      // Fetch user information using the stored token
      // Update your context based on the fetched user data
      // const fetchData = async () => {
      //   try {
      //     const userData = await fetchUserData(); // Assuming you have implemented this function
      //     setUserData(userData);
      //   } catch (error) {
      //     console.error('Error during login or fetching user data:', error);
          // Handle error if necessary
        // }
      // };
  
  //     fetchData();
  //   }
  // }, []);




  const isFavorite = (id:any) => {
    if(!id) return false
    if(!userData || !userData.favorites) return false
    return  userData.favorites.findIndex(fav => fav === id) != -1
  }
  const toggleFavorite = async(id: any) => {
 
    // client
    const existsIdx = userData?.favorites?.findIndex(fav => fav === id)
    if(existsIdx && existsIdx === -1) {
      setUserData({...userData, favorites: [...userData!.favorites!, id]} as any)
    } else if(existsIdx !== -1) {
      setUserData({...userData, favorites: userData!.favorites!.filter(fav => fav!==id)} as any)
      

    }
      // server 
      await favorite(id)
      localStorage.setItem('userData', JSON.stringify(userData));
  }
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
              main: "#E475FA",
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
      <UserProvider>
    {/* <AppContext.Provider value={{favorites,setFavorites,admin,setAdmin,userName,isFavorite,toggleFavorite,setUserName,userData,setUserData}}> */}
    <Header onClick={handleClick} mode={mode} />
      <ToastContainer position="top-right" theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<RouteGuard><AddCard/></RouteGuard>} />
        <Route path="edit/:id" element={<RouteGuard><EditCard/></RouteGuard>}/>
        <Route path="view/:id" element={<RouteGuard><ViewCard/></RouteGuard>}/>
        <Route
          path="my cards"
          element={
            <RouteGuard>
              <MyCards />
            </RouteGuard>
          }
        />
        <Route path="sandBox" element={<AdminGuard><SandBox /></AdminGuard>}/>
        <Route path="Signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        
      </Routes>

      

      <Footer/>

      </UserProvider>

      
      {/* </AppContext.Provider> */}
      </ThemeProvider>
     
    
  );
}

export default App;
