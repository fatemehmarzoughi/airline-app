import clsx from "clsx";
import React, { ReactNode } from "react";

export type ISideMenu = {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export const SideMenu = React.memo<ISideMenu>(({ isOpen, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-gray-700/50 ${!isOpen ? "hidden" : ""}`}
      ></div>
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-1/5 h-screen p-4 overflow-y-auto transition-transform ${
          !isOpen ? "-translate-x-full" : ""
        } bg-white dark:bg-gray-800`}
        aria-labelledby="drawer-navigation-label"
      >
        {children}
      </div>
    </>
  );
});
