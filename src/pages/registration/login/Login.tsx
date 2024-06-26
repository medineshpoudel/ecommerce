/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/Form";
import { AppName } from "../../../constants/constants";
import LoginService from "../../../services/Login.service";
import { LoginFormValidationSchema } from "../../../validators/LoginValidatos";
import LoginFormFields from "./LoginFormFields";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = async (userData: any) => {
    await LoginService.login(userData);
  };

  return (
    <div className="flex justify-center h-bodyHeight !important  mt-52 md:mt-20">
      <div className="flex h-3/4  shadow-xl">
        <div className="w-full md:w-128">
          <FormComponent
            initialValues={{ email: "", password: "" }}
            formFields={LoginFormFields}
            formTitle="Start Shopping, Login!"
            onCancel={() => navigate("/landing")}
            validationSchema={LoginFormValidationSchema}
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
        <div className="hidden md:flex flex-col w-96  bg-blue justify-center items-center">
          <h1 className="text-white font-semibold">{AppName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
