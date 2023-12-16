import React from "react";
import Container from "@mui/material/Container";
import Calender from "./Calinder";
import { Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { Paper } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TimeChip from "./TimeChip";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails, selectState } from "../app/slices/UserDetailsSlice";

const fullDayTimings = [
  "12:00 AM - 1:00 AM",
  "1:00 AM - 2:00 AM",
  "2:00 AM - 3:00 AM",
  "3:00 AM - 4:00 AM",
  "4:00 AM - 5:00 AM",
  "5:00 AM - 6:00 AM",
  "6:00 AM - 7:00 AM",
  "7:00 AM - 8:00 AM",
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
  "8:00 PM - 9:00 PM",
  "9:00 PM - 10:00 PM",
  "10:00 PM - 11:00 PM",
  "11:00 PM - 12:00 AM",
];

const Main = ({ getMainData }) => {
  const [val, setVal] = useState(null);

  const dispatch = useDispatch();
  const reduxState = useSelector(selectState);
  const navigate = useNavigate();

  const getDate = (value) => {
    setVal(value);
  };
  const handleClick = (slot) => {
    getMainData({
      date: val,
      time: slot,
    });
    dispatch(
      addUserDetails({
        ...reduxState,
        date: val,
        time: slot,
      })
    );
    navigate("/user-details");
  };

  console.log("reduxState in Main", reduxState);

  return (
    <>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: { sm: "center", md: "flex-start", xs: "center" },
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <Paper elevation={5}>
                <Calender getdate={getDate} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {val && (
                <Paper elevation={5} sx={{ p: 3 }}>
                  <Grid container spacing={2}>
                    {Array.isArray(fullDayTimings) &&
                      fullDayTimings?.map((val, i) => {
                        return (
                          <Grid item xs={6} sm={4} md={4} key={i}>
                            <TimeChip label={val} handleClick={handleClick} />
                          </Grid>
                        );
                      })}
                  </Grid>
                </Paper>
              )}
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Container>
    </>
  );
};

export default Main;
