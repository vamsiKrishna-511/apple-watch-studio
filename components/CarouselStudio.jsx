"use client";
import React, { useState } from "react";
import Carousel from "./common/Carousel";
import DIAL_DATA from "@/data/dialData"; // Make sure this data array has several items
import { CAROUSEL_TYPE, SELECTION_TYPE } from "@/utils/constants";
import STRAP_DATA from "@/data/strapData";
import COLORS from "@/utils/colors";
import { NavigationItem } from "./common/Text";

export default function CarouselStudio() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [carouselType, setCarouselType] = useState(SELECTION_TYPE.CASE);

  const handleSelectedItem = (index) => {
    if (carouselType === SELECTION_TYPE.CASE) {
      setSelectedCase(DIAL_DATA[index]);
      setSelectedItem(DIAL_DATA[index]);
    } else if (carouselType === SELECTION_TYPE.BAND) {
      setSelectedBand(STRAP_DATA[index]);
      setSelectedItem(DIAL_DATA[index]);
    }
  };

  const getDataForCarousel = () => {
    if (carouselType === SELECTION_TYPE.CASE) {
      return DIAL_DATA;
    } else if (carouselType === SELECTION_TYPE.BAND) {
      return STRAP_DATA;
    }
  };

  return (
    <div className="w-screen bg-white">
      <Carousel
        items={getDataForCarousel()}
        carouselType={carouselType}
        handleSelectedItem={handleSelectedItem}
        selectedCase={selectedCase}
        selectedItem={selectedItem}
        selectedBand={selectedBand}
      />

      {/* Additional UI below carousel */}
      <div className="flex justify-center items-center gap-5">
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          // onClick={handleDialClick}
        >
          <NavigationItem>Size</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={() => {
            setCarouselType(SELECTION_TYPE.CASE);
          }}
        >
          <NavigationItem>Case</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={() => {
            setCarouselType(SELECTION_TYPE.BAND);
          }}
        >
          <NavigationItem>Band</NavigationItem>
        </div>
      </div>
    </div>
  );
}
