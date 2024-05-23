import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../../../../app/store";
import { ActionHandlerActions } from "../../../constants/constants";
import { ToastMessage } from "../../../constants/staticList";
import useAppQuery from "../../../hooks/useAppQuery";
import ProductOrderCard from "../../card/product/ProductOrderCard";

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
