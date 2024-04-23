import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/Form";
import { AppName } from "../../../constants/constants";
import SignUpFormFields from "./SignUpFormFields";
import { RegistrationFormValidationSchema } from "../../../validators/LoginValidatos";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-5 h-full  ">
      <div className="flex h-5/6  shadow-xl">
        <div className="w-128">
          <FormComponent
            formFields={SignUpFormFields}
            formTitle="Start Shopping, SignUp!"
            onCancel={() => navigate("/home")}
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
