import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/Form";
import { AppName } from "../../../constants/constants";
import VendorSignUpFormFields from "./VendorSignUpFormFields";
import LoginService from "../../../services/Login.service";

const VendorSignUp = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignUp = async (userData: any) => {
    const signUpData = { ...userData, role: ["vendor"] };
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
            formFields={VendorSignUpFormFields}
            formTitle="Lets Start Your Business, SignUp!"
            onCancel={() => navigate("/home")}
            onSubmit={onSignUp}
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

export default VendorSignUp;
