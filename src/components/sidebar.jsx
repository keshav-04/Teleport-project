"use client";

import React from "react";
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

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      shadow={false}
      className=" max-w-[20rem] rounded-none border-r border-blue-gray-100"
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
          <ListItem>
            <ListItemPrefix>
              <GiCommercialAirplane className="h-5 w-5" />
            </ListItemPrefix>
            Flights
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <IoBed className="h-5 w-5" />
            </ListItemPrefix>
            Stays
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <IoCarSport className="h-5 w-5" />
            </ListItemPrefix>
            Car Rental
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaUmbrellaBeach className="h-5 w-5" />
            </ListItemPrefix>
            Flight+Hotel
          </ListItem>
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
            <img src="src/assets/indian-flag.png" alt="IN" className="h-5 w-5" />
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
