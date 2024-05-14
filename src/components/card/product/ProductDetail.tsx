import { useState } from "react";

export interface ProductDetailProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
  handleQuantity?: (quantity: number) => void;
}

const ProductDetail = ({
  product,
  handleQuantity = () => {},
}: ProductDetailProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [error, setError] = useState<string>();

  const handleAdd = () => {
    setError("");
    setQuantity((prevState) => {
      if (prevState < product?.stock) {
        handleQuantity(prevState + 1);
        return prevState + 1;
      }
      setError("There are not enough products in stock");
      return prevState;
    });
  };

  const handleReduce = () => {
    setError("");
    setQuantity((prevState) => {
      if (prevState > 0) {
        handleQuantity(prevState - 1);
        return prevState - 1;
      }
      return prevState;
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white  rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h1 className="text-3xl font-semibold mb-2">{product?.title}</h1>
        <div className="mb-4 bg-gray-100 p-4 rounded-lg">
          <p className="font-bold text-xl mb-2">About Product</p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <span className="font-semibold">Feature 1:</span>{" "}
              {product?.feature_1}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Feature 2:</span>{" "}
              {product?.feature_2}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Feature 3:</span>{" "}
              {product?.feature_3}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Feature 4:</span>{" "}
              {product?.feature_4}
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <p>
            Price:
            <span className="line-through text-gray-600 mr-2">
              Rs {product?.actualPrice}
            </span>
            <span className="font-semibold text-primary">
              Rs {product?.discountedPrice}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-10">
          <>
            <p>
              <span className="font-semibold text-gray-600 mr-2">
                In Stock:
              </span>
              {product?.stock}
            </p>
          </>
          <>
            <button
              className="px-3 py-2 bg-primary text-white rounded-l"
              onClick={handleReduce}
            >
              -
            </button>
            <span className="px-3 py-2 bg-gray-200">{quantity}</span>
            <button
              className="px-3 py-2 bg-primary text-white rounded-r"
              onClick={handleAdd}
            >
              +
            </button>
          </>
        </div>
        {error && <span className="text-red font-semibold ml-4">{error}</span>}
      </div>
    </div>
  );
};

export default ProductDetail;
