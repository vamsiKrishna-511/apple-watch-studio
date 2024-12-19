"use client";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ items, renderItem, itemWidth = 300 }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // canScrollLeft is true if scrollLeft > 0
    setCanScrollLeft(scrollLeft > 0);

    // canScrollRight is true if (scrollLeft + clientWidth) < scrollWidth
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial check
    checkScrollPosition();

    // Add scroll event listener
    container.addEventListener("scroll", checkScrollPosition);
    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, [items]);

  const scrollByItem = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // If less than 2 items, no need to show arrows
  const showArrows = items.length > 1;

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Only show arrows if more than one item */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scrollByItem("left")}
          className="absolute z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 right-[55vw] top-1/2 transform -translate-y-1/2"
          aria-label="Scroll left"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 6l-6 6 6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full max-w-[80vw] scrollbar-hide"
        style={{
          paddingLeft: "50vw",
          paddingRight: "50vw",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center flex flex-col items-center mx-4"
            style={{ width: itemWidth }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {showArrows && canScrollRight && (
        <button
          onClick={() => scrollByItem("right")}
          className="absolute z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 left-[55vw] top-1/2 transform -translate-y-1/2"
          aria-label="Scroll right"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemWidth: PropTypes.number,
};

export default Carousel;
