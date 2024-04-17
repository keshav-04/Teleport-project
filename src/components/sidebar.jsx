"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import { FaKickstarter } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import { BiSolidCommentEdit } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { IoMdBriefcase } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";

import flag from "/public/flag.png";

const options1 = [
  {
    title: "Flights",
    icon: <GiCommercialAirplane className="h-5 w-5" />,
  },
  {
    title: "Stays",
    icon: <IoBed className="h-5 w-5" />,
  },
  {
    title: "Car Rental",
    icon: <IoCarSport className="h-5 w-5" />,
  },
  {
    title: "Flight+Hotel",
    icon: <FaUmbrellaBeach className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      shadow={false}
      className="sticky left-0 top-0 max-w-[20rem] rounded-none border-r border-blue-gray-100"
    >
      <List>
        <ListItem>
          <ListItemPrefix>
            <FaRegCircleUser className="h-5 w-5" />
          </ListItemPrefix>
          Sign in
        </ListItem>
        <hr className=" border-blue-gray-100" />
        <div>
          {options1.map((option, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemPrefix>{option.icon}</ListItemPrefix>
                {option.title}
              </ListItem>
            </React.Fragment>
          ))}
        </div>
        <hr className=" border-blue-gray-100" />
        <div>
          <ListItem>
            <ListItemPrefix>
              <PiGlobe className="h-5 w-5" />
            </ListItemPrefix>
            Explore
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaKickstarter className="h-5 w-5" />
            </ListItemPrefix>
            Direct
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <HiClock className="h-5 w-5" />
            </ListItemPrefix>
            Best Time to Travel
          </ListItem>
        </div>
        <hr className=" border-blue-gray-100" />
        <ListItem>
          <ListItemPrefix>
            <BiSolidCommentEdit className="h-5 w-5" />
          </ListItemPrefix>
          Feedback
        </ListItem>
        <hr className=" border-blue-gray-100" />
        <ListItem>
          <ListItemPrefix>
            <AiFillHeart className="h-5 w-5" />
          </ListItemPrefix>
          Trips
        </ListItem>
        <hr className=" border-blue-gray-100" />
        <ListItem>
          <ListItemPrefix>
            <IoMdBriefcase className="h-5 w-5" />
          </ListItemPrefix>
          KAYAK for Busine...
          <ListItemSuffix className="ml-2">
            <Chip value="New" size="sm" className="rounded" />
          </ListItemSuffix>
        </ListItem>
        <hr className=" border-blue-gray-100" />
        <ListItem>
          <ListItemPrefix>
            <Image src={flag} alt="IN" className="h-5 w-5" />
          </ListItemPrefix>
          English
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FaIndianRupeeSign className="h-5 w-5" />
          </ListItemPrefix>
          Indian rupee
        </ListItem>
      </List>
    </Card>
  );
}
