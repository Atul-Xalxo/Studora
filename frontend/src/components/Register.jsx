import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ onSwitch, showLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerMessage, setRegisterMessage] = useState({
    text: "",
    type: "",
  });

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

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

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
    } else if (!/(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterMessage({ text: "", type: "" });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call to your registration endpoint
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock registration check - in a real app you'd check if email is already in use
      // For this demo we'll assume the registration is successful

      // Check if email is already in use (for demo purposes only)
      const isEmailTaken = formData.email === "taken@example.com";

      if (isEmailTaken) {
        setRegisterMessage({
          text: "This email is already registered. Please use a different email or login.",
          type: "error",
        });
      } else {
        // Success case
        setRegisterMessage({
          text: "Registration successful! Redirecting to login...",
          type: "success",
        });

        // In a real app, you might:
        // 1. Create the user account via API
        // 2. Either log them in automatically, or
        // 3. Redirect to login page with a success message

        // For demo, we'll redirect to login after a delay
        setTimeout(() => {
          // Instead of redirecting, we'll switch to login form
          onSwitch();
        }, 2000);
      }
    } catch (error) {
      setRegisterMessage({
        text: "An error occurred during registration. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="relative flex w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
        {/* Right side - Registration form */}
        <div className="w-3/5 bg-white p-8 z-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Welcome,</h2>
            <p className="text-gray-600">Please Register to Continue</p>
          </div>

          {registerMessage.text && (
            <div
              className={`mb-4 p-3 rounded text-sm ${
                registerMessage.type === "success"
                  ? "bg-green-50 border border-green-100 text-green-700"
                  : "bg-red-50 border border-red-100 text-red-700"
              }`}
            >
              {registerMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className={`w-full border-b ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } py-2 outline-none focus:border-blue-500 transition-colors`}
                value={formData.username}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>

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
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="flex justify-between text-blue-500">
            <button
              type="button"
              onClick={onSwitch}
              className="hover:underline bg-transparent border-none outline-none cursor-pointer"
            >
              Already have an account? Login
            </button>
          </div>
        </div>

        {/* Sliding Right Panel */}
        <div
          className={`absolute top-0 right-0 w-2/5 h-full bg-slate-900 flex items-center justify-center p-8 transition-transform duration-700 ease-in-out ${
            showLogin ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <h1 className="text-2xl font-bold tracking-wider text-white">
            STUDORA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
