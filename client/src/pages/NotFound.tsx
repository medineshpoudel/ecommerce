import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center  h-full w-full">
      <div className="flex items-center flex-col gap-10">
        <p className="text-3xl">
          <span className="font-bold text-red">404-Not Found: </span>The page
          you are looking for is not found
        </p>
        <Button text="Go To Home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default NotFound;
