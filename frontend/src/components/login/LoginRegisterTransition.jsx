import React, { useState } from 'react'
import Login from './Login';
import Register from '../Register';

const LoginRegisterTransition = () => {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div className="relative min-h-screen flex  justify-center bg-gray-50 overflow-hidden">
        <div className="w-full max-w-3xl relative h-[500px]">
          {/* Login Panel */}
          <div
            className={`
            absolute inset-0 transition-all duration-700 ease-in-out
            ${
              showLogin
                ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                : "opacity-0 -translate-x-10 z-0 pointer-events-none"
            }
          `}
          >
            <Login onSwitch={() => setShowLogin(false)} />
          </div>
          {/* Register Panel */}
          <div
            className={`
            absolute inset-0 transition-all duration-700 ease-in-out
            ${
              showLogin
                ? "opacity-0 translate-x-10 z-0 pointer-events-none"
                : "opacity-100 translate-x-0 z-10 pointer-events-auto"
            }
          `}
          >
            <Register
              onSwitch={() => setShowLogin(true)}
              showLogin={showLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterTransition