"use client";

import {
  Card,
  Typography,

} from "@material-tailwind/react";

import NewsletterCard from "@/components/newsletterCard";
import { LocationCard } from "@/components/locationCard";

const Locations = [
  {
    title: "Delhi",
    description: "from Rs. 5,016",
    imageSrc: "/delhi.jpg",
  },
  {
    title: "Mumbai",
    description: "from Rs. 5,016",
    imageSrc: "/mumbai.jpg",
  },
  {
    title: "Bangalore",
    description: "from Rs. 5,016",
    imageSrc: "/bangalore.jpg",
  },
  {
    title: "Kolkata",
    description: "from Rs. 5,016",
    imageSrc: "/kolkata.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto p-12">
      <NewsletterCard />
      <LocationCard />

      <div className="flex flex-wrap gap-4">
        {Locations.map((location, index) => (
          <LocationCard  />
        ))}
      </div>
    </div>
  );
}
