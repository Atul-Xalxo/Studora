//import { useState } from 'react'
import React from "react";
import './App.css'
import Login from './components/login/Login'
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

import { Route, Router, Routes } from 'react-router-dom';
import AccountCreated from './components/AccountCreated';
import ChangePassword from './components/ChangePassword';
import LoginRegisterTransition from './components/login/LoginRegisterTransition';
import UserProfilePage from './components/UserProfilePage';
import MyAds from './components/MyAds';
import EmptyFavoritesPage from "./components/EmptyFavoritesPage";


function App() {
  

  return (
    <>
      <AccountCreated />
      {/* <ChangePassword /> */}
      

      <Routes>
        <Route
          path="/login"
          element={
           <LoginRegisterTransition  />
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/my-ads" element={<MyAds />} /> 
        <Route path="/empty-favorites" element={<EmptyFavoritesPage />} />
        <Route path="/user-profile-page" element={<UserProfilePage />} />
        {/* Add more routes below as needed */}
      </Routes>
    </>

  );
}

export default App;
