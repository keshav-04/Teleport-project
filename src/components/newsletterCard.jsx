"use client"

import Image from "next/image";
import globe from "../public/globe.png";
import { IoIosMail } from "react-icons/io";
import { Button } from "@material-tailwind/react";

const NewsletterCard = () => {
  return (
		<div className="flex w-full py-4 border border-blue-gray-100 rounded-lg">
			<Image 
				className="mx-16"
				width={120}
				height={100}
				src={globe}
				alt="GL"
			/>
			<div className="content-center">
				<h1 className="text-xl font-bold">Receive our newsletter.</h1>
				<p className="">Sign up for email updates with travel recommendations and Private Deals.</p>
				<div className="flex gap-x-2 py-1">
					<div className="flex border border-blue-gray-200 rounded">
						<IoIosMail className="flex m-2 text-xl text-blue-gray-600" />
						<input type="email" placeholder="Enter your email" className="m-1 outline-none" />
					</div>
					<Button 
						className="rounded normal-case text-sm"
						variant="outlined"
						ripple={false}
						size="sm"
					>
						Let's do this
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NewsletterCard;
