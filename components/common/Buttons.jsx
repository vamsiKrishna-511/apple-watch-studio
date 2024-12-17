import React from "react";
import { GeneralText, NavigationItem } from "./Text";
import COLORS from "@/utils/colors";

export const PrimaryButton = ({ children, ...props }) => {
  console.log("props", props);
  return (
    <button
      className="px-[22px] border py-3 rounded-full"
      style={{ backgroundColor: COLORS.BUTTON_BACKGROUND, zIndex: 1000 }}
      {...props}
    >
      <NavigationItem color="white" letterSpacing="-.022em">
        {children}
      </NavigationItem>
    </button>
  );
};
