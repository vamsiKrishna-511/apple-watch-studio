"use client";
import React, { useState } from "react";

import Carousel from "./common/Carousel";
import DIAL_DATA from "@/data/dialData";
import STRAP_DATA from "@/data/strapData";
import { SELECTION_TYPE } from "@/utils/constants";
import COLORS from "@/utils/colors";
import { Caption, NavigationItem, SaveButton } from "./common/Text";
import SIZE_DATA from "@/data/sizeData";

export default function CarouselStudio() {
  // States for selected data
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // States for keeping track of which index is centered in each carousel
  const [caseIndex, setCaseIndex] = useState(0);
  const [bandIndex, setBandIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(1);

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

  const handleSizeCenterChange = (newIndex) => {
    setSizeIndex(newIndex);
    setSelectedSize(SIZE_DATA[newIndex]);
  };

  // Switch to CASE mode
  const showCaseCarousel = () => {
    setCarouselType(SELECTION_TYPE.CASE);
  };

  // Switch to BAND mode
  const showBandCarousel = () => {
    setCarouselType(SELECTION_TYPE.BAND);
  };

  const showSizeCarousel = () => {
    setCarouselType(SELECTION_TYPE.SIZE);
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
          selectedCase={selectedCase}
          selectedBand={selectedBand}
        />
      )}

      {/* BAND CAROUSEL */}
      {carouselType === SELECTION_TYPE.BAND && (
        <Carousel
          items={STRAP_DATA}
          initialIndex={bandIndex}
          onCenterChange={handleBandCenterChange}
          carouselType={SELECTION_TYPE.BAND}
          selectedCase={selectedCase}
          selectedBand={selectedBand}
        />
      )}

      {/* BAND CAROUSEL */}
      {carouselType === SELECTION_TYPE.SIZE && (
        <Carousel
          items={SIZE_DATA}
          initialIndex={sizeIndex}
          onCenterChange={handleSizeCenterChange}
          carouselType={SELECTION_TYPE.SIZE}
          selectedBand={selectedBand}
        />
      )}

      <div className="text-center mt-8">
        <Caption bold color="rgb(110, 110, 115)">
          APPLE WATCH SERIES 10
        </Caption>
        <SaveButton bold className="mt-2">
          46mm {selectedCase?.alt}{" "}
          {selectedBand?.alt && `with ${selectedBand?.alt}`}
        </SaveButton>
      </div>

      {/* Additional UI below carousel */}
      <div className="flex justify-center items-center gap-5 my-28">
        <div
          className="cursor-pointer px-5 py-2 rounded-full"
          style={{ backgroundColor: COLORS.SOFT_GRAY }}
          onClick={showSizeCarousel}
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
    </div>
  );
}
