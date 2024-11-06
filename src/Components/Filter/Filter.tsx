// Filter.tsx
import { useEffect, useState } from "react";
import PriceFilter from "./PriceFilter";
import StatusFilter from "./StatusFilter";
import filterPolygons from "../../DomAPI-Functions/filterPolygons";
import "./css/Filter.css";
import setupHoverEffect from "../../DomAPI-Functions/hoverOnPolygan";

const Filter = () => {
  const [status, setStatus] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [minPrice, maxPrice] = priceRange;

  filterPolygons(status, minPrice, maxPrice);
  
  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  const handlePriceChange = (newPriceRange: number[]) => {
    setPriceRange(newPriceRange);
  };

  useEffect(() => {
    setupHoverEffect();
  }, [status, minPrice, maxPrice]);

  return (
    <>
      <div className="filter">
       
        <StatusFilter onStatusChange={handleStatusChange} />
        <PriceFilter onPriceChange={handlePriceChange} />
      </div>
    </>
  );
};

export default Filter;
