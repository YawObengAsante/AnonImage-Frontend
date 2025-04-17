import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold gradient-text">
            Welcome Back (Maybe)
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Prove you're not a robot (even though we can't be sure)
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm bg-white p-6 border-2 border-blue-200">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md p-2 border"
                value={formData.email}
                onChange={handleChange}
                placeholder="not@your.real.email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md p-2 border"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-700 flex justify-center gap-x-3">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </Link>
            <Link to="/">
              <span className="font-bold">Go To Home</span>
            </Link>
          </p>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 text-center">
          <p className="text-xs text-blue-700">
            By logging in, you confirm you've read our imaginary Privacy Policy
            and agree to terms that don't actually exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
