import React from "react";

const items = Array(6).fill({
  title: "Item - Lorem Ipsum",
  price: "Rs. 3000",
  condition: "Just as new",
  seller: "Seller Name",
});

const Favourites = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between bg-white px-8 py-4 shadow">
        <div className="text-2xl font-bold tracking-wider">STUDORA</div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-black font-medium">
            Home
          </a>
          <a href="#" className="text-black font-medium">
            About Us
          </a>
          <a href="#" className="text-black font-medium">
            Contact us
          </a>
          <a href="#" className="text-black font-medium">
            FAQ
          </a>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold flex items-center gap-2">
            <span>Post Ad</span>
            <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-blue-500">
              +
            </span>
          </button>
          <div className="w-7 h-7 rounded-full bg-gray-700 border-2 border-gray-300"></div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-slate-900 text-white w-56 flex flex-col justify-between py-8 px-4 min-h-[calc(100vh-64px)]">
          <div>
            <ul className="space-y-6">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Add New
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  My Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Favorites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Messages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="hover:text-red-400">
              Log Out
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h2 className="text-2xl font-bold mb-6">Favorites</h2>
          <div className="bg-gray-200 rounded-xl p-8">
            <div className="flex justify-end mb-4">
              <div className="flex items-center bg-gray-300 rounded px-2 py-1 w-72">
                <svg
                  className="w-5 h-5 text-gray-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Item"
                  className="w-full bg-gray-300 outline-none text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow p-4 flex flex-col"
                >
                  <div className="bg-orange-500 rounded w-full h-40 mb-4"></div>
                  <div className="font-bold text-base mb-1">{item.title}</div>
                  <div className="font-bold text-base mb-1">{item.price}</div>
                  <div className="text-sm font-semibold mb-1">
                    Condition -{" "}
                    <span className="font-normal">{item.condition}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {item.seller}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <button className="text-red-500 text-xl">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </button>
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 py-1 rounded">
                      Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Favourites;
