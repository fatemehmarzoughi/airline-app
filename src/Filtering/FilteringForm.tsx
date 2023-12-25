import React from "react";
import mockAirlines from "./assets/mockAirlines.json";
import { Label } from "./components/label";

export const FilteringForm = React.memo(() => {
  return (
    <>
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-black-500 uppercase dark:text-gray-400 mb-5"
      >
        Filter Options
      </h5>
      <form className="m-2">
        {/* /* ---------------------------------- Price --------------------------------- */}
        <div className="mb-4">
          <Label title="Price" />
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="airline"
              type="number"
              placeholder="Maximum Price"
            />
            <span className="ml-1 self-center">Toman</span>
          </div>
        </div>

        {/* /* --------------------------------- Flight Time -------------------------------- */}
        <div className="w-full mb-4">
          <Label title="Flight Time" />
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>6am - 12pm</option>
              <option>12pm - 6pm</option>
              <option>6pm - 00am</option>
              <option>00am - 6am</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* /* --------------------------------- Airline -------------------------------- */}
        <div className="">
          <Label title="Airline" />
          {mockAirlines.map((airline) => (
            <div className="flex items-center mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {airline.name}
              </label>
            </div>
          ))}
        </div>
      </form>
    </>
  );
});
