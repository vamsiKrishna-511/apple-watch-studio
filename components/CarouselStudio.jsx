"use client";
import React, { useState } from "react";
import Carousel from "./common/Carousel";
import DIAL_DATA from "@/data/dialData";
import STRAP_DATA from "@/data/strapData";
import { CAROUSEL_TYPE, SELECTION_TYPE } from "@/utils/constants";
import COLORS from "@/utils/colors";
import { NavigationItem } from "./common/Text";

export default function CarouselStudio() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [carouselType, setCarouselType] = useState(SELECTION_TYPE.CASE);

  // React Slick will call handleSelectedItem(index) whenever the active slide changes
  const handleSelectedItem = (index) => {
    if (carouselType === SELECTION_TYPE.CASE) {
      setSelectedCase(DIAL_DATA[index]);
      setSelectedItem(DIAL_DATA[index]);
    } else if (carouselType === SELECTION_TYPE.BAND) {
      // If you want the same indexing for STRAP_DATA, or different logic, adjust accordingly
      setSelectedBand(STRAP_DATA[index]);
      setSelectedItem(STRAP_DATA[index]);
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
        handleSelectedItem={handleSelectedItem}
        carouselType={carouselType}
        selectedItem={selectedItem}
      />

      {/* Additional UI below carousel */}
      <div className="flex justify-center items-center gap-5 my-6">
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
        >
          <NavigationItem>Size</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={() => setCarouselType(SELECTION_TYPE.CASE)}
        >
          <NavigationItem>Case</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={() => setCarouselType(SELECTION_TYPE.BAND)}
        >
          <NavigationItem>Band</NavigationItem>
        </div>
      </div>

      {/* Example debug info: */}
      <div className="text-center">
        <p>Selected Case: {selectedCase?.alt}</p>
        <p>Selected Band: {selectedBand?.alt}</p>
        <p>Selected Item: {selectedItem?.alt}</p>
      </div>
    </div>
  );
}
