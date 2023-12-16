import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails, selectState } from "../app/slices/UserDetailsSlice";

const UserDetails = ({ getUserData }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    gender: "male",
    isVarified: false,
  });
  const [errors, setErrors] = useState({
    userErrors: {},
  });

  const dispatch = useDispatch();
  const reduxState = useSelector(selectState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const isUserValid = () => {
    const errors = {};
    if (!user?.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!user?.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!user?.email) {
      errors.email = "Email is required";
    }
    if (!user?.contactNo) {
      errors.contactNo = "Contact No is required";
    }

    setErrors({ ...errors, userErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    isUserValid();
    console.log("Details ", user);
    // getUserData(user);
    dispatch(
      addUserDetails({
        ...reduxState,
        ...user,
      })
    );
    navigate("ticket");
  };

  return (
    <>
      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        <h2 style={{ textAlign: "center" }}>User Information</h2>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={user?.firstName}
              onChange={handleChange}
              error={errors?.firstName}
              helperText={errors?.firstName}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={user?.lastName}
              onChange={handleChange}
              error={errors?.lastName}
              helperText={errors?.lastName}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Contact No"
              name="contactNo"
              value={user?.contactNo}
              onChange={handleChange}
              error={errors?.contactNo}
              helperText={errors?.contactNo}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={user?.email}
              onChange={handleChange}
              error={errors?.email}
              helperText={errors?.email}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={user?.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default UserDetails;
