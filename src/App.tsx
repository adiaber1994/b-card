import React, {createContext, useMemo, useState } from "react";
import "./App.css";


import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Signup from "./auth/SignUp";
import MyCards from "./pages/MyCards";
import { ToastContainer } from "react-toastify";
import Login from "./auth/login";
import RouteGuard from "./auth/RouteGuard";
import SandBox from "./pages/SandBox";
import AdminGuard from "./auth/AdminGuard";
import AddCard from "./pages/home/AddCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EditCard from "./pages/home/EditCard";
// import Footer from "./component/Footer";

const theme = createTheme({
  
    palette: {
      primary: {
        light: '#d7a8df',
        main: '#ce93d8',
        dark: '#906697',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  
  // palette: {
  //   mode: 'dark',
  // },
});

interface Context {
  admin: Boolean;
  setAdmin: Function;
  userName: string
  setUserName: Function
}
export const AppContext = createContext <Context | null>(null);
function App() {
  // const[mode] = useState<'light' | 'dark'>('light')
  
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState('');
  const defaultTheme = createTheme();


  // const theme =useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode],
  // );
 
  return (
    <>
       <ThemeProvider theme={theme}>
     {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline/>
    <AppContext.Provider value={{admin, setAdmin,userName,setUserName}}>
      <Header />
      <ToastContainer position="top-right" theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<AddCard/>} />
        <Route path="edit/:id" element={<EditCard/>}/>
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

      

      
      </AppContext.Provider>
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
