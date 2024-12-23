"use client";
import { SELECTION_TYPE } from "@/utils/constants";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/100 rounded-full shadow hover:bg-white transition flex justify-center items-center"
      onClick={onClick}
      aria-label="Next Slide"
      tabIndex={0} // Ensures button is focusable
      style={{ backgroundColor: "#e8e8ed", width: "36px", height: "36px" }}
    >
      <FiChevronRight size={30} color="#0000008f" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/100 rounded-full shadow hover:bg-white transition flex justify-center items-center"
      onClick={onClick}
      aria-label="Previous Slide"
      tabIndex={0} // Ensures button is focusable
      style={{ backgroundColor: "#e8e8ed", width: "36px", height: "36px" }}
    >
      <FiChevronLeft size={30} color="#0000008f" />
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

  // Handle arrow key presses on the carousel container
  const handleKeyDown = (e) => {
    if (!sliderRef.current) return;
    // Left arrow key => previous slide, Right arrow key => next slide
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      sliderRef.current.slickPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      sliderRef.current.slickNext();
    }
  };

  // Determine which overlay image to show if needed
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

  return (
    <div
      className="relative w-screen bg-white overflow-hidden"
      // ARIA: "region" or "group" can help screen readers identify the carousel
      role="region"
      aria-label="Apple Watch Carousel"
      tabIndex={0} // Make the container focusable
      onKeyDown={handleKeyDown} // Capture arrow key events
    >
      {/* Overlay image behind the carousel (optional) */}
      {overlaySrc && (
        <img
          src={overlaySrc}
          alt={overlayAlt || ""}
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

      {/* Slick Slider above the overlay */}
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
