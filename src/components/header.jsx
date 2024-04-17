"use client";

import React from "react";
import { Navbar, Button } from "@material-tailwind/react";

import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

export function Header() {

  return (
    <div className="sticky top-0 z-10 max-h-[768px] w-full">
      <Navbar
        shadow={false}
        blurred={false}
        className="border-b border-blue-gray-100 h-20 max-w-full rounded-none px-3 py-4 lg:px-3 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-x-4">

              <FaBars 
                cursor={"pointer"}
                className="h-7 w-7 hover:bg-blue-gray-100 p-1 rounded"
                onClick={()=>{}}
              />
            <div>
              <span
                className="h-10 w-32 hidden lg:block"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 125 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="h-10 w-32"
                >
                  <path
                    d="M0 24h23.936V0H0v24zm25.266 0h23.936V0H25.266v24zm49.202 0H50.532V0h23.936v24zm1.33 0h23.936V0H75.798v24zM125 24h-23.936V0H125v24z"
                    fill="#FF690F"
                  ></path>
                  <path
                    d="M10.287 11.549V6H7.38v12h2.907v-5.548L13.348 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549zm24.785 4.724L34.552 18h-3.104l3.947-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zM63.98 18h-2.906v-5.29L57.144 6h3.463l1.938 3.688L64.447 6h3.409l-3.876 6.71V18zm21.624-1.727L85.084 18h-3.105l3.948-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zm23.63 2.113V6h-2.907v12h2.907v-5.548L114.412 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549z"
                    fill="#FAFAFC"
                  ></path>{" "}
                </svg>
              </span>
              <span
                className="h-6 w-6 lg:hidden"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="h-6 w-6"
                >
                  <path
                    d="M0 24h23.936V0H0v24z"
                    fill="#FF690F"
                  ></path>
                  <path
                    d="M10.287 11.549V6H7.38v12h2.907v-5.548L13.348 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549z"
                    fill="#FAFAFC"
                  ></path>{" "}
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              variant="outlined"
              className="rounded flex normal-case px-4 py-3.5 hover:bg-blue-gray-50"
            >
              <div className="flex text-center">
                <FaRegCircleUser className="mr-2 h-4 w-4" />
                Sign in
              </div>
            </Button>
          </div>
        </div>
      </Navbar>
      
    </div>
  );
}
