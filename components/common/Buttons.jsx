import React from "react";
import { GeneralText, NavigationItem, SaveButtonText } from "./Text";
import COLORS from "@/utils/colors";

export const PrimaryButton = ({ children, ...props }) => {
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

export const SaveButton = ({ children, ...props }) => {
  return (
    <button
      className="px-[15px] border py-2 rounded-full"
      style={{ backgroundColor: COLORS.BUTTON_BACKGROUND, zIndex: 1000 }}
      {...props}
    >
      <SaveButtonText color="white" letterSpacing="-.022em">
        {children}
      </SaveButtonText>
    </button>
  );
};
