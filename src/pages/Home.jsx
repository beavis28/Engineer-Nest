import React, { useEffect } from "react";
import logo from "../../public/img/big-logo.png";
import Bg from "../../public/img/bg.png";
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
      <section
        id="home"
        className="p-12  bg-cover bg-center"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex md:flex-row flex-col justify-center items-center gap-14 h-screen ">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="w-full text-start xl:px-28 px-0  "
          >
            <h1 className="font-normal text-5xl text-gray-100 ">
              <span>Connect. Collaborate.</span>
              <Typewriter
                options={{
                  strings: ["Diversify Your Portfolio"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="font-normal text-xl text-gray-100 mt-6">
              Empowering Engineers with Dynamic Opportunities. <br></br>Bridging
              Startups with Expertise.
            </p>
            <div className="flex gap-6 mt-3">
              <button className="border border-gray-100 text-gray-100 px-7 py-2">
                I’m a Jobseeker
              </button>
              <button className="border border-gray-100 text-gray-100 px-7 py-2">
                I’m Hiring
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="section5" className="mt-12 text-center">
        <hr />
        <Marquee direction="right" speed={100}>
          <div className="flex gap-32 mt-12">
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-24 h-20"
                src="../img/Postmates.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-20 h-18"
                src="../img/aritable.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-20 h-18"
                src="../img/doordash.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-20 h-18"
                src="../img/nerdwallet.png"
                alt=""
              />
            </div>
          </div>
        </Marquee>
        <hr />
      </section>
      <section id="engineer" className="p-12 text-center">
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <div className="flex md:flex-row flex-col  items-center ">
            <img src={logo} />
            <div className="md:ml-20 ml-0">
              <h3 className="font-semibold text-gray-900 text-4xl">
                ENGINEERNEST
              </h3>
              <div className="mt-6">
                <span className="text-blue-600 font-bold">Mission</span>
                <p className="text-lg font-normal text-gray-600">
                  Empowering engineers to diversify their skillset and grow
                  their income, while providing startups the flexibility of
                  accessing top-tier talent on demand.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-blue-600 font-bold">Vision</span>
                <p className="text-lg font-normal text-gray-600">
                  To be the world's leading platform where engineering prowess
                  meets startup innovation, fostering collaborative success and
                  personal growth.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <div className="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3  ">
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="65" height="65" rx="10" fill="#0055B0" />
                  <path
                    d="M23.1688 24.0813C23.0235 23.936 22.851 23.8208 22.6612 23.7421C22.4714 23.6635 22.268 23.623 22.0625 23.623C21.857 23.623 21.6536 23.6635 21.4638 23.7421C21.274 23.8208 21.1015 23.936 20.9562 24.0813C20.811 24.2265 20.6957 24.399 20.6171 24.5888C20.5385 24.7786 20.498 24.9821 20.498 25.1875C20.498 25.393 20.5385 25.5964 20.6171 25.7862C20.6957 25.976 20.811 26.1485 20.9562 26.2938L24.5406 29.875H12.6875C12.2731 29.875 11.8757 30.0396 11.5826 30.3327C11.2896 30.6257 11.125 31.0231 11.125 31.4375C11.125 31.8519 11.2896 32.2493 11.5826 32.5424C11.8757 32.8354 12.2731 33 12.6875 33H24.5406L20.9562 36.5813C20.811 36.7265 20.6957 36.899 20.6171 37.0888C20.5385 37.2786 20.498 37.4821 20.498 37.6875C20.498 37.893 20.5385 38.0964 20.6171 38.2862C20.6957 38.476 20.811 38.6485 20.9562 38.7938C21.1015 38.939 21.274 39.0543 21.4638 39.1329C21.6536 39.2115 21.857 39.252 22.0625 39.252C22.268 39.252 22.4714 39.2115 22.6612 39.1329C22.851 39.0543 23.0235 38.939 23.1688 38.7938L29.4188 32.5438C29.5643 32.3986 29.6797 32.2262 29.7585 32.0364C29.8372 31.8465 29.8778 31.643 29.8778 31.4375C29.8778 31.232 29.8372 31.0285 29.7585 30.8387C29.6797 30.6488 29.5643 30.4764 29.4188 30.3313L23.1688 24.0813ZM45.0438 26.2938C45.3371 26.0004 45.502 25.6024 45.502 25.1875C45.502 24.7726 45.3371 24.3747 45.0438 24.0813C44.7504 23.7879 44.3524 23.623 43.9375 23.623C43.5226 23.623 43.1246 23.7879 42.8312 24.0813L36.5812 30.3313C36.4357 30.4764 36.3203 30.6488 36.2415 30.8387C36.1628 31.0285 36.1222 31.232 36.1222 31.4375C36.1222 31.643 36.1628 31.8465 36.2415 32.0364C36.3203 32.2262 36.4357 32.3986 36.5812 32.5438L42.8312 38.7938C43.1246 39.0872 43.5226 39.252 43.9375 39.252C44.3524 39.252 44.7504 39.0872 45.0438 38.7938C45.3371 38.5004 45.502 38.1024 45.502 37.6875C45.502 37.2726 45.3371 36.8747 45.0438 36.5813L41.4594 33H53.3125C53.7269 33 54.1243 32.8354 54.4174 32.5424C54.7104 32.2493 54.875 31.8519 54.875 31.4375C54.875 31.0231 54.7104 30.6257 54.4174 30.3327C54.1243 30.0396 53.7269 29.875 53.3125 29.875H41.4594L45.0438 26.2938Z"
                    fill="white"
                  />
                </svg>

                <div className="text-start">
                  <h1 className="font-normal text-xl text-gray-900">
                    Side-job matchmaking <br></br>for engineers
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="65" height="65" rx="10" fill="#0055B0" />
                  <path
                    d="M12.6875 17.375V29.875H21.4922L26.75 39.1063V50.1875H39.25V37.6875H29.5359L25.0906 29.875H25.1875V25.1875H40.8125V29.875H53.3125V17.375H40.8125V22.0625H25.1875V17.375H12.6875ZM15.8125 20.5H22.0625V26.75H15.8125V20.5ZM43.9375 20.5H50.1875V26.75H43.9375V20.5ZM30.5281 40.8125H36.125V47.0625H29.875V41.1844L30.5281 40.8125Z"
                    fill="white"
                  />
                </svg>

                <div className="text-start">
                  <h1 className="font-normal text-xl text-gray-900">
                    Startups' project-based <br></br>hiring portal
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="65" height="65" rx="10" fill="#0055B0" />
                  <path
                    d="M37.792 53.2083C36.3337 53.625 34.667 53.8333 33.0003 53.8333C21.542 53.8333 12.167 44.4583 12.167 33C12.167 21.5416 21.542 12.1666 33.0003 12.1666C35.7087 12.1666 38.417 12.7916 40.917 13.625L37.5837 16.9583C36.1253 16.5416 34.667 16.3333 33.0003 16.3333C23.8337 16.3333 16.3337 23.8333 16.3337 33C16.3337 42.1666 23.8337 49.6666 33.0003 49.6666C33.8337 49.6666 34.8753 49.6666 35.7087 49.4583C36.1253 50.9166 36.9587 52.1666 37.792 53.2083ZM24.4587 29.0416L21.542 31.9583L30.917 41.3333L51.7503 20.5L48.8337 17.5833L30.917 35.5L24.4587 29.0416ZM45.5003 37.1666V43.4166H39.2503V47.5833H45.5003V53.8333H49.667V47.5833H55.917V43.4166H49.667V37.1666H45.5003Z"
                    fill="white"
                  />
                </svg>

                <div className="text-start">
                  <h1 className="font-normal text-xl text-gray-900">
                    Skill-to-project <br></br>alignment tools
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="p-12 h-56"
        style={{
          backgroundImage: "url('../img/smallbg.png')",
          backgroundSize: "cover",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center md:text-4xl text-xl font-semibold text-gray-100">
          “Bridging Engineers and Startups in a Symphony of Innovation.”
        </h1>
      </div>
      {/* 4 Steps to Get a Job section */}
      <section id="section1" className="mt-12 p-12">
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
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_122_61)">
                  <path
                    d="M21.199 18.6483C20.8828 18.3385 20.4577 18.1649 20.015 18.1649C19.5723 18.1649 19.1472 18.3385 18.8311 18.6483L13.757 23.5519C13.5775 23.7 13.4305 23.8835 13.3252 24.0909C13.2199 24.2983 13.1586 24.5253 13.145 24.7575C13.1314 24.9897 13.1659 25.2222 13.2463 25.4405C13.3267 25.6588 13.4513 25.8582 13.6123 26.0261C13.7733 26.1941 13.9672 26.327 14.182 26.4166C14.3967 26.5062 14.6276 26.5505 14.8602 26.5469C15.0929 26.5432 15.3223 26.4915 15.5341 26.3952C15.7458 26.2988 15.9355 26.1598 16.091 25.9868L18.3067 23.8394V33.3761C18.3067 33.8246 18.4849 34.2547 18.8021 34.5718C19.1193 34.8889 19.5495 35.0671 19.9981 35.0671C20.4467 35.0671 20.8769 34.8889 21.1941 34.5718C21.5113 34.2547 21.6894 33.8246 21.6894 33.3761V23.9239L23.8713 26.1221C24.0285 26.2806 24.2156 26.4064 24.4217 26.4922C24.6278 26.5781 24.8489 26.6223 25.0722 26.6223C25.2954 26.6223 25.5165 26.5781 25.7226 26.4922C25.9287 26.4064 26.1158 26.2806 26.273 26.1221C26.4316 25.9649 26.5574 25.7779 26.6433 25.5719C26.7291 25.3658 26.7733 25.1448 26.7733 24.9216C26.7733 24.6983 26.7291 24.4773 26.6433 24.2713C26.5574 24.0652 26.4316 23.8782 26.273 23.721L21.199 18.6483Z"
                    fill="#ECECEC"
                  />
                  <path
                    d="M29.5879 11.3943C28.8977 9.40078 27.6032 7.67193 25.8844 6.44829C24.1656 5.22465 22.108 4.56708 19.9979 4.56708C17.8878 4.56708 15.8302 5.22465 14.1114 6.44829C12.3926 7.67193 11.098 9.40078 10.4079 11.3943C8.88828 11.5978 7.45259 12.2104 6.25441 13.1667C5.05622 14.123 4.1406 15.3869 3.60551 16.8233C3.07042 18.2597 2.93597 19.8145 3.21657 21.3213C3.49716 22.8282 4.18223 24.2305 5.19849 25.3781C5.32125 25.5943 5.49017 25.7808 5.69323 25.9242C5.89628 26.0677 6.12848 26.1646 6.37329 26.2081C6.61809 26.2516 6.86948 26.2407 7.10956 26.176C7.34963 26.1113 7.57249 25.9944 7.76225 25.8338C7.95201 25.6732 8.10402 25.4727 8.20744 25.2467C8.31087 25.0206 8.36317 24.7745 8.36061 24.526C8.35806 24.2774 8.30072 24.0325 8.19268 23.8086C8.08464 23.5847 7.92855 23.3874 7.73553 23.2307C7.08117 22.4993 6.65303 21.5939 6.50301 20.6241C6.35299 19.6544 6.48753 18.662 6.89031 17.7671C7.2931 16.8723 7.94684 16.1134 8.77232 15.5826C9.5978 15.0517 10.5596 14.7715 11.5411 14.7761H11.7102C12.1059 14.7841 12.4919 14.6531 12.8009 14.4059C13.11 14.1587 13.3225 13.8111 13.4016 13.4234C13.7121 11.8944 14.5419 10.5198 15.7502 9.53241C16.9585 8.54504 18.4711 8.00567 20.0317 8.00567C21.5923 8.00567 23.1049 8.54504 24.3132 9.53241C25.5216 10.5198 26.3513 11.8944 26.6618 13.4234C26.7409 13.8111 26.9535 14.1587 27.2625 14.4059C27.5716 14.6531 27.9575 14.7841 28.3532 14.7761H28.4547C29.4362 14.7715 30.398 15.0517 31.2235 15.5826C32.0489 16.1134 32.7027 16.8723 33.1055 17.7671C33.5082 18.662 33.6428 19.6544 33.4928 20.6241C33.3427 21.5939 32.9146 22.4993 32.2602 23.2307C32.1113 23.3977 31.9969 23.5926 31.9239 23.8042C31.8508 24.0157 31.8205 24.2397 31.8346 24.463C31.8488 24.6864 31.9072 24.9047 32.0063 25.1053C32.1055 25.3059 32.2436 25.4849 32.4125 25.6318C32.7208 25.9036 33.1176 26.0539 33.5288 26.0545C33.7689 26.0542 34.0062 26.0028 34.225 25.9036C34.4437 25.8045 34.6388 25.66 34.7973 25.4796C35.8417 24.3339 36.551 22.9232 36.8476 21.4017C37.1442 19.8802 37.0166 18.3064 36.4789 16.8525C35.9412 15.3986 35.014 14.1204 33.7986 13.1578C32.5833 12.1952 31.1266 11.5851 29.5879 11.3943Z"
                    fill="#ECECEC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_122_61">
                    <rect width="37" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-100">CV/Resume</h3>

            <p className="text-md font-normal text-gray-100 mt-5">
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
                width="28"
                height="34"
                viewBox="0 0 28 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5312 9.57812V7.79688C20.5312 7.63359 20.3977 7.5 20.2344 7.5H5.98438C5.82109 7.5 5.6875 7.63359 5.6875 7.79688V9.57812C5.6875 9.74141 5.82109 9.875 5.98438 9.875H20.2344C20.3977 9.875 20.5312 9.74141 20.5312 9.57812ZM5.98438 12.8438C5.82109 12.8438 5.6875 12.9773 5.6875 13.1406V14.9219C5.6875 15.0852 5.82109 15.2188 5.98438 15.2188H12.8125C12.9758 15.2188 13.1094 15.0852 13.1094 14.9219V13.1406C13.1094 12.9773 12.9758 12.8438 12.8125 12.8438H5.98438ZM19.9375 17.1484C15.5104 17.1484 11.9219 20.7369 11.9219 25.1641C11.9219 29.5912 15.5104 33.1797 19.9375 33.1797C24.3646 33.1797 27.9531 29.5912 27.9531 25.1641C27.9531 20.7369 24.3646 17.1484 19.9375 17.1484ZM23.9268 29.1533C22.8617 30.2184 21.4441 30.8047 19.9375 30.8047C18.4309 30.8047 17.0133 30.2184 15.9482 29.1533C14.8832 28.0883 14.2969 26.6707 14.2969 25.1641C14.2969 23.6574 14.8832 22.2398 15.9482 21.1748C17.0133 20.1098 18.4309 19.5234 19.9375 19.5234C21.4441 19.5234 22.8617 20.1098 23.9268 21.1748C24.9918 22.2398 25.5781 23.6574 25.5781 25.1641C25.5781 26.6707 24.9918 28.0883 23.9268 29.1533ZM23.2402 22.3438H21.5963C21.4998 22.3438 21.4107 22.3883 21.3551 22.4662L18.9986 25.7244L18.1414 24.5406C18.1139 24.5024 18.0777 24.4713 18.0357 24.45C17.9938 24.4287 17.9473 24.4178 17.9002 24.4182H16.2637C16.0225 24.4182 15.8814 24.6928 16.0225 24.8895L18.7611 28.6783C18.8799 28.8416 19.1211 28.8416 19.2398 28.6783L23.4777 22.815C23.6225 22.6184 23.4814 22.3438 23.2402 22.3438ZM11.3281 29.6172H2.71875V3.49219H23.5V16.2578C23.5 16.4211 23.6336 16.5547 23.7969 16.5547H25.875C26.0383 16.5547 26.1719 16.4211 26.1719 16.2578V2.00781C26.1719 1.35098 25.6412 0.820312 24.9844 0.820312H1.23438C0.577539 0.820312 0.046875 1.35098 0.046875 2.00781V31.1016C0.046875 31.7584 0.577539 32.2891 1.23438 32.2891H11.3281C11.4914 32.2891 11.625 32.1555 11.625 31.9922V29.9141C11.625 29.7508 11.4914 29.6172 11.3281 29.6172Z"
                  fill="#ECECEC"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-gray-100">Apply Them</h3>

            <p className="text-md font-normal text-gray-100 mt-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate
              consectetur, primis venenatis cursus tristique malesuada viverra
              congue risus.
            </p>
          </div>
        </div>
      </section>
      {/* End 4 Steps to Get a Job section */}
      {/* Im a jobseeker form */}
      <section id="jobseeker" className="mt-12 h-screen">
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <div className="flex md:flex-row justify-between flex-col  items-center ">
            {/* <img src={logo} /> */}
            <a href="#startup" className="p-6 hover:shadow-md m-6">
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.6451 34.6453C37.0981 35.1921 36.3564 35.4993 35.583 35.4993C34.8096 35.4993 34.0679 35.1921 33.5209 34.6453L18.9376 20.062C18.3908 19.515 18.0836 18.7733 18.0836 17.9999C18.0836 17.2265 18.3908 16.4848 18.9376 15.9378L33.5209 1.35447C34.071 0.823177 34.8077 0.529194 35.5725 0.535839C36.3372 0.542484 37.0688 0.849228 37.6095 1.39C38.1503 1.93077 38.4571 2.66231 38.4637 3.42706C38.4703 4.1918 38.1764 4.92855 37.6451 5.47864L25.1238 17.9999L37.6451 30.5211C38.1919 31.0681 38.499 31.8098 38.499 32.5832C38.499 33.3566 38.1919 34.0984 37.6451 34.6453ZM20.1451 34.6453C19.5981 35.1921 18.8564 35.4993 18.083 35.4993C17.3096 35.4993 16.5679 35.1921 16.0209 34.6453L1.43756 20.062C0.89077 19.515 0.583603 18.7733 0.583603 17.9999C0.583603 17.2265 0.89077 16.4848 1.43756 15.9378L16.0209 1.35447C16.571 0.823177 17.3077 0.529194 18.0725 0.535839C18.8372 0.542484 19.5688 0.849228 20.1095 1.39C20.6503 1.93077 20.957 2.66231 20.9637 3.42706C20.9703 4.1918 20.6764 4.92855 20.1451 5.47864L7.62381 17.9999L20.1451 30.5211C20.6919 31.0681 20.999 31.8098 20.999 32.5832C20.999 33.3566 20.6919 34.0984 20.1451 34.6453Z"
                  fill="#0055B0"
                />
              </svg>
              <p className="font-normal text-gray-900 mt-3">I'm Hiring</p>
            </a>
            <div className="w-10/12 flex md:flex-row flex-col justify-around shadow-md gap-5 shadow-gray-500 m-3 p-12">
              <div className=" ">
                <h1 className="text-4xl font-semibold text-gray-900">
                  I'm a <span className="text-fontcol">Jobseeker</span>
                </h1>
                <h1 className="font-semibold text-3xl text-gray-900 mt-6">
                  Unlock Diverse Engineering <br></br>Opportunities
                </h1>
                <p className="font-normal text-gray-900 mt-3">
                  Expand your skillset. Collaborate with innovative <br></br>
                  startups. Elevate your engineering journey
                </p>
                <div className="w-full mt-3">
                  <input
                    type="text"
                    className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm rounded-sm  block w-full p-2.5  dark:bg-gray-700  "
                    placeholder="Enter your email"
                  />
                  <input
                    type="text"
                    className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm rounded-sm  block w-full p-2.5  dark:bg-gray-700  "
                    placeholder="Enter your Skill"
                  />
                </div>
                <button
                  type="submit"
                  className="text-gray-100 right-2.5 bottom-2 bg-fontcol rounded-md text-lg px-4 py-2 mt-3"
                >
                  Send Now
                </button>
              </div>
              <div className="">
                <img src="../img/jobseeker.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Im a jobseeker form */}
      <hr className="mt-12" />
      {/* Im Hiring form */}
      <section id="startup" className="mt-12">
        <div
          data-aos="zoom-out-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <div className="flex md:flex-row justify-between flex-col  items-center ">
            {/* <img src={logo} /> */}

            <div className="w-10/12 flex md:flex-row flex-col justify-around shadow-md gap-5 shadow-gray-500 m-3 p-12">
              <div className=" ">
                <h1 className="text-4xl font-semibold text-gray-900">
                  I'm a <span className="text-fontcol">Hiring</span>
                </h1>
                <h1 className="font-semibold text-3xl text-gray-900 mt-6">
                  Engineer Your Startup's Success.
                </h1>
                <p className="font-normal text-gray-900 mt-3">
                  Connect with passionate engineers seeking transformative
                  projects. No long-term strings, just results
                </p>
                <div className="w-full mt-3">
                  <input
                    type="text"
                    className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm rounded-sm  block w-full p-2.5  dark:bg-gray-700  "
                    placeholder="Enter your email"
                  />
                  <input
                    type="text"
                    className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm rounded-sm  block w-full p-2.5  dark:bg-gray-700  "
                    placeholder="Enter your Skill"
                  />
                </div>
                <button
                  type="submit"
                  className="text-gray-100 right-2.5 bottom-2 bg-fontcol rounded-md text-lg px-4 py-2 mt-3"
                >
                  Send Now
                </button>
              </div>
              <div className="">
                <img src="../img/hirring.png" />
              </div>
            </div>
            <a
              href="#jobseeker"
              className="p-6 hover:shadow-md m-6 flex flex-col justify-center"
            >
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.35494 1.35469C1.90189 0.807903 2.64362 0.500732 3.41702 0.500732C4.19042 0.500732 4.93215 0.807903 5.4791 1.35469L20.0624 15.938C20.6092 16.485 20.9164 17.2267 20.9164 18.0001C20.9164 18.7735 20.6092 19.5152 20.0624 20.0622L5.4791 34.6455C4.92901 35.1768 4.19226 35.4708 3.42752 35.4642C2.66278 35.4575 1.93124 35.1508 1.39047 34.61C0.849693 34.0692 0.542949 33.3377 0.536304 32.5729C0.529658 31.8082 0.823643 31.0714 1.35494 30.5214L13.8762 18.0001L1.35494 5.47886C0.808147 4.9319 0.500977 4.19017 0.500977 3.41678C0.500977 2.64338 0.808147 1.90165 1.35494 1.35469ZM18.8549 1.35469C19.4019 0.807903 20.1436 0.500732 20.917 0.500732C21.6904 0.500732 22.4321 0.807903 22.9791 1.35469L37.5624 15.938C38.1092 16.485 38.4164 17.2267 38.4164 18.0001C38.4164 18.7735 38.1092 19.5152 37.5624 20.0622L22.9791 34.6455C22.429 35.1768 21.6923 35.4708 20.9275 35.4642C20.1628 35.4575 19.4312 35.1508 18.8905 34.61C18.3497 34.0692 18.043 33.3377 18.0363 32.5729C18.0297 31.8082 18.3236 31.0714 18.8549 30.5214L31.3762 18.0001L18.8549 5.47886C18.3081 4.9319 18.001 4.19017 18.001 3.41678C18.001 2.64338 18.3081 1.90165 18.8549 1.35469Z"
                  fill="#0055B0"
                />
              </svg>

              <p className="font-normal text-gray-900 mt-3">I’m a Jobseeker</p>
            </a>
          </div>
        </div>
      </section>
      {/* End Im Hiring form */}
      {/* contact use Section */}
      <section
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        id="contactus"
        className="mt-12 mb-10 text-center p-12"
      >
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
                className="text-gray-100 right-2.5 bottom-2 bg-fontcol rounded-md text-lg px-4 py-2 mt-3"
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
                  d="M15.5 19.9582C14.1186 19.9582 12.7939 19.4094 11.8171 18.4327C10.8404 17.4559 10.2916 16.1312 10.2916 14.7498C10.2916 13.3685 10.8404 12.0437 11.8171 11.067C12.7939 10.0902 14.1186 9.5415 15.5 9.5415C16.8813 9.5415 18.2061 10.0902 19.1828 11.067C20.1596 12.0437 20.7083 13.3685 20.7083 14.7498C20.7083 15.4338 20.5736 16.1111 20.3118 16.743C20.0501 17.3749 19.6664 17.949 19.1828 18.4327C18.6992 18.9163 18.125 19.3 17.4931 19.5617C16.8612 19.8235 16.1839 19.9582 15.5 19.9582ZM15.5 0.166504C11.6322 0.166504 7.92289 1.70296 5.18799 4.43786C2.45308 7.17277 0.916626 10.8821 0.916626 14.7498C0.916626 25.6873 15.5 41.8332 15.5 41.8332C15.5 41.8332 30.0833 25.6873 30.0833 14.7498C30.0833 10.8821 28.5468 7.17277 25.8119 4.43786C23.077 1.70296 19.3677 0.166504 15.5 0.166504Z"
                  fill="#F1F1F1"
                />
              </svg>

              <h3 className="font-semibold text-gray-100 text-xl">Address</h3>
              <p className="font-normal text-gray-100">
                Kompong Spue, Cambodia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.29167 16.4792C11.2917 22.375 16.125 27.1875 22.0208 30.2083L26.6042 25.625C27.1667 25.0625 28 24.875 28.7292 25.125C31.0625 25.8958 33.5833 26.3125 36.1667 26.3125C37.3125 26.3125 38.25 27.25 38.25 28.3958V35.6667C38.25 36.8125 37.3125 37.75 36.1667 37.75C16.6042 37.75 0.75 21.8958 0.75 2.33333C0.75 1.1875 1.6875 0.25 2.83333 0.25H10.125C11.2708 0.25 12.2083 1.1875 12.2083 2.33333C12.2083 4.9375 12.625 7.4375 13.3958 9.77083C13.625 10.5 13.4583 11.3125 12.875 11.8958L8.29167 16.4792Z"
                  fill="#F1F1F1"
                />
              </svg>

              <h3 className="font-semibold text-gray-100 text-xl">Phone</h3>
              <p className="font-normal text-gray-100">+885 965 856</p>
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
                  fill="#F1F1F1"
                />
              </svg>

              <h3 className="font-semibold text-gray-100 text-xl">Email</h3>
              <p className="font-normal text-gray-100">
                engineernest@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End contact use Section */}
    </div>
  );
};

export default Home;
