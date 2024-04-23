import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/Form";
import { AppName } from "../../../constants/constants";
import LoginFormFields from "./LoginFormFields";
import * as Yup from "yup";
import LoginService from "../../../services/Login.service";

export const RegistrationFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Email Must be more than 2 letters!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(4, "Email Must be more than 2 letters!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLogin = async (userData: any) => {
    const loginResponse = await LoginService.login(userData);
    console.log(loginResponse);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex h-3/4  shadow-xl">
        <div className="w-128">
          <FormComponent
            initialValues={{ email: "", password: "" }}
            formFields={LoginFormFields}
            formTitle="Start Shopping, Login!"
            onCancel={() => navigate("/home")}
            validationSchema={RegistrationFormValidationSchema}
            onSubmit={onLogin}
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
