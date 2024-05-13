import DetailCard from "../DetailCard";
import { ProductInterface } from "../../../interface/ProductInterface";
import CartCard from "./CartCard";
import Button from "../../button/Button";
import { useNavigate } from "react-router-dom";

export interface CardViewProps {
  productsInCart: Array<ProductInterface>;
  onBuyProduct: (productId: string) => void;
  onRemoveProductFromCart: (productId: string) => void;
}

const CartView = ({
  productsInCart,
  onBuyProduct,
  onRemoveProductFromCart,
}: CardViewProps) => {
  const navigate = useNavigate();
  return (
    <DetailCard>
      {!productsInCart.length && (
        <div className=" absolute left-80 top-10 ">
          <span className="text-red font-bold text-3xl mr-3">
            No Products Added in Cart
          </span>
          <Button onClick={() => navigate("/home")} text="Go Back" />
        </div>
      )}
      <div className="h-full w-full z-50 flex  flex-col gap-5 p-5 pl-10 overflow-auto">
        {productsInCart.map((product) => (
          <CartCard
            product={product}
            onCartItemBuy={onBuyProduct}
            onCartItemRemove={onRemoveProductFromCart}
          />
        ))}
      </div>
    </DetailCard>
  );
};

export default CartView;
