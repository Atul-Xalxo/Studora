import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({ text: "", type: "" });

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage({
        text: "Password reset link has been sent to your email",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      setMessage({
        text: "Failed to send reset link. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="relative flex w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
        {/* Left Panel */}
        <div className="w-2/5 bg-slate-900 flex items-center justify-center p-8">
          <h1 className="text-4xl font-bold tracking-widest text-white">
            STUDORA
          </h1>
        </div>
        {/* Right Panel */}
        <div className="w-3/5 bg-white p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Forgot Password,</h2>
            <p className="text-gray-700 mb-6">
              No worries, we’ll email you reset instructions
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full border-b border-gray-400 py-2 text-lg outline-none focus:border-blue-500 transition-colors placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="w-1/2 mx-auto border border-gray-700 rounded py-2 font-medium transition-colors hover:bg-gray-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Reset"}
            </button>
            {message.text && (
              <div
                className={`text-center text-sm mt-2 ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message.text}
              </div>
            )}
          </form>
          <div className="mt-12 flex items-center">
            <Link to="/login" >
              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-2 text-blue-600 hover:underline text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
