import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onSwitch, showLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginMessage, setLoginMessage] = useState({ text: "", type: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginMessage({ text: "", type: "" });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call to your authentication endpoint
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock login authentication
      // In a real app, you would check the credentials against your backend
      if (
        formData.email === "user@example.com" &&
        formData.password === "password123"
      ) {
        // Success case
        setLoginMessage({
          text: "Login successful! Redirecting...",
          type: "success",
        });

        // Simulate storing auth token
        localStorage.setItem("authToken", "mock-jwt-token");
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        // Failed login
        setLoginMessage({
          text: "Invalid email or password. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setLoginMessage({
        text: "An error occurred. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="relative flex w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
        {/* Sliding Left Panel */}
        <div
          className={`absolute top-0 left-0 w-2/5 h-full bg-slate-900 flex items-center justify-center p-8 transition-transform duration-700 ease-in-out ${
            showLogin ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <h1 className="text-2xl font-bold tracking-wider text-white">
            STUDORA
          </h1>
        </div>

        {/* Right side - Login form */}
        <div className="w-3/5 ml-auto bg-white p-8 z-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Welcome Back,</h2>
            <p className="text-gray-600">Please Login to Continue</p>
          </div>

          {loginMessage.text && (
            <div
              className={`mb-4 p-3 rounded text-sm ${
                loginMessage.type === "success"
                  ? "bg-green-50 border border-green-100 text-green-700"
                  : "bg-red-50 border border-red-100 text-red-700"
              }`}
            >
              {loginMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`w-full border-b ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } py-2 outline-none focus:border-blue-500 transition-colors`}
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-8">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`w-full border-b ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } py-2 outline-none focus:border-blue-500 transition-colors`}
                value={formData.password}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className={`mb-8 w-full rounded border ${
                isSubmitting
                  ? "bg-gray-200 border-gray-300 cursor-not-allowed"
                  : "border-gray-300 hover:bg-gray-50"
              } py-2 font-medium transition-colors`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row justify-between text-blue-500 gap-4 sm:gap-0">
            <button
              onClick={handleForgotPassword}
              className="hover:underline bg-transparent border-none outline-none cursor-pointer text-sm"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={onSwitch}
              className="hover:underline bg-transparent border-none outline-none cursor-pointer text-sm"
            >
              Don't have an account? Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
