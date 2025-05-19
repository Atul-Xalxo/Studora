import React from "react";

const users = [
  { name: "Walter White", message: "Say my name!" },
  { name: "Walter White", message: "Say my name!" },
  { name: "Walter White", message: "Say my name!" },
  { name: "Walter White", message: "Say my name!" },
  { name: "Walter White", message: "Say my name!" },
  { name: "Walter White", message: "Say my name!" },
];

const messages = [
  {
    from: "other",
    text: "ASCII stands for American Standard Code for Information Interchange. Below is the ASCII character table, including descriptions of the first 32 characters. ASCII was originally designed for use with teletypes, and so the descriptions are somewhat obscure and their use is frequently not as intended.",
    time: "4 hours ago",
  },
  {
    from: "me",
    text: "Damn son where did you find this?",
  },
  {
    from: "other",
    text: "ASCII stands for American Standard Code for Information Interchange. Below is the ASCII character table, including descriptions of the first 32 characters. ASCII was originally designed for use with teletypes, and so the descriptions are somewhat obscure and their use is frequently not as intended.",
  },
  {
    from: "me",
    text: "Damn son where did you find this?",
  },
];

const Messages = () => {
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
        <main className="flex-1 flex flex-col p-10">
          <div className="flex h-[600px] gap-8">
            {/* User List */}
            <section className="w-72 bg-white rounded-lg shadow flex flex-col">
              <div className="flex items-center px-4 py-3 border-b">
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
                  placeholder="Search User"
                  className="w-full bg-gray-200 rounded px-2 py-1 text-sm outline-none"
                />
              </div>
              <div className="flex-1 overflow-y-auto">
                {users.map((user, idx) => (
                  <div
                    key={idx}
                    className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-500 mr-3"></div>
                    <div>
                      <div className="font-semibold text-sm">{user.name}</div>
                      <div className="text-xs text-gray-500">
                        {user.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Chat Area */}
            <section className="flex-1 bg-gray-100 rounded-lg shadow flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between bg-gray-300 rounded-t-lg px-6 py-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-500 mr-4"></div>
                  <div>
                    <div className="font-semibold text-base">Walter White</div>
                    <div className="text-xs text-gray-600">
                      Last seen 4 hours ago.
                    </div>
                  </div>
                </div>
                <button className="text-gray-600 text-xl px-2">⋮</button>
              </div>
              {/* Chat Messages */}
              <div className="flex-1 px-6 py-4 overflow-y-auto flex flex-col gap-6">
                {messages.map((msg, idx) =>
                  msg.from === "other" ? (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500 mt-4"></div>
                      <div>
                        <div className="bg-blue-200 text-gray-800 rounded-2xl px-4 py-3 max-w-lg text-sm">
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={idx} className="flex items-end justify-end gap-2">
                      <div className="bg-white rounded-2xl px-4 py-2 max-w-lg text-sm shadow">
                        {msg.text}
                      </div>
                      <div className="w-5 h-5 rounded-full bg-gray-700"></div>
                    </div>
                  )
                )}
              </div>
              {/* Chat Input */}
              <div className="bg-gray-200 rounded-b-lg px-4 py-3 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 rounded px-3 py-2 text-sm outline-none bg-white border border-gray-300"
                />
                <button className="text-xl text-gray-600 hover:text-gray-800">
                  <span role="img" aria-label="emoji">
                    😊
                  </span>
                </button>
                <button className="text-xl text-gray-600 hover:text-gray-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828l6.586-6.586a2 2 0 00-2.828-2.828z" />
                  </svg>
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;
