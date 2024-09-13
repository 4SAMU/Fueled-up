import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

// Options array for stake periods
const options = [
  { category: "Stake Period", StakePeriodOption: "1 day" },
  { category: "Stake Period", StakePeriodOption: "5 days" },
  { category: "Stake Period", StakePeriodOption: "10 days" },
];

const StakePeriodSelect = ({
  stakePeriod,
  setStakePeriod,
}: {
  stakePeriod: string;
  setStakePeriod: (value: string) => void;
}) => {
  const [label, setLabel] = useState("Select Stake Period");

  // Handle input focus and blur events to manage label visibility
  const handleFocus = () => setLabel("");
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) setLabel("Select Stake Period");
  };

  // Update label based on selected stake period
  useEffect(() => {
    if (stakePeriod) setLabel("");
  }, [stakePeriod]);

  return (
    <Autocomplete
      sx={{
        "&.MuiAutocomplete-root": {
          backgroundColor: "transparent",
          "& fieldset": { borderColor: "#707070" },
          "&:hover fieldset, &.Mui-focused fieldset": {
            borderColor: "#46aa40",
          },
          "& .MuiOutlinedInput-input": { padding: "0 !important" },
          ".MuiAutocomplete-input": {
            height: "35px !important",
            padding: "0 10px !important",
            fontSize: "14px",
            fontWeight: "300",
            color: "#707070",
          },
          label: {
            color: "#707070",
            fontSize: "14px",
            fontWeight: "300",
          },
          svg: { color: "#46aa40" },
        },
      }}
      options={options}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.StakePeriodOption}
      value={
        options.find((option) => option.StakePeriodOption === stakePeriod) ||
        null
      }
      onChange={(_event, value) =>
        setStakePeriod(value?.StakePeriodOption || "")
      }
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    />
  );
};

export default StakePeriodSelect;
