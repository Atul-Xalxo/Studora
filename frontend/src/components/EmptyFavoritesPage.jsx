import React, { useState } from "react";

const EmptyFavoritesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handlePostAd = () => {
    alert("Redirecting to Post Ad page...");
  };

  const handleNavigation = (section) => {
    alert(`Navigating to ${section}...`);
  };

  const handleBrowseAds = () => {
    alert("Browsing ads...");
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-8 h-16 bg-white border-b border-gray-200">
        <div className="font-bold text-xl tracking-wider">STUDORA</div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 no-underline text-sm hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 no-underline text-sm hover:text-blue-600">About Us</a>
          <a href="#" className="text-gray-700 no-underline text-sm hover:text-blue-600">Contact us</a>
          <a href="#" className="text-gray-700 no-underline text-sm hover:text-blue-600">FAQ</a>
          <button 
            onClick={handlePostAd}
            className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Post Ad
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-700" />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-32 bg-slate-900 text-white flex flex-col justify-between">
          <div className="pt-8">
            <div className="flex flex-col">
              <button
                onClick={() => handleNavigation('Add New')}
                className="text-gray-300 text-sm text-center hover:text-white py-4 px-2 transition-colors"
              >
                Add New
              </button>
              <button
                onClick={() => handleNavigation('My Ads')}
                className="text-gray-300 text-sm text-center hover:text-white py-4 px-2 transition-colors"
              >
                My Ads
              </button>
              <button className="text-white text-sm text-center font-medium py-4 px-2 bg-slate-800">
                Favorites
              </button>
              <button
                onClick={() => handleNavigation('Messages')}
                className="text-gray-300 text-sm text-center hover:text-white py-4 px-2 transition-colors"
              >
                Messages
              </button>
              <button
                onClick={() => handleNavigation('Settings')}
                className="text-gray-300 text-sm text-center hover:text-white py-4 px-2 transition-colors"
              >
                Settings
              </button>
            </div>
          </div>
          <div className="pb-8 text-center">
            <button
              onClick={() => handleNavigation('Log Out')}
              className="text-white text-sm hover:text-red-400 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-100">
          {/* Header */}
          <div className="flex items-center justify-between p-8 bg-white">
            <h1 className="text-2xl font-bold text-gray-900">Favorites</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80 px-4 py-2 bg-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-12">
                No ads in your favorites
              </h2>
              
              {/* Empty State Icon */}
              <div className="mb-8">
                <div className="relative mx-auto w-32 h-24">
                  {/* Back rectangle */}
                  <div className="absolute top-0 right-0 w-24 h-20 bg-gray-300 rounded-lg border-2 border-gray-400"></div>
                  {/* Front rectangle */}
                  <div className="absolute bottom-0 left-0 w-24 h-20 bg-white rounded-lg border-2 border-gray-400 flex items-center justify-center">
                    {/* Heart icon */}
                    <div className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Browse Ads Button */}
              <button
                onClick={handleBrowseAds}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Browse Ads
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyFavoritesPage;