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
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleCaseClick = () => {
    setCarouselType(SELECTION_TYPE.CASE);
    const switchedCase = DIAL_DATA.findIndex(
      (item) => item.alt === selectedCase.alt
    );
    console.log("switchedCase nik", switchedCase);
    setSelectedIndex(switchedCase);
  };

  return (
    <div className="w-screen bg-white">
      <Carousel
        items={getDataForCarousel()}
        handleSelectedItem={handleSelectedItem}
        carouselType={carouselType}
        selectedItem={selectedItem}
        selectedCase={selectedCase}
        selectedBand={selectedBand}
        selectedIndex={selectedIndex}
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
          onClick={handleCaseClick}
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
