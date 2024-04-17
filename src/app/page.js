"use client";
import { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import NewsletterCard from "@/components/newsletterCard";
import { LocationCard } from "@/components/locationCard";

import delhi from "/public/delhi.jpg";
import riyadh from "/public/riyadh.jpg";
import karachi from "/public/karachi.png";
import abudhabi from "/public/abu-dhabi.jpeg";
import doha from "/public/doha.jpg";
import sharjah from "/public/sharjah.jpg";
import { WishlistCard } from "@/components/wishlist";

const Locations = [
  {
    title: "Delhi",
    description: "from Rs. 5,016",
    imageSrc: delhi,
  },
  {
    title: "Riyadh",
    description: "from Rs. 31,520",
    imageSrc: riyadh,
  },
  {
    title: "Karachi",
    description: "from Rs. 13,043",
    imageSrc: karachi,
  },
  {
    title: "Abu Dhabi",
    description: "from Rs. 37,958",
    imageSrc: abudhabi,
  },
  {
    title: "Doha",
    description: "from Rs. 40,633",
    imageSrc: doha,
  },
  {
    title: "Sharjah",
    description: "from Rs. 31,687",
    imageSrc: sharjah,
  },
];

const max = (a, b) => {return a > b ? a : b};
const min = (a, b) => {return a < b ? a : b};

export default function Home() {
  const [locationLeft, setLocationLeft] = useState(0);
  const [locationRight, setLocationRight] = useState(3);

  const [wishlistLeft, setWishlistLeft] = useState(0);
  const [wishlistRight, setWishlistRight] = useState(1);
  
  return (
    <div className="flex flex-col w-full mx-auto p-12 gap-10">
      <NewsletterCard />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <Typography variant="h4" className="flex">
              Hop on, hop off
            </Typography>
            <Typography color="gray">
              Skip the layovers and fly nonstop to these destinations
            </Typography>
          </div>
          <Button
            variant="outlined"
            className="rounded flex normal-case text-center max-h-11 text-sm hover:bg-blue-gray-50"
          >
            See more
          </Button>
        </div>
        <div className="relative overflow-visible ">
          {locationLeft !== 0 && (
            <button 
              className="absolute z-10 top-1/2 -left-6 bg-white hover:bg-gray-200 shadow-lg w-12 h-10 rounded"            
              onClick = {() => {setLocationLeft(max(0, locationLeft-1)); setLocationRight(max(3, locationRight-1))}}
            >
              <IoIosArrowBack className="h-5 w-12" /> 
            </button>
          )}
          {locationRight !== Locations.length-1 && (
            <button 
              variant="text" 
              className="absolute z-10 top-1/2 -right-6 bg-white hover:bg-gray-200 shadow-lg w-12 h-10 rounded"
              onClick = {() => {setLocationLeft(min(2, locationLeft+1)); setLocationRight(min(Locations.length-1, locationRight+1))}}
            >
              <IoIosArrowForward className="h-5 w-12" /> 
            </button>
          )}
          <div className="relative grid grid-cols-4 gap-4">
            {Locations.map((location, index) => (
              index >= locationLeft && index <= locationRight && (
                <LocationCard
                  title={location.title}
                  description={location.description}
                  imageSrc={location.imageSrc}
                />
              )
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Typography variant="h4" className="flex">
            Your Wishlist starts here
          </Typography>
          <Typography color="gray">
            Save destinations all in one place—even if you're not ready to book
          </Typography>
        </div>
        <div className="relative overflow-visible ">
          {wishlistLeft !== 0 && (
            <button 
              className="absolute z-10 top-1/2 -left-6 bg-white hover:bg-gray-200 shadow-lg w-12 h-10 rounded"  
              onClick = {() => {setWishlistLeft(max(0, wishlistLeft-1)); setWishlistRight(max(1, wishlistRight-1))}}          
            >
              <IoIosArrowBack className="h-5 w-12" /> 
            </button>
          )}
          {wishlistRight !== Locations.length-1 && (
            <button 
              variant="text" 
              className="absolute z-10 top-1/2 -right-6 bg-white hover:bg-gray-200 shadow-lg w-12 h-10 rounded"
              onClick = {() => {setWishlistLeft(min(4, wishlistLeft+1)); setWishlistRight(min(Locations.length-1, wishlistRight+1))}}
            >
              <IoIosArrowForward className="h-5 w-12" /> 
            </button>
          )}
          <div className="grid grid-cols-2 gap-4">
            {Locations.map((location, index) => (
              index >= wishlistLeft && index <= wishlistRight && (
                <WishlistCard
                  title={location.title}
                  imageSrc={location.imageSrc}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
