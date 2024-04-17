"use client";

import { Typography, Chip } from "@material-tailwind/react";
import Image from "next/image";

import { AiOutlineHeart } from "react-icons/ai";

import doha from "/public/doha.jpg";

export function WishlistCard({ title = "Doha, Qatar", imageSrc = doha }) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative rounded-xl w-full h-[23rem] object-contain overflow-hidden">
        <Chip
          className="bg-white absolute top-3 right-3 text-black normal-case rounded h-7 w-12"
          icon={<AiOutlineHeart className="h-5 w-9" />}
        />
        <Image
          src={imageSrc}
          alt="Pic"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex my-2">
        <Typography variant="h6" color="blue-gray" className="font-semibold">
          {title}
        </Typography>
      </div>
    </div>
  );
}
