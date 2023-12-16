import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";

const Calender = ({ getdate }) => {
  const [value, setValue] = React.useState(null);
  const [val, setVal] = React.useState(null);

  const onSelect = (v) => {
    setVal(v);
    getdate(v);
    // console.log("selected value", val?.$D);
  };

  React.useEffect(() => {
    console.log("selected value", val?.$D);
  }, [val]);
  return (
    <>
      {/* <h3>Calender Component</h3> */}
      <StaticDatePicker
        orientation="portrait"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        defaultValue={dayjs(new Date())}
        // Whenever we click on ok button
        onAccept={(v) => onSelect(v)}
        sx={{
          ".MuiPickersDay-today": {
            color: "#1565c0",
            borderRadius: 1,
            borderWidth: 1,
            borderColor: "#2196f3",
            border: "1.2px solid",
            // backgroundColor: "#bbdefb",
            backgroundColor: "#ffffff",
          },
        }}
      />
    </>
  );
};

export default Calender;
