import { useState } from "react";
import { Eye, User, Lock, LogOut } from "lucide-react";

import React from 'react'

const ChangePassword = () => {
  const [currentPage, setCurrentPage] = useState("changePassword");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleSaveChanges = () => {
    // In a real app, this would validate and save the password
    alert("Password changes saved!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDiscardChanges = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white py-4 px-6 border-b border-gray-200 flex items-center justify-between">
          <div className="font-bold text-xl">STUDORA</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700">
              Home
            </a>
            <a href="#" className="text-gray-700">
              About Us
            </a>
            <a href="#" className="text-gray-700">
              Contact us
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
              Post Ad
            </button>
          </nav>
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        </header>
  
        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="bg-gray-900 text-white w-32 flex flex-col">
            <div className="flex flex-col flex-1">
              <a href="#" className="py-4 px-6 hover:bg-gray-800">
                Add New
              </a>
              <a href="#" className="py-4 px-6 hover:bg-gray-800">
                My Ads
              </a>
              <a href="#" className="py-4 px-6 hover:bg-gray-800">
                Favorites
              </a>
              <a href="#" className="py-4 px-6 hover:bg-gray-800">
                Messages
              </a>
              <a href="#" className="py-4 px-6 bg-gray-800">
                Settings
              </a>
            </div>
            <a href="#" className="py-4 px-6 hover:bg-gray-800 mt-auto">
              Log Out
            </a>
          </aside>
  
          {/* Content Area */}
          <main className="flex-1 bg-white p-6">
            <h1 className="text-2xl font-semibold mb-6">Settings</h1>
  
            <div className="flex gap-6">
              {/* User Settings Panel */}
              <div className="bg-gray-100 rounded-lg p-6 w-64 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                <h2 className="text-lg font-medium mb-6">Bruce Wayne</h2>
  
                <div className="w-full space-y-4">
                  <button
                    onClick={() => handleNavigation("personalInfo")}
                    className="flex items-center gap-2 w-full py-2 px-4 hover:bg-gray-200 rounded text-left"
                  >
                    <User size={18} />
                    <span>Personal Information</span>
                  </button>
  
                  <button
                    onClick={() => handleNavigation("changePassword")}
                    className={`flex items-center gap-2 w-full py-2 px-4 rounded text-left ${
                      currentPage === "changePassword"
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <Lock size={18} />
                    <span>Change Password</span>
                  </button>
  
                  <button
                    onClick={() => handleNavigation("logOut")}
                    className="flex items-center gap-2 w-full py-2 px-4 hover:bg-gray-200 rounded text-left"
                  >
                    <LogOut size={18} />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
  
              {/* Change Password Form */}
              {currentPage === "changePassword" && (
                <div className="bg-gray-100 rounded-lg p-6 flex-1">
                  <div className="max-w-md mx-auto">
                    <div className="mb-6">
                      <label className="block text-sm mb-2">
                        Enter Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded p-2"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
  
                    <div className="mb-6">
                      <label className="block text-sm mb-2">
                        Enter New Password
                      </label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded p-2"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
  
                    <div className="mb-8">
                      <label className="block text-sm mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded p-2"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
  
                    <div className="flex justify-between">
                      <button
                        onClick={handleDiscardChanges}
                        className="px-4 py-2 border border-gray-300 rounded"
                      >
                        Discard Changes
                      </button>
  
                      <button
                        onClick={handleSaveChanges}
                        className="px-4 py-2 border border-gray-300 rounded"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
  
              {/* Personal Information Section */}
              {currentPage === "personalInfo" && (
                <div className="bg-gray-100 rounded-lg p-6 flex-1">
                  <h2 className="text-xl font-medium mb-6">
                    Personal Information
                  </h2>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        defaultValue="Bruce Wayne"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded p-2"
                        defaultValue="bruce@wayne.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded p-2"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded">
                        Update Information
                      </button>
                    </div>
                  </div>
                </div>
              )}
  
              {/* Log Out Confirmation */}
              {currentPage === "logOut" && (
                <div className="bg-gray-100 rounded-lg p-6 flex-1">
                  <div className="max-w-md mx-auto text-center">
                    <h2 className="text-xl font-medium mb-4">
                      Are you sure you want to log out?
                    </h2>
                    <p className="text-gray-600 mb-8">
                      You will need to log in again to access your account.
                    </p>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleNavigation("changePassword")}
                        className="px-4 py-2 border border-gray-300 rounded"
                      >
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded">
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    );
  
}

export default ChangePassword