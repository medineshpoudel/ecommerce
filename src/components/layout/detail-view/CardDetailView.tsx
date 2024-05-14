import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../app/store";
import { removeFromCart } from "../../../features/user/cartSlice";
import CartView from "../../card/cart/CartView";

const CartDetailView = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const dispatch = useDispatch();

  const handleBuy = (productId: string) => {
    console.log(productId);
    navigate(`/product-detail/${productId}`);
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
