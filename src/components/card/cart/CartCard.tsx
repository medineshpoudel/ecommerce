import { ProductInterface } from "../../../interface/ProductInterface";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

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
    <div className="w-full h-10 flex gap-1">
      <Link to={`/product-detail/${product._id}`} className="flex-1 font-bold">
        {product.title}
      </Link>
      <Button onClick={() => onCartItemBuy(product?._id)} text="Buy" />
      <Button
        text="Remove"
        style="bg-red"
        onClick={() => onCartItemRemove(product?._id)}
      />
    </div>
  );
};

export default CartCard;
