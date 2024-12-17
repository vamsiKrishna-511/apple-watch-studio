"use client";
import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import { NavigationItem } from "./common/Text";
import COLORS from "@/utils/colors";
import DialCarousel from "./DialCarousel";

const WatchStudio = () => {
  const [showStudio, setShowStudio] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDialClick = () => {
    setShowStudio((prev) => !prev);
  };
  return (
    <div className="">
      <div className={`relative z-0 -top-7 `}>
        {showStudio ? (
          <DialCarousel />
        ) : (
          <div className="">
            <Image
              src={CONSTANTS.APPLE_MAIN_STRAP}
              width={485}
              height={485}
              alt="apple watch strap"
              className="z-0"
            />
            <Image
              src={CONSTANTS.APPLE_MAIN_DIAL}
              width={485}
              height={485}
              className="absolute top-0 z-0"
              alt="apple watch dial"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-5">
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={handleDialClick}
        >
          <NavigationItem>Size</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={handleDialClick}
        >
          <NavigationItem>Case</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={handleDialClick}
        >
          <NavigationItem>Band</NavigationItem>
        </div>
      </div>
    </div>
  );
};

export default WatchStudio;
