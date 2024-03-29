import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import cristianeLogo from "../components/images/cristianeLogo.png";

const Navigation = () => {
  const [collaps, setCollaps] = useState(false);
  return (
    <nav className="relative">
      <div className="bg-[#FFF] py-3">
        <div className="container mx-auto flex justify-end">
          <ul className="flex gap-10">
            <li>
              <Link to="/" className="">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 bg-[#9CCC65]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-60">
            <Link>
              <img
                src={cristianeLogo}className="App-logo"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="block md:hidden">
            <button className="" onClick={() => setCollaps(!collaps)}>
              <FaBars />
            </button>
          </div>
          {collaps && (
            <div className="absolute w-72 h-screen top-0 left-0 bg-black z-50 transition duration-700">
              <ul className="flex flex-col p-10 gap-5">
                <li className="text-[#fff]">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/about">About</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Services</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Projects</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:block">
            <ul className="flex gap-5 lg:gap-10">
              <li className="text-[#457431]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[#457431]">
                <Link to="/about">About</Link>
              </li>
              <li className="text-[#457431]">
                <Link to="/">Services</Link>
              </li>
              <li className="text-[#457431]">
                <Link to="/">Projects</Link>
              </li>
              <li className="text-[#457431]">
                <Link to="/">Contact Us</Link>
              </li>
              <li className="text-[#457431]">
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
