"use client";
import React, { useState } from "react";
import { LargeHeading, Subheading } from "./common/Text";
import COLORS from "@/utils/colors";
import { PrimaryButton } from "./common/Buttons";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import CarouselStudio from "./CarouselStudio";
import WatchStudio from "./WatchStudio";

const ProductIntro = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  console.log("here nik");

  const handleGetStarted = () => {
    console.log("here nik");
    setIsStarted(true);
    setTimeout(() => {
      setIsExpanded(true);
    }, [2000]);
  };

  return (
    <div className="flex mt-16 flex-col items-center relative h-full">
      {/* <WatchStudio /> */}
      {isExpanded && <WatchStudio />}
      {!isExpanded && (
        <div className="">
          <div
            className={`w-[720px] transition-opacity duration-500 ${
              isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Subheading
              color={COLORS.ALMOST_BLACK}
              letterSpacing="0.23px"
              className="pb-2.5"
            >
              Apple Watch Studio
            </Subheading>
            <LargeHeading bold letterSpacing="-.009em">
              Choose a case.
            </LargeHeading>
            <LargeHeading bold letterSpacing="-.009em">
              Pick a band.
            </LargeHeading>
            <LargeHeading bold letterSpacing="-.009em">
              Create your own style.
            </LargeHeading>
            <div className="mt-[40px] z-10">
              <PrimaryButton onClick={handleGetStarted}>
                Get started
              </PrimaryButton>
            </div>
          </div>
          <div
            className={`
          relative z-0 transition-all duration-1000 
          ${
            isStarted
              ? "fixed top-0 transform -translate-y-[600px] scale-50"
              : "mt-10"
          }
        `}
            style={{ transitionProperty: "transform, top, left, opacity" }}
          >
            <Image
              src={CONSTANTS.APPLE_MAIN_STRAP}
              width={970}
              height={970}
              alt="apple watch strap"
              className="z-0"
            />
            <Image
              src={CONSTANTS.APPLE_MAIN_DIAL}
              width={970}
              height={970}
              className="absolute top-0 z-0"
              alt="apple watch dial"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductIntro;
