import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const LandingBanner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-screen relative bg-contain flex flex-col md:px-10"
      style={{
        backgroundImage: "url('./landing-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="h-2/4 font-extrabold flex justify-center items-center flex-col text-white z-10 gap-3">
        <p className="text-3xl  md:text-6xl">ENJOY SHOPPING </p>
        <p className="text-3xl md:text-6xl">WITH GODAM</p>
        <Button
          text="LETS SHOP"
          style="text-black mt-3"
          onClick={() => navigate("/home")}
          rounded={false}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly h-60 z-10">
        <div className=" w-full h-full">
          <div className="hidden md:block text-white">
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
          </div>
          <div className="flex p-2  gap-10 ">
            <div
              className="bg-primary flex justify-center items-center h-24 w-128 md:h-32 md:w-96"
              style={{ borderRadius: "50%" }}
            >
              <div className="text-center  text-white">
                <p className="text-4xl font-bold">4.8</p>
                <p className="text-sm">24 reviews</p>
              </div>
            </div>

            <div className="bg-blur  bg-opacity-50 backdrop-filter backdrop-blur-md bg-transparent border rounded-lg p-2 text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                quidem at asperiores commodi eligendi quaerat veritatis
                doloribus rerum fugiat explicabo? Minus quas molestias earum
                dignissimos saepe tempora assumenda quisquam iste?
              </p>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center items-center">
          <div className="bg-white rounded-2xl h-4/5 w-2/5 p-3 flex justify-between flex-col">
            <div className="flex justify-between h-1/5">
              <p className="font-bold text-lg">Discounted Product</p>
              <p className="bg-gray p-2 text-white font-bold h-10 rounded-lg w-16  text-center">
                50%
              </p>
            </div>
            <div className="h-4/6 relative">
              <img
                src="./test-image-4.jpg"
                className="h-full w-full bg-cover"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <button className="bottom-3 right-0 absolute bg-gray rounded-full h-10 w-10 text-white flex justify-center items-center">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
