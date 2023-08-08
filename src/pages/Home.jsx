import React, { useEffect } from "react";
import image from "../../public/img/img.png";
import woman from "../../public/img/jessica.png";
import man from "../../public/img/william.png";
import logo from "../../public/img/big-logo.png";
import symbol from "../../public/img/quot.png";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="mt-12 p-12">
        <div className="flex md:flex-row flex-col justify-between items-center gap-14 ">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="md:w-6/12 w-full text-start "
          >
            <h1 className="font-normal text-5xl text-gray-900">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Find Your ").start();
                }}
              />
              <span className="text-fontcol">Part-Time Job</span>
            </h1>
            <h1 className="font-normal text-5xl text-gray-900 mt-3">
              Now It’s Easy.
            </h1>
            <p className="font-normal text-xl text-gray-900 mt-6">
              Thousands of Jobs here. Find Your New Job
              <br></br>
              Today! New Job Posting Today.
            </p>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-bgcolor rounded-full bg-gray-300 mt-8"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2 bg-fontcol rounded-full text-sm px-4 py-2 hover:bg-yellow-400 "
              >
                Search
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="md:w-6/12 w-full"
          >
            <img src={image} alt="Job Image" />
          </div>
        </div>
      </div>
      {/* 4 Steps to Get a Job section */}
      <div className="mt-12 p-12">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="text-center"
        >
          <h1 className="font-normal text-5xl text-gray-900">
            <span className="text-fontcol">4 Steps</span> to Get a Job
          </h1>
          <p className="font-normal text-xl text-gray-900 mt-5">
            Lorem ipsum dolor sit amet consectetur. Mi tellus nulla id nec
            vulputate <br></br>enim neque risus. Tortor porta nisi fames nibh
            faucibus ornare.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4  mt-10"
        >
          <div className="p-6 bg-bgcolor rounded-xl">
            <div className="mb-5">
              <svg
                className="hi-outline hi-template inline-block w-10 h-10 text-indigo-500"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_43_5)">
                  <path
                    d="M35.7667 35.7667L25.9 25.9M16.0333 30.8333C14.0898 30.8333 12.1652 30.4505 10.3696 29.7068C8.574 28.963 6.94246 27.8728 5.56816 26.4985C4.19385 25.1242 3.10369 23.4927 2.35992 21.6971C1.61615 19.9014 1.23334 17.9769 1.23334 16.0333C1.23334 14.0898 1.61615 12.1652 2.35992 10.3696C3.10369 8.574 4.19385 6.94246 5.56816 5.56816C6.94246 4.19385 8.574 3.10369 10.3696 2.35992C12.1652 1.61615 14.0898 1.23334 16.0333 1.23334C19.9585 1.23334 23.723 2.79262 26.4985 5.56816C29.2741 8.3437 30.8333 12.1081 30.8333 16.0333C30.8333 19.9585 29.2741 23.723 26.4985 26.4985C23.723 29.2741 19.9585 30.8333 16.0333 30.8333Z"
                    stroke="black"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_43_5">
                    <rect width="37" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">Search Job</h3>

            <p className="text-md font-normal text-gray-600 mt-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>

          <div className="p-6 bg-fontcol rounded-xl">
            <div className="mb-5">
              <svg
                className="hi-outline hi-cube inline-block w-10 h-10 text-indigo-500"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_43_82)">
                  <path
                    d="M21.1988 18.6483C20.8827 18.3385 20.4576 18.1649 20.0149 18.1649C19.5722 18.1649 19.1471 18.3385 18.8309 18.6483L13.7569 23.5519C13.5774 23.7 13.4304 23.8835 13.3251 24.0909C13.2198 24.2983 13.1584 24.5253 13.1449 24.7575C13.1313 24.9897 13.1658 25.2222 13.2462 25.4405C13.3266 25.6588 13.4512 25.8582 13.6122 26.0261C13.7732 26.1941 13.9671 26.327 14.1818 26.4166C14.3966 26.5062 14.6275 26.5505 14.8601 26.5469C15.0928 26.5432 15.3222 26.4915 15.5339 26.3952C15.7457 26.2988 15.9353 26.1598 16.0909 25.9868L18.3066 23.8394V33.3761C18.3066 33.8246 18.4848 34.2547 18.802 34.5718C19.1192 34.8889 19.5494 35.0671 19.998 35.0671C20.4465 35.0671 20.8767 34.8889 21.1939 34.5718C21.5111 34.2547 21.6893 33.8246 21.6893 33.3761V23.9239L23.8712 26.1221C24.0284 26.2806 24.2155 26.4064 24.4216 26.4922C24.6277 26.5781 24.8488 26.6223 25.072 26.6223C25.2953 26.6223 25.5164 26.5781 25.7225 26.4922C25.9286 26.4064 26.1157 26.2806 26.2729 26.1221C26.4314 25.9649 26.5573 25.7779 26.6431 25.5719C26.729 25.3658 26.7732 25.1448 26.7732 24.9216C26.7732 24.6983 26.729 24.4773 26.6431 24.2713C26.5573 24.0652 26.4314 23.8782 26.2729 23.721L21.1988 18.6483Z"
                    fill="black"
                  />
                  <path
                    d="M29.5879 11.3943C28.8977 9.40078 27.6032 7.67193 25.8844 6.44829C24.1656 5.22465 22.108 4.56708 19.9979 4.56708C17.8878 4.56708 15.8302 5.22465 14.1114 6.44829C12.3926 7.67193 11.098 9.40078 10.4079 11.3943C8.88828 11.5978 7.45259 12.2104 6.25441 13.1667C5.05622 14.123 4.1406 15.3869 3.60551 16.8233C3.07042 18.2597 2.93597 19.8145 3.21657 21.3213C3.49716 22.8282 4.18223 24.2305 5.19849 25.3781C5.32125 25.5943 5.49017 25.7808 5.69323 25.9242C5.89628 26.0677 6.12848 26.1646 6.37329 26.2081C6.61809 26.2516 6.86948 26.2407 7.10956 26.176C7.34963 26.1113 7.57249 25.9944 7.76225 25.8338C7.95201 25.6732 8.10402 25.4727 8.20744 25.2467C8.31087 25.0206 8.36317 24.7745 8.36061 24.526C8.35806 24.2774 8.30072 24.0325 8.19268 23.8086C8.08464 23.5847 7.92855 23.3874 7.73553 23.2307C7.08117 22.4993 6.65303 21.5939 6.50301 20.6241C6.35299 19.6544 6.48753 18.662 6.89031 17.7671C7.2931 16.8723 7.94684 16.1134 8.77232 15.5826C9.5978 15.0517 10.5596 14.7715 11.5411 14.7761H11.7102C12.1059 14.7841 12.4919 14.6531 12.8009 14.4059C13.11 14.1587 13.3225 13.8111 13.4016 13.4234C13.7121 11.8944 14.5419 10.5198 15.7502 9.53241C16.9585 8.54504 18.4711 8.00567 20.0317 8.00567C21.5923 8.00567 23.1049 8.54504 24.3132 9.53241C25.5216 10.5198 26.3513 11.8944 26.6618 13.4234C26.7409 13.8111 26.9535 14.1587 27.2625 14.4059C27.5716 14.6531 27.9575 14.7841 28.3532 14.7761H28.4547C29.4362 14.7715 30.398 15.0517 31.2235 15.5826C32.0489 16.1134 32.7027 16.8723 33.1055 17.7671C33.5082 18.662 33.6428 19.6544 33.4928 20.6241C33.3427 21.5939 32.9146 22.4993 32.2602 23.2307C32.1113 23.3977 31.9969 23.5926 31.9239 23.8042C31.8508 24.0157 31.8205 24.2397 31.8346 24.463C31.8488 24.6864 31.9072 24.9047 32.0063 25.1053C32.1055 25.3059 32.2436 25.4849 32.4125 25.6318C32.7208 25.9036 33.1176 26.0539 33.5288 26.0545C33.7689 26.0542 34.0062 26.0028 34.225 25.9036C34.4437 25.8045 34.6388 25.66 34.7973 25.4796C35.8417 24.3339 36.551 22.9232 36.8476 21.4017C37.1442 19.8802 37.0166 18.3064 36.4789 16.8525C35.9412 15.3986 35.014 14.1204 33.7986 13.1578C32.5833 12.1952 31.1266 11.5851 29.5879 11.3943Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_43_82">
                    <rect width="37" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">CV/Resume</h3>

            <p className="text-md font-normal text-gray-600 mt-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>

          <div className="p-6 bg-bgcolor rounded-xl">
            <div className="mb-5">
              <svg
                className="hi-outline hi-cog inline-block w-10 h-10 text-indigo-500"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 29.4C34.608 29.4 42 32.9587 42 37.3333V43H9V37.3333C9 32.9587 16.392 29.4 25.5 29.4ZM39.8 37.3333C39.8 34.2053 33.398 31.6667 25.5 31.6667C17.602 31.6667 11.2 34.2053 11.2 37.3333V40.7333H39.8V37.3333ZM25.5 9C27.5422 9 29.5007 9.83583 30.9447 11.3236C32.3888 12.8114 33.2 14.8293 33.2 16.9333C33.2 19.0374 32.3888 21.0553 30.9447 22.543C29.5007 24.0308 27.5422 24.8667 25.5 24.8667C23.4578 24.8667 21.4993 24.0308 20.0553 22.543C18.6112 21.0553 17.8 19.0374 17.8 16.9333C17.8 14.8293 18.6112 12.8114 20.0553 11.3236C21.4993 9.83583 23.4578 9 25.5 9ZM25.5 11.2667C24.0413 11.2667 22.6424 11.8637 21.6109 12.9264C20.5795 13.9891 20 15.4304 20 16.9333C20 18.4362 20.5795 19.8776 21.6109 20.9403C22.6424 22.003 24.0413 22.6 25.5 22.6C26.9587 22.6 28.3576 22.003 29.3891 20.9403C30.4205 19.8776 31 18.4362 31 16.9333C31 15.4304 30.4205 13.9891 29.3891 12.9264C28.3576 11.8637 26.9587 11.2667 25.5 11.2667Z"
                  fill="black"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Create Account
            </h3>

            <p className="text-md font-normal text-gray-600 mt-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>

          <div className="p-6 bg-fontcol rounded-xl">
            <div className="mb-5">
              <svg
                className="hi-outline hi-sparkles inline-block w-10 h-10 text-indigo-500"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5312 11.5781V9.79688C25.5312 9.63359 25.3977 9.5 25.2344 9.5H10.9844C10.8211 9.5 10.6875 9.63359 10.6875 9.79688V11.5781C10.6875 11.7414 10.8211 11.875 10.9844 11.875H25.2344C25.3977 11.875 25.5312 11.7414 25.5312 11.5781ZM10.9844 14.8438C10.8211 14.8438 10.6875 14.9773 10.6875 15.1406V16.9219C10.6875 17.0852 10.8211 17.2188 10.9844 17.2188H17.8125C17.9758 17.2188 18.1094 17.0852 18.1094 16.9219V15.1406C18.1094 14.9773 17.9758 14.8438 17.8125 14.8438H10.9844ZM24.9375 19.1484C20.5104 19.1484 16.9219 22.7369 16.9219 27.1641C16.9219 31.5912 20.5104 35.1797 24.9375 35.1797C29.3646 35.1797 32.9531 31.5912 32.9531 27.1641C32.9531 22.7369 29.3646 19.1484 24.9375 19.1484ZM28.9268 31.1533C27.8617 32.2184 26.4441 32.8047 24.9375 32.8047C23.4309 32.8047 22.0133 32.2184 20.9482 31.1533C19.8832 30.0883 19.2969 28.6707 19.2969 27.1641C19.2969 25.6574 19.8832 24.2398 20.9482 23.1748C22.0133 22.1098 23.4309 21.5234 24.9375 21.5234C26.4441 21.5234 27.8617 22.1098 28.9268 23.1748C29.9918 24.2398 30.5781 25.6574 30.5781 27.1641C30.5781 28.6707 29.9918 30.0883 28.9268 31.1533ZM28.2402 24.3438H26.5963C26.4998 24.3438 26.4107 24.3883 26.3551 24.4662L23.9986 27.7244L23.1414 26.5406C23.1139 26.5024 23.0777 26.4713 23.0357 26.45C22.9938 26.4287 22.9473 26.4178 22.9002 26.4182H21.2637C21.0225 26.4182 20.8814 26.6928 21.0225 26.8895L23.7611 30.6783C23.8799 30.8416 24.1211 30.8416 24.2398 30.6783L28.4777 24.815C28.6225 24.6184 28.4814 24.3438 28.2402 24.3438ZM16.3281 31.6172H7.71875V5.49219H28.5V18.2578C28.5 18.4211 28.6336 18.5547 28.7969 18.5547H30.875C31.0383 18.5547 31.1719 18.4211 31.1719 18.2578V4.00781C31.1719 3.35098 30.6412 2.82031 29.9844 2.82031H6.23438C5.57754 2.82031 5.04688 3.35098 5.04688 4.00781V33.1016C5.04688 33.7584 5.57754 34.2891 6.23438 34.2891H16.3281C16.4914 34.2891 16.625 34.1555 16.625 33.9922V31.9141C16.625 31.7508 16.4914 31.6172 16.3281 31.6172Z"
                  fill="black"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">Apply Them</h3>

            <p className="text-md font-normal text-gray-600 mt-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>
        </div>
      </div>
      {/* End 4 Steps to Get a Job section */}

      {/* Job Browsing section */}
      <div className="mt-12 p-12 text-center">
        <h1 className="font-normal text-5xl text-gray-900">
          <span className="text-fontcol">Jobs</span> Browsing
          <p className="text-md font-normal text-gray-600 mt-5 bg-gray-300">
            Pending ....
          </p>
        </h1>
      </div>
      {/* End Job Browsing section */}

      <div className="mt-12 p-12 text-center">
        <h1 className="font-normal text-5xl text-gray-900">
          <span className="text-fontcol">Blog</span> Contents
        </h1>
        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="bg-gray-200 flex md:flex-row flex-col items-center rounded-md p-6 mt-12 text-start"
        >
          <img src={woman} />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 text-4xl md:text-start text-center">
              Jessica
            </h3>
            <p className="text-lg font-normal text-gray-600 mt-5">
              Lorem ipsum dolor sit amet consectetur. Eros feugiat ac
              ullamcorper sed pellentesque eros cursus. Felis arcu dis nisi
              pharetra ut turpis ut. Nisi aliquam fermentum in malesuada. Morbi
              vehicula etiam nulla commodo ante.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="bg-gray-200 flex md:flex-row flex-col items-center rounded-md p-6 mt-6 text-start"
        >
          <img src={man} />
          <div className="ml-4">
            <h3 className="text-4xl font-semibold text-gray-900 md:text-start text-center">
              William
            </h3>

            <p className="text-lg font-normal text-gray-600 mt-3">
              Lorem ipsum dolor sit amet consectetur. Eros feugiat ac
              ullamcorper sed pellentesque eros cursus. Felis arcu dis nisi
              pharetra ut turpis ut. Nisi aliquam fermentum in malesuada. Morbi
              vehicula etiam nulla commodo ante.
            </p>
          </div>
        </div>
      </div>

      {/* About Us section */}
      <div className="mt-12 p-12 text-center">
        <h1
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="font-normal text-5xl text-gray-900"
        >
          <span className="text-fontcol">About</span> Us
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className=" flex md:flex-row flex-col  items-center mt-12 text-start"
        >
          <img src={logo} />
          <div className="ml-4 flex flex-col items-start">
            <h3 className="font-semibold text-gray-900 text-4xl">
              ENGINEERNEST
            </h3>
            <p className="text-lg font-normal text-gray-600 mt-5">
              Lorem ipsum dolor sit amet consectetur. Nunc id at at ac.
              Vestibulum vestibulum ipsum purus eu dui. Non vitae tempus
              ultrices ut tincidunt nascetur. Condimentum suspendisse imperdiet
              amet justo pellentesque. Non proin fusce eu nisi tempor. Ac
              ultrices rhoncus cras sit ligula elementum nisi. Dapibus cursus
              rhoncus suspendisse ac volutpat.
            </p>
            <p className="text-lg font-normal text-gray-600 mt-5">
              Condimentum suspendisse imperdiet amet justo pellentesque. Non
              proin fusce eu nisi tempor. Ac ultrices rhoncus cras sit ligula
              elementum nisi. Dapibus cursus rhoncus suspendisse ac volutpat.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className=" flex md:flex-row flex-col items-center justify-around mt-12 text-start"
        >
          <div className="bg-fontcol md:w-4/12 w-full h-44 flex flex-col items-center justify-center">
            <img src={symbol} className="w-12" />
            <h1 className="text-4xl font-normal ">Quote</h1>
          </div>
          <div>
            <p className="text-xl font-normal text-gray-600 mt-5 ">
              Condimentum suspendisse imperdiet amet justo pellentesque.
            </p>
            <h3 className="font-semibold text-gray-900 text-xl">
              EngineerNest Team
            </h3>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className=" flex md:flex-row flex-col  items-center justify-around mt-12 text-start"
        >
          <div className="md:w-5/12 w-full">
            <p className="text-xl font-normal text-gray-600 mt-5 ">
              Lorem ipsum dolor sit amet consectetur. Nunc id at at ac.
              Vestibulum vestibulum ipsum purus eu dui. Non vitae tempus
              ultrices ut tincidunt nascetur. Condimentum suspendisse imperdiet
              amet justo pellentesque.
            </p>
          </div>
          <div className="bg-gray-300 md:w-4/12 w-full md:mt-0 mt-3 h-44 flex flex-col items-center justify-center">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.875 17.6666H33.125V13.2499H19.875V17.6666ZM4.41663 44.1666V33.1249H13.25V35.3333H17.6666V33.1249H35.3333V35.3333H39.75V33.1249H48.5833V44.1666H4.41663ZM4.41663 30.9166V17.6666H15.4583V8.83325H37.5416V17.6666H48.5833V30.9166H39.75V26.4999H35.3333V30.9166H17.6666V26.4999H13.25V30.9166H4.41663Z"
                fill="black"
              />
            </svg>

            <h1 className="text-4xl font-normal ">Services</h1>
          </div>
        </div>
      </div>
      {/* End About Us section */}

      {/* Our team section */}
      <div className="mt-12 p-12 text-center">
        <h1 className="font-normal text-5xl text-gray-900">
          <span className="text-fontcol">Our</span> Team
        </h1>
        <div className="grid grid-cols-1 gap-10  md:grid-cols-2 xl:grid-cols-3  mt-12">
          <div className="flex flex-row items-center gap-3">
            <div>
              <img src={woman} className="w-20 h-20 rounded-full" />
            </div>
            <div className="text-start">
              <h1 className="font-normal text-xl text-gray-900">
                Michelle Yeon
              </h1>
              <p className="text-md font-normal text-gray-500">
                Founder & President
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <img src={woman} className="w-20 h-20 rounded-full" />
            </div>
            <div className="text-start">
              <h1 className="font-normal text-xl text-gray-900">
                Michelle Yeon
              </h1>
              <p className="text-md font-normal text-gray-500">
                Founder & President
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <img src={woman} className="w-20 h-20 rounded-full" />
            </div>
            <div className="text-start">
              <h1 className="font-normal text-xl text-gray-900">
                Michelle Yeon
              </h1>
              <p className="text-md font-normal text-gray-500">
                Founder & President
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <img src={woman} className="w-20 h-20 rounded-full" />
            </div>
            <div className="text-start">
              <h1 className="font-normal text-xl text-gray-900">
                Michelle Yeon
              </h1>
              <p className="text-md font-normal text-gray-500">
                Founder & President
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <img src={woman} className="w-20 h-20 rounded-full" />
            </div>
            <div className="text-start">
              <h1 className="font-normal text-xl text-gray-900">
                Michelle Yeon
              </h1>
              <p className="text-md font-normal text-gray-500">
                Founder & President
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <img src={woman} className="w-20 h-20 rounded-full" />
            </div>
            <div className="text-start">
              <h1 className="font-normal text-xl text-gray-900">
                Michelle Yeon
              </h1>
              <p className="text-md font-normal text-gray-500">
                Founder & President
              </p>
            </div>
          </div>
        </div>
        <div className="bg-fontcol md:h-44 rounded-md flex md:flex-row flex-col items-center justify-around mt-10">
          <div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.6666 37.3335C38.3833 37.3335 37.3333 36.2835 37.3333 35.0002H18.6666C18.6666 36.2835 17.6166 37.3335 16.3333 37.3335C15.05 37.3335 14 36.2835 14 35.0002H4.66663V42.0002C4.66663 44.5668 6.76663 46.6668 9.33329 46.6668H46.6666C49.2333 46.6668 51.3333 44.5668 51.3333 42.0002V35.0002H42C42 36.2835 40.95 37.3335 39.6666 37.3335ZM46.6666 18.6668H39.6666V14.0002C39.6666 11.4335 37.5666 9.3335 35 9.3335H21C18.4333 9.3335 16.3333 11.4335 16.3333 14.0002V18.6668H9.33329C6.76663 18.6668 4.66663 20.7668 4.66663 23.3335V32.6668H14V30.3335C14 29.0502 15.05 28.0002 16.3333 28.0002C17.6166 28.0002 18.6666 29.0502 18.6666 30.3335V32.6668H37.3333V30.3335C37.3333 29.0502 38.3833 28.0002 39.6666 28.0002C40.95 28.0002 42 29.0502 42 30.3335V32.6668H51.3333V23.3335C51.3333 20.7668 49.2333 18.6668 46.6666 18.6668ZM35 18.6668H21V14.0002H35V18.6668Z"
                fill="black"
              />
            </svg>
            <h3 className="font-semibold text-gray-900 text-xl">100</h3>
            <p className="font-normal text-gray-900">Jobs</p>
          </div>
          <div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9 27.9998C21.3134 27.9998 23.628 27.0411 25.3346 25.3345C27.0412 23.6279 28 21.3133 28 18.8998C28 16.4863 27.0412 14.1717 25.3346 12.4651C23.628 10.7586 21.3134 9.7998 18.9 9.7998C16.4865 9.7998 14.1719 10.7586 12.4653 12.4651C10.7587 14.1717 9.79995 16.4863 9.79995 18.8998C9.79995 21.3133 10.7587 23.6279 12.4653 25.3345C14.1719 27.0411 16.4865 27.9998 18.9 27.9998ZM34.8236 42.4058C36.3076 43.0134 38.1947 43.3998 40.5971 43.3998C51.7971 43.3998 51.7972 34.9998 51.7972 34.9998C51.7972 33.8864 51.355 32.8185 50.568 32.0309C49.7809 31.2434 48.7134 30.8005 47.5999 30.7998H34.6416C35.7419 32.1326 36.4028 33.8378 36.4028 35.6998V36.6966C36.397 36.9324 36.3811 37.1678 36.3552 37.4022C36.1662 39.1517 35.6447 40.8495 34.8236 42.4058ZM47.5999 20.9998C47.5999 22.8563 46.8625 24.6368 45.5497 25.9496C44.2369 27.2623 42.4565 27.9998 40.5999 27.9998C38.7434 27.9998 36.963 27.2623 35.6502 25.9496C34.3374 24.6368 33.6 22.8563 33.6 20.9998C33.6 19.1433 34.3374 17.3628 35.6502 16.0501C36.963 14.7373 38.7434 13.9998 40.5999 13.9998C42.4565 13.9998 44.2369 14.7373 45.5497 16.0501C46.8625 17.3628 47.5999 19.1433 47.5999 20.9998ZM4.19995 36.3998C4.19995 34.9146 4.78995 33.4902 5.84015 32.44C6.89036 31.3898 8.31474 30.7998 9.79995 30.7998H28C29.4852 30.7998 30.9095 31.3898 31.9597 32.44C33.01 33.4902 33.6 34.9146 33.6 36.3998C33.6 36.3998 33.6 47.5998 18.9 47.5998C4.19995 47.5998 4.19995 36.3998 4.19995 36.3998Z"
                fill="black"
              />
            </svg>

            <h3 className="font-semibold text-gray-900 text-xl">100</h3>
            <p className="font-normal text-gray-900">Jobs</p>
          </div>
          <div>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 35H37.3333V39.6667H42M42 25.6667H37.3333V30.3333H42M46.6666 44.3333H28V39.6667H32.6666V35H28V30.3333H32.6666V25.6667H28V21H46.6666M23.3333 16.3333H18.6666V11.6667H23.3333M23.3333 25.6667H18.6666V21H23.3333M23.3333 35H18.6666V30.3333H23.3333M23.3333 44.3333H18.6666V39.6667H23.3333M14 16.3333H9.33329V11.6667H14M14 25.6667H9.33329V21H14M14 35H9.33329V30.3333H14M14 44.3333H9.33329V39.6667H14M28 16.3333V7H4.66663V49H51.3333V16.3333H28Z"
                fill="black"
              />
            </svg>

            <h3 className="font-semibold text-gray-900 text-xl">100</h3>
            <p className="font-normal text-gray-900">Jobs</p>
          </div>
        </div>
      </div>
      {/* End Our team section */}

      <div className="mt-12 p-12 text-center">
        <h1 className="font-normal text-5xl text-gray-900">
          <span className="text-fontcol">Our</span> Partners
        </h1>
        <Marquee direction="right" speed={100}>
          <div className="flex gap-32 mt-12">
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-28 h-20"
                src="../img/partner/aba.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-24 h-20"
                src="../img/partner/acelida.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-32 h-20"
                src="../img/partner/Cellcard.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-28 h-20"
                src="../img/partner/wing.png"
                alt=""
              />
            </div>
          </div>
        </Marquee>
      </div>

      <div className="mt-12 mb-10 text-center p-12">
        <h1 className="font-normal text-5xl text-gray-900">
          <span className="text-fontcol">Contact</span> Us
        </h1>
        <div className="flex md:flex-row flex-col mt-8">
          <div className="bg-gray-300 md:w-8/12 w-full p-10">
            <div className="flex flex-col items-start">
              <h3 className=" text-gray-900 font-semibold text-4xl">
                Send us a message
              </h3>
              <p className="text-lg font-normal text-gray-600 text-start">
                Lorem ipsum dolor sit amet consectetur. Nunc id at at ac.
                Vestibulum vestibulum ipsum purus eu dui.
              </p>
              <div className="w-full mt-3">
                <input
                  type="text"
                  className="mb-6 bg-white border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5  \ "
                  placeholder="Enter your Name"
                />
                <input
                  type="text"
                  className="mb-6 bg-white border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:bg-gray-700 \ "
                  placeholder="Enter your Email"
                />

                <textarea
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border outline-none"
                  placeholder="Enter Your message "
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-gray-900 right-2.5 bottom-2 bg-fontcol rounded-md text-lg px-4 py-2 mt-3"
              >
                Send Now
              </button>
            </div>
          </div>
          <div className="bg-fontcol md:w-4/12 w-full flex flex-col gap-y-10 p-12">
            <div className="flex flex-col items-center">
              <svg
                width="31"
                height="42"
                viewBox="0 0 31 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 19.9582C14.1186 19.9582 12.7939 19.4094 11.8171 18.4327C10.8404 17.4559 10.2916 16.1312 10.2916 14.7498C10.2916 13.3685 10.8404 12.0437 11.8171 11.067C12.7939 10.0902 14.1186 9.5415 15.5 9.5415C16.8813 9.5415 18.2061 10.0902 19.1828 11.067C20.1596 12.0437 20.7083 13.3685 20.7083 14.7498C20.7083 15.4338 20.5736 16.1111 20.3118 16.743C20.0501 17.3749 19.6664 17.949 19.1828 18.4327C18.6992 18.9163 18.125 19.3 17.4931 19.5617C16.8612 19.8235 16.1839 19.9582 15.5 19.9582ZM15.5 0.166504C11.6322 0.166504 7.92289 1.70296 5.18798 4.43786C2.45308 7.17277 0.916626 10.8821 0.916626 14.7498C0.916626 25.6873 15.5 41.8332 15.5 41.8332C15.5 41.8332 30.0833 25.6873 30.0833 14.7498C30.0833 10.8821 28.5468 7.17277 25.8119 4.43786C23.077 1.70296 19.3677 0.166504 15.5 0.166504Z"
                  fill="black"
                />
              </svg>

              <h3 className="font-semibold text-gray-900 text-xl">Address</h3>
              <p className="font-normal text-gray-900">
                Kompong Spue, Cambodia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2917 22.4792C17.2917 28.375 22.125 33.1875 28.0208 36.2083L32.6042 31.625C33.1667 31.0625 34 30.875 34.7292 31.125C37.0625 31.8958 39.5833 32.3125 42.1667 32.3125C43.3125 32.3125 44.25 33.25 44.25 34.3958V41.6667C44.25 42.8125 43.3125 43.75 42.1667 43.75C22.6042 43.75 6.75 27.8958 6.75 8.33333C6.75 7.1875 7.6875 6.25 8.83333 6.25H16.125C17.2708 6.25 18.2083 7.1875 18.2083 8.33333C18.2083 10.9375 18.625 13.4375 19.3958 15.7708C19.625 16.5 19.4583 17.3125 18.875 17.8958L14.2917 22.4792Z"
                  fill="black"
                />
              </svg>

              <h3 className="font-semibold text-gray-900 text-xl">Address</h3>
              <p className="font-normal text-gray-900">
                Kompong Spue, Cambodia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="43"
                height="34"
                viewBox="0 0 43 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.1666 0.333496H4.83329C2.54163 0.333496 0.687459 2.2085 0.687459 4.50016L0.666626 29.5002C0.666626 31.7918 2.54163 33.6668 4.83329 33.6668H38.1666C40.4583 33.6668 42.3333 31.7918 42.3333 29.5002V4.50016C42.3333 2.2085 40.4583 0.333496 38.1666 0.333496ZM38.1666 8.66683L21.5 19.0835L4.83329 8.66683V4.50016L21.5 14.9168L38.1666 4.50016V8.66683Z"
                  fill="black"
                />
              </svg>

              <h3 className="font-semibold text-gray-900 text-xl">Address</h3>
              <p className="font-normal text-gray-900">
                Kompong Spue, Cambodia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
