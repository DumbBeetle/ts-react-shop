import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";
import { FetchedData } from "../../interfece/ProductInterface";

type Props = {
  items: FetchedData[];
  filter: string;
};

function getMinMaxValues(items: FetchedData[], filter: string) {
  let min, max: number;
  min = items["0"].price;
  max = items["0"].price;
  for (const [key, value] of Object.entries(items)) {
    if (filter === value.category) {
      const price = value.price;
      if (min > price) {
        min = price;
        console.log("min = " + min);
      }
      if (max < price) {
        max = price;
        console.log("max = " + max);
      }
    }
  }
  return [min, max];
}

const marks = (min: number, max: number) => {
  return [
    {
      value: min,
      label: `$${min}`,
    },
    {
      value: max,
      label: `$${max}`,
    },
  ];
};

function valuetext(value: number) {
  return `$${value}`;
}

const minDistance = 10;
export default function PriceSlider(props: Props) {
  let [min, max] = getMinMaxValues(props.items, props.filter);
  const m = marks(min, max);
  const [value, setValue] = useState<number[]>([min, max]);

  const sliderEvent = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  useEffect(() => {
    setValue([min, max]);
    console.log("effect");
  }, []);
  // TODO: fix useEffect
  return (
    <Box sx={{}}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={min}
        max={max}
        onChange={sliderEvent}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={m}
        disableSwap
      />
    </Box>
  );
}
