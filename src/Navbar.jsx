import React, { useState, useEffect } from "react";
import logo from "../public/img/logo.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";

const Navvigationbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="font-semibold text-2xl text-gray-900">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="font-semibold text-2xl text-gray-900">
          Jobs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="font-semibold text-2xl text-gray-900">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="font-semibold text-2xl text-gray-900">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="font-semibold text-2xl text-gray-900">
          Contact Us
        </a>
      </Typography>
    </ul>
  );
  return (
    <div>
      <div className=" flex items-center justify-between text-blue-gray-900 p-12">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <a className="cursor-pointer" href="">
            <img src={logo} className="bg-inherit md:w-72 w-44" alt="Logo" />
          </a>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block items-center rounded-md bg-amber-500 border-0 py-2 px-4 text-white"
        >
          <a href="/signup" className="font-semibold text-2xl text-gray-900">
            SIGN UP
          </a>
        </Button>

        <div
          // variant="text"
          className=" lg:hidden"
          // ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-12 w-12 text-fontcol"
              viewBox="0 0 24 34"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-16 text-fontcol "
              fill="none"
              viewBox="0 0 24 34"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 items-center rounded-md bg-amber-500 border-0 py-2 px-4 text-white"
          >
            <a href="/signup" className="font-semibold text-2xl text-gray-900">
              SIGN UP
            </a>
          </Button>
        </div>
      </MobileNav>
    </div>
  );
};

export default Navvigationbar;
