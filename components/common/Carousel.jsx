"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SELECTION_TYPE } from "@/utils/constants";

// Custom arrow for "Next" button
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/70 rounded-full shadow hover:bg-white transition"
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
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/70 rounded-full shadow hover:bg-white transition"
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

export default function Carousel({
  items,
  carouselType,
  selectedItem,
  handleSelectedItem,
  selectedCase,
  selectedBand,
}) {
  // Track which item is at the center
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    handleSelectedItem(centerIndex);
  }, [centerIndex]);

  const settings = {
    infinite: false,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (currentSlideIndex) => {
      setCenterIndex(currentSlideIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  // Decide which overlay image to show
  const overlaySrc =
    carouselType === SELECTION_TYPE.CASE
      ? selectedBand?.src
      : selectedCase?.src;
  const overlayAlt =
    carouselType === SELECTION_TYPE.CASE
      ? selectedBand?.alt
      : selectedCase?.alt;

  const overlayZindex = carouselType === SELECTION_TYPE.CASE ? 10 : 100;

  return (
    <div
      className="relative w-screen bg-white border overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Overlay image, behind the carousel (z-10 on the carousel, z-0 here) */}
      <img
        src={overlaySrc}
        alt={overlayAlt}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "312px",
          height: "312px",
          objectFit: "cover",
          zIndex: overlayZindex,
        }}
      />

      {/* Slick Slider above the overlay */}
      <Slider {...settings} className="z-10">
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{
              width: "312px",
              height: "312px",
            }}
            className="flex justify-center items-center mx-auto"
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
