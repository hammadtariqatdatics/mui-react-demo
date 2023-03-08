import * as yup from "yup";

const signUpSchema = yup.object().shape({
  firstname: yup.string().min(3).max(25).required("First Name is required..."),
  lastname: yup.string().min(3).max(25).required("Last Name is required..."),
  email: yup.string().email().required("Email is required..."),
  password: yup.string().min(8).max(20).required("Password is required..."),
  city: yup.string().required("Mention your city..."),
  country: yup.string().required("Mention your country..."),
  gender: yup.string().required("Gender is required..."),
  phone: yup.string().max(15).required("Number is required..."),
  dob: yup.string().required("DOB is required..."),
});

export default signUpSchema;
