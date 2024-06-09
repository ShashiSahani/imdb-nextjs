"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoImg from "../../../../public/logoimg.png";
import HeaderList from "../menu/HeaderList"; // Make sure to import with proper capitalization
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { PiListThin } from "react-icons/pi";
import Slider from "../slider/slider";

function Header() {
  const [slider, setSlider] = useState(false);
  const handleSlide = () => {
    setSlider(!slider);
  };
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      <div>
        {" "}
        <PiListThin onClick={handleSlide} className="text-4xl cursor-pointer" />
        {slider ? <Slider setSlider={setSlider} /> :null}
      </div>
      <div className="flex text-black flex-row space-x-4">
        <HeaderList title="Home" address="/" Icon={IoHomeOutline} />
        <HeaderList
          title="Store"
          address="/store"
          Icon={HiOutlineShoppingBag}
        />
        <HeaderList title="Movies" address="/movies" Icon={BiCameraMovie} />
        <HeaderList title="TV Show" address="/tvshows" Icon={MdOutlineLiveTv} />
      </div>
      <div className="flex">
        <Image src={LogoImg} alt="logo" className="h-100 w-100" />{" "}
        {/* Adjust height and width as necessary */}
      </div>
    </div>
  );
}

export default Header;
