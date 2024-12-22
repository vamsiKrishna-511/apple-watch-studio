"use client";
import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import { GeneralText } from "./common/Text";
import { SaveButton } from "./common/Buttons";
import CollectionsMenu from "./CollectionsMenu";
import Modal from "./common/Modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log("here");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="pl-8 pr-5 py-4 flex items-center justify-between">
      <Image
        src={CONSTANTS.APPLE_WATCH_ICON}
        height={20}
        width={90}
        alt="apple watch studio icon"
      />

      {/* Clicking this text will open the modal */}
      <div className="" onClick={handleOpenModal}>
        <GeneralText className="pr-10 cursor-pointer z-50">
          Collections
        </GeneralText>
      </div>

      <SaveButton>Save</SaveButton>

      {/* The modal (hidden by default) */}
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <CollectionsMenu onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Navbar;
