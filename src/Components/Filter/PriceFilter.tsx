import "./css/PriceFilter.css";
import { useEffect, useState } from "react";
import { Slider, Typography, Box } from "@mui/material";

const MAX_PRICE = 100000;

interface PriceFilterProps {
  onPriceChange: (priceRange: number[]) => void;
}

function PriceFilter({ onPriceChange }: PriceFilterProps) {
  const [priceRange, setPriceRange] = useState<number[]>([0, MAX_PRICE]);

  const handlePriceFilter = () => {
    onPriceChange(priceRange);
  };

  useEffect(() => {
    handlePriceFilter();
  }, [priceRange]);

  return (
    <div className="price-filter">
      <Box width={200} mx="auto">
        <Typography className="price-header" gutterBottom>
          Price
        </Typography>
        <Typography className="price-range" gutterBottom>
          <span>Price</span>{" "}
          <span>
            LE {priceRange[0]} - LE {priceRange[1]}
          </span>
        </Typography>
        <Slider
          value={priceRange}
          onChange={(event, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          max={MAX_PRICE}
          min={0}
          step={1000}
          aria-labelledby="range-slider"
        />
      </Box>
    </div>
  );
}

export default PriceFilter;
