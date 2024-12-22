import COLORS from "@/utils/colors";
import React from "react";

// Unified Base Component for "SF Pro Text"
const SFProText = ({
  children,
  size = "17px",
  lineHeight = "25px",
  letterSpacing = "0px", // Default letter spacing
  bold = false,
  color = COLORS.ALMOST_BLACK, // Default color
  className = "",
}) => {
  const fontStyles = {
    fontFamily:
      '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: size,
    lineHeight,
    fontWeight: bold ? 600 : 400,
    color,
    letterSpacing, // Use the letterSpacing prop
  };

  return (
    <p style={fontStyles} className={className}>
      {children}
    </p>
  );
};

// Unified Base Component for "SF Pro Display"
const SFProDisplay = ({
  children,
  size = "19px",
  lineHeight = "23px",
  letterSpacing = "0px", // Default letter spacing
  bold = false,
  color = COLORS.ALMOST_BLACK, // Default color
  className = "",
}) => {
  const fontStyles = {
    fontFamily:
      '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: size,
    lineHeight,
    fontWeight: bold ? 600 : 400,
    color,
    letterSpacing, // Use the letterSpacing prop
  };

  return (
    <p style={fontStyles} className={className}>
      {children}
    </p>
  );
};

// SF Pro Text Components

export const SmallLabel = (props) => (
  <SFProText size="10px" lineHeight="14.7px" {...props} />
);

export const Caption = (props) => (
  <SFProText size="12px" lineHeight="16px" {...props} />
);

export const ProductDescription = (props) => (
  <SFProText size="14px" lineHeight="20px" {...props} />
);

export const PreviousButton = (props) => (
  <SFProText size="17px" lineHeight="17px" {...props} />
);

export const NavigationItem = (props) => (
  <SFProText size="17px" lineHeight="21px" {...props} />
);

export const GeneralText = (props) => (
  <SFProText size="17px" lineHeight="25px" {...props} />
);

// SF Pro Display Components

export const ProductName = (props) => (
  <SFProDisplay size="12px" lineHeight="16px" {...props} />
);

export const SaveButtonText = (props) => (
  <SFProDisplay size="14px" lineHeight="18px" {...props} />
);

export const BrandName = (props) => (
  <SFProDisplay size="19px" lineHeight="23px" {...props} />
);

export const Subheading = (props) => (
  <SFProDisplay size="21px" lineHeight="29px" {...props} />
);

export const ProminentHeading = (props) => (
  <SFProDisplay size="28px" lineHeight="32px" {...props} />
);

export const LargeHeading = (props) => (
  <SFProDisplay size="64px" lineHeight="68px" {...props} />
);
