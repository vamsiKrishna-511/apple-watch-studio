"use client";
import React from "react";
import Image from "next/image";
import Carousel from "./common/Carousel";
import DIAL_DATA from "@/data/dialData";
import STRAP_DATA from "@/data/strapData";
import { CAROUSEL_TYPE } from "@/utils/constants";

export default function DialCarousel({
  selectedCategoryCarousel = CAROUSEL_TYPE.DIAL,
  selectedItem,
}) {
  const DATA =
    selectedCategoryCarousel === CAROUSEL_TYPE.DIAL ? DIAL_DATA : STRAP_DATA;
  return (
    <div className="flex flex-col items-center relative">
      <Carousel
        items={DATA}
        itemWidth={280}
        renderItem={(item) => (
          <div className="relative w-[52vw] flex items-center justify-center max-w-[385px] max-h-[385px] aspect-square">
            <Image src={item.src} alt={item.alt} fill />
          </div>
        )}
      />
      <div className=""></div>
    </div>
  );
}
