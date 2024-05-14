import { Link } from "react-router-dom";
import { ProductInterface } from "../../../interface/ProductInterface";
import Button from "../../button/Button";

export interface CartCardProps {
  product: ProductInterface;
  onCartItemBuy: (productId: string) => void;
  onCartItemRemove: (productId: string) => void;
}

const CartCard = ({
  product,
  onCartItemBuy,
  onCartItemRemove,
}: CartCardProps) => {
  return (
    <div className="w-full h-24 bg-white shadow-md rounded-lg p-4 flex items-center justify-between ">
      <div className="flex-1">
        <Link
          to={`/product-detail/${product._id}`}
          className="font-bold text-lg text-gray-800 hover:text-blue-600 transition-colors"
        >
          {product.title}
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={() => onCartItemBuy(product?._id)} text="Buy" />
        <Button
          text="Remove"
          style="bg-red-500 text-white"
          onClick={() => onCartItemRemove(product?._id)}
        />
      </div>
    </div>
  );
};

export default CartCard;
