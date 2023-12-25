import React from "react";
import allFlights from "./assets/mockFlights.json";

export const AllFlights = React.memo(() => {
  return (
    <ul className="flex flex-wrap">
      {allFlights.map((flight) => (
        <a
          key={flight.id}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2"
          href="#"
        >
          <img alt={flight.airline} src="airplaine.png" />
          <h4 className="bold">{flight.airline}</h4>

          <span>
            <p className="all-flights__card-flight-time">{flight.flightTime}</p>
            <p className="all-flights__card-price">{flight.price}</p>
          </span>
        </a>
      ))}
    </ul>
  );
});
