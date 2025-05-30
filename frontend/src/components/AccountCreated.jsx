import React from "react";
import { useNavigate } from "react-router-dom";

const AccountCreated = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
   navigate("/login");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-2xl rounded-lg shadow-lg overflow-hidden">
        {/* Left Panel */}
        <div className="w-2/5 bg-slate-900 flex items-center justify-center p-8 transition-transform duration-700 ease-in-out">
          <h1 className="text-3xl font-bold tracking-widest text-white">
            STUDORA
          </h1>
        </div>
        {/* Right Panel */}
        <div className="w-3/5 bg-white flex flex-col justify-center items-center p-12 transition-transform duration-700 ease-in-out">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
            <p className="text-gray-600">
              Your account has been created successfully.
              <br />
              You can now log in to your account.
            </p>
          </div>
          <button
            onClick={handleLogin}
            className="w-full border border-gray-400 rounded py-2 font-semibold hover:bg-gray-100 transition-colors duration-700 ease-in-out"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreated;
