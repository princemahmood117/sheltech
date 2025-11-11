import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

export default function Login() {

  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }
  return (
   <>
   {isLoading && <LoadingScreen handleLoadingComplete={handleLoadingComplete}></LoadingScreen>}
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: "rgb(214, 214, 214)" }}
    >
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-24">
        <h1
          style={{ fontFamily: "'Spectral', Arial, Helvetica, sans-serif" }}
          className="md:text-6xl text-4xl mb-6"
        >
          User Sign In
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email*"
          className="border-b py-3 mb-4 w-full placeholder-[rgb(8,8,43)]"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password*"
          className="border-b py-3 mb-6 w-full placeholder-[rgb(8,8,43)]"
        />

        {/* Sign In Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md w-full text-center">
          Sign In
        </button>

        {/* Bottom Text */}
        <p style={{fontFamily: "'Arial', sans-serif",}} className="mt-8 text-[15px] font-normal">
          Do not have an account?
          <Link to={'/sign-up'} className="text-red-600 ml-1 underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side (Blank) */}
      <div style={{ backgroundColor: "rgb(214, 214, 214)" }} className="hidden md:block md:w-1/2 bg-gray-100"></div>
    </div>
   </>
  );
}
