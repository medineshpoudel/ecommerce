import { useNavigate } from "react-router-dom";
import { ProductInterface } from "../../../interface/ProductInterface";
import Button from "../../button/Button";
import DetailCard from "../DetailCard";
import CartCard from "./CartCard";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <DetailCard>
      {!productsInCart.length && (
        <div className=" w-full  h-full m-10">
          <span className="text-red font-bold text-3xl mr-3">
            No Products Added in Cart
          </span>
          <Button onClick={handleGoBack} text="Go Home" />
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
