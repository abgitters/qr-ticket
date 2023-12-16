import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TicketDetails = ({ data }) => {
  return (
    <>
      <div>
        <img src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-free-demo-banner-design-vector-png-image_6695393.png" />
      </div>
      <p>
        <b> Name:</b> {data?.firstName} {data?.lastName}
      </p>
      <p>
        <b>Email:</b> {data?.email}
      </p>
      <p>
        <b>Contact No:</b> {data?.contactNo}
      </p>
      <p>
        <b>Gender:</b> {data?.gender}
      </p>
      <p>
        <b>Slot Time:</b> {data?.time}
      </p>
      <p>
        <b>Day:</b> {data?.date?.$d?.getFullYear()}{" "}
        {months[data?.date?.$d?.getMonth()]} {data?.date?.$d?.getDate()}
      </p>
    </>
  );
};

export default TicketDetails;
