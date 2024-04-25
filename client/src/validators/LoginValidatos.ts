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
