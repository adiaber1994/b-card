import React from "react";
import logo from "./logo.svg";
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

function App() {
  return (
    <>
      <Header />
      <ToastContainer position="top-right" theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="fav cards" element={<RouteGuard>""</RouteGuard>} />
        <Route
          path="my cards"
          element={
            <RouteGuard>
              <MyCards />
            </RouteGuard>
          }
        />
        <Route path="signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
