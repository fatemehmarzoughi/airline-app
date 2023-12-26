import { useMemo } from "react";
import allFlights from "../assets/mockFlights.json";
import { useLocation } from "react-router-dom";
import { IFlight } from "../types/flight";

export const useFilteredFlights = () => {
  const location = useLocation();

  const FilteredItems = useMemo(() => {
    const searchParams = location.search.slice(1);
    const filterOptions = searchParams.split("&");
    let filteredFlights = allFlights;
    const requiredAirlines: string[] = [];

    /* -------------------- Save required airlines ------------------- */
    filterOptions.map((option) => {
      const [item, value] = option.split("=");

      if (
        item === "aseman" ||
        item === "mahan" ||
        item === "emirates" ||
        item === "iranair" ||
        item === "homa"
      ) {
        if (value === "true") requiredAirlines.push(item);
      }
    });

    /* ----------------------------- Filter Airlines ---------------------------- */
    if (requiredAirlines.length)
      filteredFlights = filteredFlights.filter((i) =>
        requiredAirlines.includes(i.airline.toLocaleLowerCase())
      );

    /* -------------------------- Filter time and price ------------------------- */
    filterOptions.map((option) => {
      const [item, value] = option.split("=");

      switch (item) {
        case "maxprice":
          filteredFlights = filteredFlights.filter(
            (flight) => flight.price <= Number(value)
          );

          break;

        case "flighttime":
          filteredFlights = filteredFlights.filter((flight) => {
            const [date, time] = flight.flightTime.split("T");
            const [hour, min, sec] = time.split(":");

            if (Number(hour) >= 6 && Number(hour) < 12)
              return value === "morning";

            if (Number(hour) >= 12 && Number(hour) < 18)
              return value === "noon";

            if (Number(hour) >= 18 && Number(hour) < 24)
              return value === "night";

            if (Number(hour) >= 24 && Number(hour) < 6) return value === "dawn";

            if (hour === "00") return value === "morning";
          });
          break;
        default:
          break;
      }
    });

    return filteredFlights;
  }, [location.search]);

  return { FilteredItems };
};
