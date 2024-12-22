"use client";
import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import { NavigationItem } from "./common/Text";
import COLORS from "@/utils/colors";
import CarouselStudio from "./CarouselStudio";

const WatchStudio = () => {
  return (
    <div className="">
      <CarouselStudio />
    </div>
  );
};

export default WatchStudio;
