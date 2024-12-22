"use client";
import React, { useState } from "react";

import Carousel from "./common/Carousel";
import DIAL_DATA from "@/data/dialData";
import STRAP_DATA from "@/data/strapData";
import { SELECTION_TYPE } from "@/utils/constants";
import COLORS from "@/utils/colors";
import { NavigationItem } from "./common/Text";

export default function CarouselStudio() {
  // States for selected data
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  // States for keeping track of which index is centered in each carousel
  const [caseIndex, setCaseIndex] = useState(0);
  const [bandIndex, setBandIndex] = useState(0);

  // State controlling which carousel is visible
  const [carouselType, setCarouselType] = useState(SELECTION_TYPE.CASE);

  // Called whenever the CASE carousel’s center slide changes
  const handleCaseCenterChange = (newIndex) => {
    setCaseIndex(newIndex);
    setSelectedCase(DIAL_DATA[newIndex]);
  };

  // Called whenever the BAND carousel’s center slide changes
  const handleBandCenterChange = (newIndex) => {
    setBandIndex(newIndex);
    setSelectedBand(STRAP_DATA[newIndex]);
  };

  // Switch to CASE mode
  const showCaseCarousel = () => {
    setCarouselType(SELECTION_TYPE.CASE);
  };

  // Switch to BAND mode
  const showBandCarousel = () => {
    setCarouselType(SELECTION_TYPE.BAND);
  };

  return (
    <div className="w-screen bg-white">
      {/* CASE CAROUSEL */}
      {carouselType === SELECTION_TYPE.CASE && (
        <Carousel
          items={DIAL_DATA}
          initialIndex={caseIndex}
          onCenterChange={handleCaseCenterChange}
          carouselType={SELECTION_TYPE.CASE}
        />
      )}

      {/* BAND CAROUSEL */}
      {carouselType === SELECTION_TYPE.BAND && (
        <Carousel
          items={STRAP_DATA}
          initialIndex={bandIndex}
          onCenterChange={handleBandCenterChange}
          carouselType={SELECTION_TYPE.BAND}
        />
      )}

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
          onClick={showCaseCarousel}
        >
          <NavigationItem>Case</NavigationItem>
        </div>
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={showBandCarousel}
        >
          <NavigationItem>Band</NavigationItem>
        </div>
      </div>

      {/* Example debug info */}
      <div className="text-center">
        <p>Selected Case: {selectedCase?.alt}</p>
        <p>Selected Band: {selectedBand?.alt}</p>
      </div>
    </div>
  );
}
