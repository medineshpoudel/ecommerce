import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/Form";
import { AppName } from "../../../constants/constants";
import LoginFormFields from "./LoginFormFields";
import * as Yup from "yup";

export const RegistrationFormValidationSchema = Yup.object().shape({
  _email: Yup.string()
    .min(2, "Email Must be more than 2 letters!")
    .max(50, "Too Long!")
    .required("Required"),
  _password: Yup.string()
    .min(4, "Email Must be more than 2 letters!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex h-3/4  shadow-xl">
        <div className="w-128">
          <FormComponent
            formFields={LoginFormFields}
            formTitle="Start Shopping, Login!"
            onCancel={() => navigate("/home")}
            validationSchema={RegistrationFormValidationSchema}
          />
          <p className="font-semibold  my-3 mx-2">
            Do Not Have an Account?
            <span
              className="text-primary font-semibold underline cursor-pointer ml-2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div className="flex flex-col w-96  bg-blue justify-center items-center">
          <h1 className="text-white font-semibold">{AppName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
