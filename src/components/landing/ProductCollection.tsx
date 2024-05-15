import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductCollection = () => {
  return (
    <div className="bg-white rounded-2xl h-52 w-52 md:w-72 md:h-60 p-3 flex justify-between flex-col">
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
  );
};

export default ProductCollection;
