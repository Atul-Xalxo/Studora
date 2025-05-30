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

import Favourites from './components/Favourites';
import Messages from './components/Messages';
import UserProfile from "./components/UserProfile";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginRegisterTransition />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/my-ads" element={<MyAds />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/empty-favorites-page" element={<EmptyFavoritesPage />} />
        <Route path="/user-profile-page" element={<UserProfilePage />} />
        {/* Add more routes below as needed */}
      </Routes>
    </>
  );
}

export default App;
