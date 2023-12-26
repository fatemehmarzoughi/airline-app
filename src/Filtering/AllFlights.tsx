import React from "react";
import { useFilteredFlights } from "./hooks/filterFlights";

export const AllFlights = React.memo(() => {

  const { FilteredItems } = useFilteredFlights();

  return (
    <ul className="flex flex-wrap">
      {FilteredItems.length === 0 ? (
        <span className="m-auto text-gray-700">No Result Found</span>
      ) : (
        <></>
      )}
      {FilteredItems.map((flight) => {
        const [date, time] = flight.flightTime.split("T");
        return (
          <a
            key={flight.id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2"
            href="#"
          >
            <img alt={flight.airline} src="airplaine.png" />
            <h4 className="bold">{flight.airline}</h4>

            <span>
              <p className="all-flights__card-flight-time">
                {flight.flightTime}
              </p>
              <p className="all-flights__card-price">{flight.price}</p>
            </span>
          </a>
        );
      })}
    </ul>
  );
});
