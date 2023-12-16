import "./App.css";
import Main from "./components/Calender/Main";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/Calender/UserDetails";
import { useState } from "react";
import Ticket from "./components/Calender/Ticket";

function App() {
  const [all, setAll] = useState({});

  const getTimeData = (data) => {
    // setDateSlot(data);
    setAll({ data });
    // dispatch(addUserDetails(data));
    console.log("Main Data called in App ", data);
  };

  const getUserData = (user) => {
    // setUser(user);
    setAll({ ...all, user });
    // dispatch(addUserDetails({ ...reduxState, user }));
    console.log("User Data called in App ", user);
  };
  return (
    <>
      <Routes>
        <Route path="" element={<Main getMainData={getTimeData} />} />
        <Route
          path="user-details"
          element={<UserDetails getUserData={getUserData} />}
        />
        <Route path="user-details/ticket" element={<Ticket values={all} />} />
      </Routes>
    </>
  );
}

export default App;
