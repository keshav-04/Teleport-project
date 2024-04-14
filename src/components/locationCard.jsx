"use client";

import {
  Typography,
	Chip,
} from "@material-tailwind/react";
import Image from "next/image";

import { AiOutlineHeart } from "react-icons/ai";

import delhi from "/public/delhi.jpg";

export function LocationCard({
	title="Delhi",
	description="from Rs. 5,016",
	imageSrc=delhi,
}
) {
  return (
    <div
			className="flex flex-col w-full max-w-[19rem] m-2"
		>
      <div className="relative rounded-xl w-full h-[23rem] object-contain overflow-hidden">
				<Chip 
					className="bg-white absolute top-3 right-3 text-black normal-case rounded h-7 w-10" 
					icon={<AiOutlineHeart  className="h-5 w-7"/>} 
				/>
        <Image
          src={imageSrc}
          alt="Pic"
					className="object-cover w-full h-full"
        />
				<Chip className="bg-white absolute bottom-3 left-3 text-black normal-case rounded py-1 px-2" value="Direct"  />
      </div>
      <div className="flex my-2">
        <div className="flex flex-col">
          <Typography variant="h5" color="blue-gray" className="font-semibold">
            {title}
          </Typography>
          
					<Typography color="gray" className="font-thin">
						{description}
					</Typography>
        </div>
      </div>
    </div>
  );
}
