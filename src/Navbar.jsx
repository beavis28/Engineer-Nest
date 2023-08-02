import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        {/* <img
          src="https://www.figma.com/file/LflSO21OuVBOgMI3Bbjssv/Landing-Page?type=design&node-id=24-28&mode=design&t=aXwy72sRt059u9gc-4"
          className="w-100 h-10 mr-2"
          alt="Logo"
        /> */}
        <svg
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.4417 42.75C64.7583 41.1667 64.9167 39.5833 64.9167 38C64.9167 36.4167 64.7583 34.8333 64.4417 33.25L69.6667 29.45C70.3 28.975 70.6167 28.025 70.1417 27.2333L63.3333 15.5167C62.8583 14.725 62.0667 14.4083 61.275 14.8833L55.4167 17.4167C53.0417 15.3583 50.1917 13.775 47.1833 12.6667L46.55 6.175C46.3917 5.38333 45.7583 4.75 44.9667 4.75H31.35C30.5583 4.75 29.7667 5.38333 29.7667 6.175L28.8167 12.6667C25.8083 13.775 22.9583 15.3583 20.5833 17.4167L14.725 14.725C13.9333 14.4083 12.9833 14.725 12.6667 15.5167L5.85834 27.2333C5.38334 28.025 5.70001 28.975 6.33334 29.45L11.5583 33.25C11.2417 34.8333 11.0833 36.4167 11.0833 38C11.0833 39.5833 11.2417 41.1667 11.5583 42.75L6.33334 46.55C5.70001 47.025 5.38334 47.975 5.85834 48.7667L12.6667 60.4833C13.1417 61.275 13.9333 61.5917 14.725 61.1167L20.5833 58.5833C22.9583 60.6417 25.8083 62.225 28.8167 63.3333L29.45 69.825C29.6083 70.6167 30.2417 71.25 31.0333 71.25H44.65C45.4417 71.25 46.2333 70.6167 46.2333 69.825L46.8667 63.3333C49.875 62.225 52.725 60.6417 55.1 58.5833L60.9583 61.275C61.75 61.5917 62.7 61.275 63.0167 60.6417L69.825 48.925C70.3 48.1333 69.9833 47.1833 69.35 46.7083L64.4417 42.75ZM38 55.4167C28.3417 55.4167 20.5833 47.6583 20.5833 38C20.5833 28.3417 28.3417 20.5833 38 20.5833C47.6583 20.5833 55.4167 28.3417 55.4167 38C55.4167 47.6583 47.6583 55.4167 38 55.4167Z"
            fill="#FF9800"
          />
          <path
            d="M42.1374 42.4939L44.0611 44.4199L50.4733 38L44.0611 31.5801L42.1374 33.5061L46.626 38L42.1374 42.4939ZM34.4428 33.5061L32.5191 31.5801L26.1069 38L32.5191 44.4199L34.4428 42.4939L29.9542 38L34.4428 33.5061ZM39.5187 30.7481L40.9101 31.1282L37.0628 45.2519L35.6713 44.8719L39.5187 30.7481Z"
            fill="#EF6C00"
          />
        </svg>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            About Us
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Fourth Link
          </a>
        </div>
        <div>
          <button className="inline-flex items-center rounded-md bg-amber-500 border-0 py-2 px-4 text-white">
            <a href="/signup" >
              Signup
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
