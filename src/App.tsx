import React from "react";
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
import AddCard from "./pages/home/AddCard";

function App() {
  return (
    <>
      <Header />
      <ToastContainer position="top-right" theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="fav cards" element={<RouteGuard>""</RouteGuard>} />
        <Route path="add" element={<AddCard />} />
        <Route
          path="my cards"
          element={
            <RouteGuard>
              <MyCards />
            </RouteGuard>
          }
        />
        <Route path="Signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
