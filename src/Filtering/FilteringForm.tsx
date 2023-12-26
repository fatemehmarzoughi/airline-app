import React, { useCallback } from "react";
import mockAirlines from "./assets/mockAirlines.json";
import { Label } from "./components/label";
import { useNavigate } from "react-router-dom";

export const FilteringForm = React.memo(() => {
  const navigate = useNavigate();

  const applyFilter = useCallback(
    (e: any) => {
      e.preventDefault();
      const { maxprice, flighttime, aseman, mahan, emirates, homa, iranair } =
        e.target.elements;

      let searchParams = "?";

      if (maxprice.value) searchParams += `maxprice=${maxprice.value}&`;
      if (flighttime.value) searchParams += `flighttime=${flighttime.value}&`;
      searchParams += `aseman=${aseman.checked}&`;
      searchParams += `mahan=${mahan.checked}&`;
      searchParams += `emirates=${emirates.checked}&`;
      searchParams += `homa=${homa.checked}&`;
      searchParams += `iranair=${iranair.checked}&`;

      navigate({
        pathname: "/",
        search: searchParams,
      });
    },
    [navigate]
  );

  return (
    <>
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-black-500 uppercase dark:text-gray-400 mb-5"
      >
        Filter Options
      </h5>
      <form className="m-2" onSubmit={applyFilter}>
        {/* /* ---------------------------------- Price --------------------------------- */}
        <div className="mb-4">
          <Label title="Price" />
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="airline"
              type="number"
              name="maxprice"
              placeholder="Maximum Price"
            />
            <span className="ml-1 self-center">Toman</span>
          </div>
        </div>

        {/* /* ------------------------------- Flight Time ------------------------------ */}
        <div className="w-full mb-4">
          <Label title="Flight Time" />
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="flightTime"
              defaultChecked={false}
              defaultValue=''
              name="flighttime"
            >
              <option value="morning" id="morning">
                6am - 12pm
              </option>
              <option value="noon" id="noon">
                12pm - 6pm
              </option>
              <option value="night" id="night">
                6pm - 00am
              </option>
              <option value="dawn" id="dawn">
                00am - 6am
              </option>
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
            <div key={airline.id} className="flex items-center mt-4">
              <input
                id={`airline-${airline.name}`}
                type="checkbox"
                value={airline.name.toLocaleLowerCase()}
                name={airline.name.toLocaleLowerCase()}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {airline.name}
              </label>
            </div>
          ))}
        </div>

        <input
          value="Filter"
          type="submit"
          className="text-blue-700 bg-blue-700 text-white mt-10 border border-white-0 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        />
      </form>
    </>
  );
});
