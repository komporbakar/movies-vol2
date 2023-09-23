import { useEffect, useState } from "react";
import NavLinks from "../atoms/NavLinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    const handelScroll = () => {
      const isScroll = window.scrollY > 0;
      setScroll(isScroll);
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        scroll ? "bg-black" : "bg-black"
      } text-white lg:px-24  fixed w-full z-20`}
    >
      <div className="flex flex-nowrap justify-between lg:items-center">
        <div className="me-auto flex flex-nowrap items-center ps-4 lg:ps-0 py-3">
          <h1 className="text-3xl font-medium me-5">NETLIX</h1>
          <ul
            className={`lg:space-x-5 hidden lg:flex lg:flex-nowrap lg:text-sm  style-navbar`}
          >
            <NavLinks link="/" title="Home" />
            <NavLinks link="/movies" title="Movies" />
            <NavLinks link="/tv-show" title="TV Show" />
            <NavLinks link="/populer" title="Populer" />
          </ul>
        </div>
        <button className={`lg:hidden me-4`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul
          className={`lg:space-x-5 hidden lg:flex lg:flex-nowrap lg:text-md  style-navbar`}
        >
          <button className={`lg:hidden -ms-10 cursor-pointer `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2.21975 2.22C2.28932 2.15033 2.37194 2.09507 2.46288 2.05736C2.55382 2.01965 2.6513 2.00024 2.74975 2.00024C2.8482 2.00024 2.94569 2.01965 3.03663 2.05736C3.12757 2.09507 3.21019 2.15033 3.27975 2.22L5.99975 4.939L8.71975 2.22C8.78936 2.1504 8.87198 2.09519 8.96292 2.05752C9.05386 2.01985 9.15132 2.00047 9.24975 2.00047C9.34818 2.00047 9.44565 2.01985 9.53659 2.05752C9.62753 2.09519 9.71015 2.1504 9.77975 2.22C9.84935 2.2896 9.90457 2.37223 9.94223 2.46316C9.9799 2.5541 9.99929 2.65157 9.99929 2.75C9.99929 2.84843 9.9799 2.9459 9.94223 3.03683C9.90457 3.12777 9.84935 3.2104 9.77975 3.28L7.06075 6L9.77975 8.72C9.92032 8.86056 9.99929 9.05121 9.99929 9.25C9.99929 9.44879 9.92032 9.63943 9.77975 9.78C9.63919 9.92056 9.44854 9.99953 9.24975 9.99953C9.05097 9.99953 8.86032 9.92056 8.71975 9.78L5.99975 7.061L3.27975 9.78C3.13919 9.92056 2.94854 9.99953 2.74975 9.99953C2.55097 9.99953 2.36032 9.92056 2.21975 9.78C2.07919 9.63943 2.00022 9.44879 2.00022 9.25C2.00022 9.05121 2.07919 8.86056 2.21975 8.72L4.93875 6L2.21975 3.28C2.15009 3.21043 2.09482 3.12782 2.05712 3.03687C2.01941 2.94593 2 2.84845 2 2.75C2 2.65155 2.01941 2.55406 2.05712 2.46312C2.09482 2.37218 2.15009 2.28956 2.21975 2.22Z"
                fill="white"
              />
            </svg>
          </button>
          <NavLink to="/">
            <li className="flex flex-nowrap items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="#FFFFFF"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
              Search
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
