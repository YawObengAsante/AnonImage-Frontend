import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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
    // Handle sign up logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Join Our Anonymous Collective
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            (We promise we won't remember who you are)
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
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-blue-700"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md p-2 border"
                value={formData.username}
                onChange={handleChange}
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
                autoComplete="new-password"
                required
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-blue-300 rounded-md p-2 border"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
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

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-700 flex justify-center gap-x-3">
            Already have an account?{" "}
            <Link
              to="/log-in"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Log in
            </Link>
            <Link to="/">
              <span className="font-bold">Go To Home</span>
            </Link>
          </p>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 text-center">
          <p className="text-xs text-blue-700">
            By signing up, you agree to our non-existent Terms of Service and
            Privacy Policy that we definitely didn't copy from another website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
