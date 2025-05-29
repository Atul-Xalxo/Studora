import React, { useState } from "react";

const MyAds = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [ads, setAds] = useState([
        {
            id: 1,
            title: "Item - Lorem Ipsum",
            price: "Rs. 3000",
            condition: "Just as new",
            seller: "Seller Name",
            isFavorited: true,
            image: "#FF6B47"
        },
        {
            id: 2,
            title: "Item - Lorem Ipsum",
            price: "Rs. 3000",
            condition: "Just as new",
            seller: "Seller Name",
            isFavorited: true,
            image: "#FF6B47"
        }
    ]);

    const toggleFavorite = (id) => {
        setAds(ads.map(ad => 
            ad.id === id ? { ...ad, isFavorited: !ad.isFavorited } : ad
        ));
    };

    const handleChat = (adId) => {
        alert(`Opening chat for ad ${adId}`);
    };

    const filteredAds = ads.filter(ad =>
        ad.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-8 h-16 bg-white border-b border-gray-200">
                <div className="font-bold text-xl tracking-wider">STUDORA</div>
                <div className="flex items-center gap-8">
                    <a href="#" className="text-gray-700 no-underline text-sm">Home</a>
                    <a href="#" className="text-gray-700 no-underline text-sm">About Us</a>
                    <a href="#" className="text-gray-700 no-underline text-sm">Contact us</a>
                    <a href="#" className="text-gray-700 no-underline text-sm">FAQ</a>
                    <button className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-700 transition">Post Ad</button>
                    <div className="w-8 h-8 rounded-full bg-gray-700" />
                </div>
            </div>

            {/* Main Layout */}
            <div className="flex min-h-[calc(100vh-64px)]">
                {/* Sidebar */}
                <div className="w-28 bg-slate-900 text-white flex flex-col justify-between">
                    <div className="pt-8">
                        <div className="flex flex-col items-center gap-6">
                            <a href="#" className="text-gray-300 text-xs text-center hover:text-white transition">Add New</a>
                            <a href="#" className="text-white text-xs text-center font-medium">My Ads</a>
                            <a href="#" className="text-gray-300 text-xs text-center hover:text-white transition">Favorites</a>
                            <a href="#" className="text-gray-300 text-xs text-center hover:text-white transition">Messages</a>
                            <a href="#" className="text-gray-300 text-xs text-center hover:text-white transition">Settings</a>
                        </div>
                    </div>
                    <div className="pb-8 text-center">
                        <a href="#" className="text-white text-xs hover:underline">Log Out</a>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                        <h1 className="text-2xl font-bold text-gray-900">My Ads</h1>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Item"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-80 px-4 py-2 bg-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Ads Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredAds.map((ad) => (
                            <div key={ad.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full hover:shadow-lg transition">
                                {/* Image */}
                                <div 
                                    className="h-40 w-full"
                                    style={{ backgroundColor: ad.image }}
                                />
                                
                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{ad.title}</h3>
                                    <p className="font-bold text-gray-900 text-sm mb-1">{ad.price}</p>
                                    <p className="text-gray-600 text-xs mb-1">
                                        <span className="font-medium">Condition - </span>{ad.condition}
                                    </p>
                                    <p className="text-gray-600 text-xs mb-4">{ad.seller}</p>
                                    
                                    {/* Actions */}
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => toggleFavorite(ad.id)}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d={ad.isFavorited 
                                                    ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                                    : "M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05zM16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"
                                                } />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleChat(ad.id)}
                                            className="bg-yellow-400 text-gray-900 px-4 py-1 rounded text-xs font-medium hover:bg-yellow-500 transition"
                                        >
                                            Chat
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No results message */}
                    {filteredAds.length === 0 && searchTerm && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No ads found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyAds;
