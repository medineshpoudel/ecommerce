import { useNavigate } from "react-router-dom";
import CartView from "../../card/cart/CartView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { removeFromCart } from "../../../features/user/cartSlice";
import { useEffect } from "react";

const CartDetailView = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const dispatch = useDispatch();

  const handleBuy = (productId: string) => {
    navigate(`/product-buy/${productId}`);
  };
  const handleRemoveItemFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <CartView
      productsInCart={cart}
      onBuyProduct={handleBuy}
      onRemoveProductFromCart={handleRemoveItemFromCart}
    />
  );
};

export default CartDetailView;
