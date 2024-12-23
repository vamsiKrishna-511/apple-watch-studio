"use client"; // If you are using the Next.js app router (app/ directory)

import { createContext, useContext, useState, useEffect } from "react";
import DIAL_DATA from "@/data/dialData";
import STRAP_DATA from "@/data/strapData";
import SIZE_DATA from "@/data/sizeData";

export const WatchConfigContext = createContext(null);

export function WatchConfigProvider({ children }) {
  // Default indexes
  const [caseIndex, setCaseIndex] = useState(2);
  const [bandIndex, setBandIndex] = useState(36);
  const [sizeIndex, setSizeIndex] = useState(1);

  // Default selected items from their respective arrays
  const [selectedCase, setSelectedCase] = useState(DIAL_DATA[caseIndex]);
  const [selectedBand, setSelectedBand] = useState(STRAP_DATA[bandIndex]);
  const [selectedSize, setSelectedSize] = useState(SIZE_DATA[sizeIndex]);

  const [directlyShowSelection, setDirectlyShowSelection] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const c = urlParams.get("case");
      const b = urlParams.get("band");
      const s = urlParams.get("size");

      if (c && b && c) {
        setDirectlyShowSelection(true);
      }

      // If we find matching IDs in your data arrays, set them
      if (c) {
        const foundIndex = DIAL_DATA.findIndex((item) => item.id === c);
        if (foundIndex >= 0) {
          setCaseIndex(foundIndex);
          setSelectedCase(DIAL_DATA[foundIndex]);
        }
      }

      if (b) {
        const foundIndex = STRAP_DATA.findIndex((item) => item.id === b);
        if (foundIndex >= 0) {
          setBandIndex(foundIndex);
          setSelectedBand(STRAP_DATA[foundIndex]);
        }
      }

      if (s) {
        const foundIndex = SIZE_DATA.findIndex((item) => item.id === s);
        if (foundIndex >= 0) {
          setSizeIndex(foundIndex);
          setSelectedSize(SIZE_DATA[foundIndex]);
        }
      }
    }
  }, []);

  // Expose states and setters
  const value = {
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
  };

  return (
    <WatchConfigContext.Provider value={value}>
      {children}
    </WatchConfigContext.Provider>
  );
}

export function useWatchConfig() {
  return useContext(WatchConfigContext);
}
