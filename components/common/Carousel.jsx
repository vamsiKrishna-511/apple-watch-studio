"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SELECTION_TYPE } from "@/utils/constants";

const settings = {
  infinite: false, // Don’t loop, so we can stop at last item
  centerMode: true, // Keep the active slide centered
  centerPadding: "0px", // No extra side padding
  variableWidth: true, // Each slide can have its own width
  slidesToShow: 1, // 'slidesToShow' is effectively overridden by variableWidth
  slidesToScroll: 1,
  swipeToSlide: true, // Allows swiping beyond just slidesToScroll
  initialSlide: 0, // Start at the first item (which will be centered)
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      // On narrower screens, you might want smaller slides or different styling.
      breakpoint: 768,
      settings: {
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
      },
    },
  ],
};

export default function Carousel({ items, carouselType, selectedItem }) {
  console.log("selectedItem nik", selectedItem);
  return (
    <div className="relative w-screen overflow-hidden bg-white border">
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              width: carouselType === SELECTION_TYPE.CASE ? "312px" : "312px",
              height: "312px",
            }}
            className="flex justify-center items-center mx-auto"
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                transform: carouselType === SELECTION_TYPE.CASE && "scale(1.2)",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom arrow for "Next" button
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/70 rounded-full shadow hover:bg-white transition"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <svg
        className="w-6 h-6 text-black hover:text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// Custom arrow for "Previous" button
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/70 rounded-full shadow hover:bg-white transition"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <svg
        className="w-6 h-6 text-black hover:text-gray-700"
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
  );
}
