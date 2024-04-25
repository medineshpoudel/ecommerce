import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/Form";
import { AppName } from "../../../constants/constants";
import SignUpFormFields from "./SignUpFormFields";
import { RegistrationFormValidationSchema } from "../../../validators/LoginValidatos";
import LoginService from "../../../services/Login.service";

const SignUp = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignUp = async (userData: any) => {
    const signUpData = { ...userData, role: ["user"] };
    await LoginService.signup(signUpData);
  };

  return (
    <div className="flex justify-center mt-5 h-full  ">
      <div className="flex h-5/6  shadow-xl">
        <div className="w-128">
          <FormComponent
            initialValues={{
              email: "",
              password: "",
              first_name: "",
              last_name: "",
              phone_no: "",
              username: "",
            }}
            formFields={SignUpFormFields}
            formTitle="Start Shopping, SignUp!"
            onCancel={() => navigate("/home")}
            onSubmit={onSignUp}
            validationSchema={RegistrationFormValidationSchema}
          />
          <p className="font-semibold my-3 mx-2">
            Already Have an Account?
            <span
              className="text-primary font-semibold underline cursor-pointer ml-1"
              onClick={() => navigate("/login")}
            >
              Login
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

export default SignUp;
