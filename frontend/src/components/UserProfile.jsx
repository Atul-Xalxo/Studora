import React from "react";

const UserProfile = () => {
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
          <div className="flex gap-8">
            {/* Profile Card */}
            <section className="bg-gray-200 rounded-xl p-8 flex flex-col items-center w-80">
              <div className="w-28 h-28 rounded-full bg-gray-300 mb-6"></div>
              <div className="font-bold text-lg mb-4">Bruce Wayne</div>
              <ul className="space-y-4 w-full">
                <li className="flex items-center gap-2 text-black">
                  <span>⚫</span>
                  <span>Personal Information</span>
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span>⚫</span>
                  <span>Change Password</span>
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span>⚫</span>
                  <span>Log Out</span>
                </li>
              </ul>
            </section>

            {/* Personal Information Form */}
            <section className="bg-gray-200 rounded-xl p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-6">
                Personal Information
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 font-medium">First Name</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Last Name</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Phone Number
                    </label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Whatsapp Number
                    </label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Date Of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full border rounded px-2 py-1"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-1 font-medium">Address</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">College</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">
                      Postal Address
                    </label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">State</label>
                    <input className="w-full border rounded px-2 py-1" />
                  </div>
                </div>
                <div className="flex gap-6 mt-8">
                  <button
                    type="button"
                    className="border border-gray-400 px-6 py-2 rounded font-medium hover:bg-gray-300"
                  >
                    Discard Changes
                  </button>
                  <button
                    type="submit"
                    className="border border-gray-400 px-6 py-2 rounded font-medium hover:bg-gray-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile ;
