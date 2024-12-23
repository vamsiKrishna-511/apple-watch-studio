"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "./common/Carousel";

import { motion, AnimatePresence } from "framer-motion";

import DIAL_DATA from "@/data/dialData";
import STRAP_DATA from "@/data/strapData";
import SIZE_DATA from "@/data/sizeData";
import { CONSTANTS, SELECTION_TYPE } from "@/utils/constants";
import COLORS from "@/utils/colors";

import {
  Caption,
  NavigationItem,
  ProductDescription,
  SaveButtonText,
} from "./common/Text";
import { useWatchConfig } from "@/context/WatchContext";

useWatchConfig;
export default function CarouselStudio() {
  // Grab state + setState from context
  const {
    caseIndex,
    setCaseIndex,
    bandIndex,
    setBandIndex,
    sizeIndex,
    setSizeIndex,
    selectedCase,
    setSelectedCase,
    selectedBand,
    setSelectedBand,
    selectedSize,
    setSelectedSize,
    directlyShowSelection,
    setDirectlyShowSelection,
  } = useWatchConfig();

  const [showCarousel, setShowCarousel] = useState(directlyShowSelection);
  const [carouselType, setCarouselType] = useState(SELECTION_TYPE.CASE);

  useEffect(() => {
    setDirectlyShowSelection(true);
  }, []);

  // Handlers for changing the centered slide in each carousel
  const handleCaseCenterChange = (newIndex) => {
    setCaseIndex(newIndex);
    setSelectedCase(DIAL_DATA[newIndex]);
  };

  const handleBandCenterChange = (newIndex) => {
    setBandIndex(newIndex);
    setSelectedBand(STRAP_DATA[newIndex]);
  };

  const handleSizeCenterChange = (newIndex) => {
    setSizeIndex(newIndex);
    setSelectedSize(SIZE_DATA[newIndex]);
  };

  // Show different carousels
  const showCaseCarousel = () => {
    setCarouselType(SELECTION_TYPE.CASE);
    setShowCarousel(true);
  };
  const showBandCarousel = () => {
    setCarouselType(SELECTION_TYPE.BAND);
    setShowCarousel(true);
  };
  const showSizeCarousel = () => {
    setCarouselType(SELECTION_TYPE.SIZE);
    setShowCarousel(true);
  };

  // Render the appropriate carousel
  const renderCarousel = () => {
    if (carouselType === SELECTION_TYPE.CASE) {
      return (
        <Carousel
          items={DIAL_DATA}
          initialIndex={caseIndex}
          onCenterChange={handleCaseCenterChange}
          carouselType={SELECTION_TYPE.CASE}
          selectedCase={selectedCase}
          selectedBand={selectedBand}
        />
      );
    } else if (carouselType === SELECTION_TYPE.BAND) {
      return (
        <Carousel
          items={STRAP_DATA}
          initialIndex={bandIndex}
          onCenterChange={handleBandCenterChange}
          carouselType={SELECTION_TYPE.BAND}
          selectedCase={selectedCase}
          selectedBand={selectedBand}
        />
      );
    } else if (carouselType === SELECTION_TYPE.SIZE) {
      return (
        <Carousel
          items={SIZE_DATA}
          initialIndex={sizeIndex}
          onCenterChange={handleSizeCenterChange}
          carouselType={SELECTION_TYPE.SIZE}
          selectedBand={selectedBand}
        />
      );
    }
    return null;
  };

  // Simple framer fade in/out
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const currentViewKey = showCarousel ? carouselType : "static";

  return (
    <div className="w-screen bg-white">
      <AnimatePresence mode="wait">
        {showCarousel ? (
          <motion.div
            key={currentViewKey}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderCarousel()}
          </motion.div>
        ) : (
          <motion.div
            key="static"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="w-full h-[312px] flex justify-center relative">
              <Image
                src={CONSTANTS.APPLE_MAIN_STRAP}
                width={312}
                height={312}
                alt="apple watch strap"
                className="z-0"
              />
              <Image
                src={CONSTANTS.APPLE_MAIN_DIAL}
                width={312}
                height={312}
                className="absolute top-0 z-0"
                alt="apple watch dial"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-8">
        <Caption bold color="rgb(110, 110, 115)">
          APPLE WATCH SERIES 10
        </Caption>
        <SaveButtonText bold className="mt-2">
          {selectedSize?.alt} {selectedCase?.alt}
          {selectedBand?.alt && ` with ${selectedBand?.alt}`}
        </SaveButtonText>
        <ProductDescription className="mt-2">
          ${selectedSize?.price + selectedCase?.price + selectedBand?.price}
        </ProductDescription>
      </div>

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
