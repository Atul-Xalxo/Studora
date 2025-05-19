import React from "react";

const PostAds = () => {
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
          <h2 className="text-2xl font-bold mb-6">Post Your Ad</h2>
          <div className="bg-gray-200 rounded-xl p-8 flex flex-col">
            <form className="flex gap-8">
              {/* Left Form */}
              <div className="flex-1">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Ad Name"
                    className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                  />
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Category</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Purchase Date</label>
                    <input
                      type="date"
                      className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Price (INR)</label>
                    <input
                      type="number"
                      className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm mb-1">College</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Hostel</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Room No.</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1">Description</label>
                  <textarea
                    rows={6}
                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 outline-none resize-none"
                  />
                </div>
              </div>
              {/* Right Image Upload & Button */}
              <div className="flex flex-col items-center justify-between">
                <div className="border-2 border-dashed border-gray-400 rounded-lg w-72 h-64 flex flex-col items-center justify-center mb-8 bg-white">
                  <svg
                    className="w-16 h-16 text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span>
                    <span className="text-blue-600 font-semibold cursor-pointer">
                      Choose images
                    </span>
                    <span className="text-black font-medium">
                      {" "}
                      or drag it here
                    </span>
                  </span>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-8 py-2 flex items-center gap-2 w-72 justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M12 8v4l3 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Post Ad
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PostAds;
