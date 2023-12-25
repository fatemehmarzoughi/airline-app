import clsx from "clsx";
import React, { ReactNode } from "react";

export type ISideMenu = {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export const SideMenu = React.memo<ISideMenu>(
  ({ isOpen, onClose, children }) => {
    return (
      <>
        <div
          onClick={onClose}
          className={`absolute inset-0 bg-gray-700/50 ${
            !isOpen ? "hidden" : ""
          }`}
        ></div>
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 lg:w-1/5 md:w-1/2 sm:w-full h-screen p-4 overflow-y-auto transition-transform ${
            !isOpen ? "-translate-x-full" : ""
          } bg-white dark:bg-gray-800`}
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            onClick={onClose}
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <span className="sr-only">Close menu</span>
          </button>
          {children}
        </div>
      </>
    );
  }
);
