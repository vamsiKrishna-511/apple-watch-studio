import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-8">
      <Image
        src={CONSTANTS.APPLE_WATCH_ICON}
        height={20}
        width={90}
        alt="apple watch studio icon"
      />
    </div>
  );
};

export default Navbar;
