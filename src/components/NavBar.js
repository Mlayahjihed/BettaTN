import React from "react";
import logo from "../assets/images/Logo.svg";

export default function NavBar() {
  return (
    <header
      className="w-full fixed top-0 left-0 z-20 font-primary "
    >
      <div className="md:px-10 py-3 px-5 bg-white md:flex justify-between items-center gap-2">
        <div className="flex text-2xl gap-1 items-center cursor-pointer">
          <img width={198} height={25} src={logo} alt="Logo" />
        </div>
        <div className="flex text-2xl gap-1 items-center cursor-pointer">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Replace the SVG code with a React component for the icon */}
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.15426 15.5663C12.8774 15.5663 15.8957 12.5481 15.8957 8.82491C15.8957 5.10173 12.8774 2.0835 9.15426 2.0835C5.43108 2.0835 2.41284 5.10173 2.41284 8.82491C2.41284 12.5481 5.43108 15.5663 9.15426 15.5663Z"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.843 13.8638L16.486 16.4999"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-[359px] h-[48px] p-4 pl-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search ..."
              required
            />
          </div>
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in">
          <li className="font-semibold text-primary  my-7 md:my-0 md:ml-8">
            <button className="text-[#666666] focus:ring-4  font-medium  text-center inline-flex items-center  mr-2 mb-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0049 20.003V22.003H2.00488V20.003H14.0049ZM14.5899 0.688988L22.3679 8.46699L20.9539 9.88099L19.8929 9.52799L17.4179 12.003L23.0749 17.66L21.6609 19.074L16.0039 13.417L13.5999 15.82L13.8829 16.951L12.4679 18.366L4.68988 10.587L6.10388 9.17299L7.23588 9.45599L13.5289 3.16299L13.1759 2.10299L14.5899 0.688988ZM15.2969 4.22399L8.22588 11.296L11.7609 14.831L18.8319 7.75999L15.2969 4.22399Z"
                  fill="black"
                />
              </svg>
              <p className="ml-2 text-sm">Auction List</p>
            </button>
          </li>

          <li className="font-semibold text-primary  my-7 md:my-0 md:ml-8">
            <button className="text-[#666666] focus:ring-4  font-medium  text-center inline-flex items-center  mr-2 mb-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="4.75"
                  stroke="#008ECC"
                  stroke-width="1.5"
                />
                <path
                  d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="ml-2 text-sm"> Sign Up/Sign In</p>
            </button>
          </li>
          <li className="font-semibold text-primary  my-7 md:my-0 md:ml-8">
            <button className="text-[#666666] focus:ring-4  font-medium  text-center inline-flex items-center  mr-2 mb-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.42233 19.8203C7.84433 19.8203 8.18733 20.1633 8.18733 20.5853C8.18733 21.0073 7.84433 21.3493 7.42233 21.3493C7.00033 21.3493 6.65833 21.0073 6.65833 20.5853C6.65833 20.1633 7.00033 19.8203 7.42233 19.8203Z"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1254 10.7949H16.8984"
                  stroke="#008ECC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="ml-2 text-sm"> Carte</p>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
