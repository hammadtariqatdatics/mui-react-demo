import React from "react";
import MuiTextField from "../MuiTextField";
import MuiTypography from "../MuiTypography";
import {
  Container,
  Box,
  Grid,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import signUpSchema from "../../schemas/Validation";
import MenuItem from "@mui/material/MenuItem";
import MuiButton from "../MuiButton";
import http from "../../utils/Axios";

const SignupForm = () => {
  const { values, errors, handleChange, touched } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
      dob: "",
      country: "",
      city: "",
      phone: "",
    },

    validationSchema: signUpSchema,

    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const submitForm = async () => {
    try {
      if (
        values.firstname !== "" &&
        values.lastname !== "" &&
        values.email !== "" &&
        values.password !== "" &&
        values.gender !== "" &&
        values.dob !== "" &&
        values.country !== "" &&
        values.phone !== "" &&
        values.city !== ""
      ) {
        const data = await http.post("http://localhost:5000/users", values);
        console.log(data);
      }
    } catch (error) {
      console.log("Local Server is not working", error);
    }
  };
  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiTextField
              variant="outlined"
              label="First Name"
              color="secondary"
              type="text"
              placeholder="Your First Name"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              fullWidth="true"
            />
            {errors.firstname && touched.firstname ? errors.firstname : null}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiTextField
              variant="outlined"
              label="Last Name"
              color="secondary"
              type="text"
              placeholder="Your Last Name"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              fullWidth="true"
            />
            {errors.lastname && touched.lastname ? (
              <MuiTypography text={errors.lastname} />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiTextField
              variant="outlined"
              label="Email"
              color="secondary"
              type="email"
              placeholder="Your Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              fullWidth="true"
            />
            {errors.email && touched.email ? (
              <MuiTypography text={errors.email} />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiTextField
              variant="outlined"
              label="Password"
              color="secondary"
              type="password"
              placeholder="Your Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              fullWidth="true"
            />
            {errors.password && touched.password ? (
              <MuiTypography text={errors.password} />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiTextField
              variant="outlined"
              label="Phone"
              color="secondary"
              type="text"
              placeholder="Your Phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              fullWidth="true"
            />
            {errors.phone && touched.phone ? (
              <MuiTypography text={errors.phone} />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiTextField
              variant="outlined"
              color="secondary"
              type="date"
              name="dob"
              value={values.dob}
              onChange={handleChange}
              fullWidth="true"
            />
            {errors.dob && touched.dob ? (
              <MuiTypography text={errors.dob} />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gender"
                value={values.gender}
                label="Gender"
                onChange={handleChange}
                fullWidth="true"
                color="secondary"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
              {errors.gender && touched.gender ? (
                <MuiTypography text={errors.gender} />
              ) : null}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="country"
                value={values.country}
                label="Country"
                onChange={handleChange}
                fullWidth="true"
                color="secondary"
              >
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="America">America</MenuItem>
              </Select>
              {errors.country && touched.country ? (
                <MuiTypography text={errors.country} />
              ) : null}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="city"
                value={values.city}
                label="City"
                onChange={handleChange}
                fullWidth="true"
                color="secondary"
              >
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="Gujranwala">Gujranwala</MenuItem>
                <MenuItem value="Sialkot">Sialkot</MenuItem>
                <MenuItem value="Bahawalpur">Bahawalpur</MenuItem>
              </Select>
              {errors.city && touched.city ? (
                <MuiTypography text={errors.city} />
              ) : null}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <MuiButton
              color="secondary"
              variant="contained"
              size="large"
              sx={{ minWidth: 200 }}
              onClick={submitForm}
            >
              Sign Up
            </MuiButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default SignupForm;
