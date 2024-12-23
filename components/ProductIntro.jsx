"use client";
import React, { useEffect, useState } from "react";
import { LargeHeading, Subheading } from "./common/Text";
import COLORS from "@/utils/colors";
import { PrimaryButton } from "./common/Buttons";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import WatchStudio from "./WatchStudio";
import { useWatchConfig } from "@/context/WatchContext";

const ProductIntro = () => {
  const { directlyShowSelection } = useWatchConfig();
  const [isStarted, setIsStarted] = useState(directlyShowSelection);
  const [isExpanded, setIsExpanded] = useState(directlyShowSelection);

  const handleGetStarted = () => {
    setIsStarted(true);
    setTimeout(() => {
      setIsExpanded(true);
    }, 1000);
  };

  useEffect(() => {
    setIsStarted(directlyShowSelection);
    setIsExpanded(directlyShowSelection);
  }, [directlyShowSelection]);

  return (
    <div className="flex mt-16 flex-col items-center relative h-full">
      {isExpanded && <WatchStudio />}

      {!isExpanded && (
        <div>
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
                  ? "fixed w-[312px] h-[312px] left-1/2 transform -translate-x-1/2 -translate-y-full"
                  : "mt-10"
              }
            `}
          >
            <Image
              src={CONSTANTS.APPLE_MAIN_STRAP}
              width={770}
              height={770}
              alt="apple watch strap"
              className="z-0"
            />
            <Image
              src={CONSTANTS.APPLE_MAIN_DIAL}
              width={770}
              height={770}
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
