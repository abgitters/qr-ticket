import React, { useState } from "react";
// import Chip from "@mui/material-next/Chip";
import Chip from "@mui/material/Chip";

const TimeChip = ({ label, handleClick }) => {
  const [chipCol, setChipCol] = useState(false);
  const handleChangeCol = (data) => {
    setChipCol(!chipCol);
    handleClick(data);
  };
  return (
    <>
      <Chip
        color={chipCol ? "primary" : "success"}
        // disabled={false}
        size="medium"
        variant="filled"
        label={label}
        onClick={() => handleChangeCol(label)}
      />
    </>
  );
};

export default TimeChip;
