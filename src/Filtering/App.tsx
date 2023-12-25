import React, { useState } from "react";
import { SideMenu } from "./tools/sideMenu";
import { AllFlights } from "./AllFlights";
import { FilteringForm } from "./FilteringForm";

export const App = React.memo(() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <div className="w-4/5 m-auto">
      <header className="mt-2 ml-2">
        <button
          onClick={() => {
            setIsDrawerOpen((isOpen) => !isOpen);
            console.log(isDrawerOpen);
          }}
          className="text-blue-700 border border-white-0 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Filter Airlines
        </button>
        <a className="text-blue-700 hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          Reset
        </a>
      </header>

      <AllFlights />

      <SideMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <FilteringForm />
      </SideMenu>
    </div>
  );
});

export default App;
