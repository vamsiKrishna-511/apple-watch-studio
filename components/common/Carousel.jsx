"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SELECTION_TYPE } from "@/utils/constants";

export default function Carousel({
  items,
  carouselType,
  handleSelectedItem,
  selectedCase,
  selectedItem,
  selectedBand,
}) {
  const [centerIndex, setCenterIndex] = useState(0);
  console.log("centerIndex", centerIndex, selectedCase, selectedBand);
  return (
    <div className="relative w-screen overflow-hidden flex items-center justify-center">
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={0}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        className="w-full flex items-center justify-center"
        onSlideChange={(swiper) => {
          handleSelectedItem(swiper.activeIndex);
          setCenterIndex(swiper.activeIndex);
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center w-full h-full max-w-[384px]  my-auto"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={250}
              height={384}
              style={{ objectFit: "contain" }}
              className={
                carouselType === SELECTION_TYPE.CASE ? "scale-125" : "scale-125"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 text-black hover:text-gray-700 bg-white/70 rounded-full shadow hover:bg-white transition"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M15 19l-7-7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 text-black hover:text-gray-700 bg-white/70 rounded-full shadow hover:bg-white transition"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Image
        src={
          carouselType === SELECTION_TYPE.BAND
            ? selectedCase?.src
            : selectedBand?.src
        }
        width={300}
        height={400}
        style={{ objectFit: "fill" }}
        className={`absolute scale-150 ${
          carouselType === SELECTION_TYPE.BAND ? "z-10" : ""
        }`}
        alt={
          carouselType === SELECTION_TYPE.BAND
            ? selectedCase?.alt
            : selectedBand?.alt
        }
      />
    </div>
  );
}
