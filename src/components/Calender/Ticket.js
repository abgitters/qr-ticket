import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useSelector } from "react-redux";
import { selectState } from "../app/slices/UserDetailsSlice";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TicketDetails from "./TicketDetails";
import { Paper } from "@mui/material";

const Ticket = ({ values }) => {
  // simple way
  // const nw = JSON.stringify(values);

  // redux way
  const reduxState = useSelector(selectState);
  let nw = JSON.stringify(reduxState);

  return (
    <Container sx={{ pt: 5 }}>
      <Paper elevation={4} variant="elevation">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Grid item xs={12} md={8} textAlign="center">
            <TicketDetails data={reduxState} />
          </Grid>
          <Grid item xs={12} md={4}>
            <QRCodeSVG value={nw} size={200} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Ticket;
