import * as Yup from "yup";

export const LoginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Email Must be more than 2 letters!")
    .max(50, "Too Long!")
    .required("Required"),

  password: Yup.string()
    .min(4, "Passowrd Must be more than 2 letters!")
    .max(50, "Too Long!")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{4,}$/,
      "Password must contain at least one number, one special character, and one uppercase letter"
    )
    .required("Required"),
});

export const RegistrationFormValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "username must be minimum 2 character")
    .required("Required"),

  first_name: Yup.string()
    .min(3, "first name must be minimum 3 character")
    .required("Name is required"),

  last_name: Yup.string().min(2, "last name must be minimum 2 character"),

  email: Yup.string()
    .min(2, "Email Must be more than 2 letters!")
    .max(50, "Too Long!")
    .required("Email is required"),

  password: Yup.string()
    .min(4, "Passowrd Must be more than 2 letters!")
    .max(50, "Too Long!")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{4,}$/,
      "Password must contain at least one number, one special character, and one uppercase letter"
    )
    .required("Password is required"),

  phone_no: Yup.number()
    .required("Phone number is required")
    .min(8, "Phone number must be more than 8 character"),
});
