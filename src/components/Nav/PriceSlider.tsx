import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";
import { FetchedData } from "../../interfece/ProductInterface";

type Props = {
  items: FetchedData[];
  filter: string;
  setBudget: (budget: number[]) => void;
  budget: number[];
};

function getMinMaxValues(items: FetchedData[], filter: string) {
  let min, max: number;
  min = items["0"].price;
  max = 0;
  for (const [key, value] of Object.entries(items)) {
    if (filter === value.category || filter === "all products") {
      const price = value.price;
      if (min > price) {
        min = price;
      } else if (max < price) {
        max = price;
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

export default function PriceSlider(props: Props) {
  const { budget, setBudget }: Props = props;
  const [min, max] = getMinMaxValues(props.items, props.filter);
  const m = marks(min, max);
  const minDistance = max * 0.01;
  useEffect(() => {
    setBudget([min, max]);
  }, [props.filter]);

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setBudget([Math.min(newValue[0], budget[1] - minDistance), budget[1]]);
    } else {
      setBudget([budget[0], Math.max(newValue[1], budget[0] + minDistance)]);
    }
  };
  // TODO: fix useEffect
  return (
    <Box sx={{}}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        min={min}
        max={max}
        value={budget}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={m}
        disableSwap
      />
    </Box>
  );
}
