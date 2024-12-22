"use client";
import { SELECTION_TYPE } from "@/utils/constants";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

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
  initialIndex = 0,
  onCenterChange,
  carouselType,
  selectedCase,
  selectedBand,
}) {
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(initialIndex);

  // Whenever parent changes initialIndex, jump there
  useEffect(() => {
    if (sliderRef.current && typeof initialIndex === "number") {
      sliderRef.current.slickGoTo(initialIndex, true);
    }
  }, [initialIndex]);

  const settings = {
    infinite: false,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: centerIndex,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (currentIndex) => {
      setCenterIndex(currentIndex);
      onCenterChange?.(currentIndex);
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
    carouselType === SELECTION_TYPE.CASE || carouselType === SELECTION_TYPE.SIZE
      ? selectedBand?.src
      : selectedCase?.src;
  const overlayAlt =
    carouselType === SELECTION_TYPE.CASE || carouselType === SELECTION_TYPE.SIZE
      ? selectedBand?.alt
      : selectedCase?.alt;

  const overlayZindex =
    carouselType === SELECTION_TYPE.CASE || carouselType === SELECTION_TYPE.SIZE
      ? 0
      : 10;

  return (
    <div className="relative w-screen bg-white overflow-hidden">
      {/* Overlay image, behind the carousel (z-10 on the carousel, z-0 here) */}
      {overlaySrc && (
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
      )}
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              width: "312px",
              height: "312px",
            }}
            className="flex justify-center items-center mx-auto"
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{ objectFit: "cover", zIndex: 100 }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
