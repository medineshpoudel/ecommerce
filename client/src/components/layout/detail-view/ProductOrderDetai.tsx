import { useSelector } from "react-redux";
import ProductOrderCard from "../../card/product/ProductOrderCard";
import { RootState } from "../../../../app/store";
import useAppQuery from "../../../hooks/useAppQuery";
import { ActionHandlerActions } from "../../../constants/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../../../constants/staticList";

const ProductOrderDetail = () => {
  const navigate = useNavigate();
  const order = useSelector((state: RootState) => state.order);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, onActionHandler } = useAppQuery({
    query: `product-order/${order[0]?.product?.productId}`,
  });

  const handleOrder = async () => {
    try {
      onActionHandler({
        action: ActionHandlerActions.Add,
        item: {
          ...data,
          quantity: order[0]?.product.quantity,
          totalAmount: order[0]?.product.totalAmount,
        },
      });
      toast.success(ToastMessage.OrderPlacedSuccess);
      navigate("/home");
    } catch (error) {
      toast.error("error placing order");
    }
  };

  return (
    <ProductOrderCard
      product={order[0].product}
      vendor={order[0].vendor}
      handleConfirmOrder={handleOrder}
    />
  );
};

export default ProductOrderDetail;
