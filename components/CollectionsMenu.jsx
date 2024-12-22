import React from "react";
import { GeneralText } from "./common/Text";

const CollectionsMenu = ({ onClose }) => {
  return (
    <div className="w-80 p-4">
      <ul className="space-y-2">
        <GeneralText
          className="cursor-pointer hover:bg-gray-100 p-2 rounded transition text-center"
          onClick={onClose}
        >
          Apple Watch Series 10
        </GeneralText>
        <GeneralText
          className="cursor-pointer hover:bg-gray-100 p-2 rounded transition text-center"
          onClick={onClose}
        >
          Apple Watch Hermès Series 10
        </GeneralText>
        <GeneralText
          className="cursor-pointer hover:bg-gray-100 p-2 rounded transition text-center"
          onClick={onClose}
        >
          Apple Watch SE
        </GeneralText>
      </ul>
    </div>
  );
};

export default CollectionsMenu;
