/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../button/Button";
import ProductDetail from "./ProductDetail";
import ProductImageView from "./ProductImageView";
import useAppQuery from "../../../hooks/useAppQuery";
import DetailCard from "../DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { placeOrder } from "../../../features/user/orderSlice";
import { useState } from "react";

export interface ProductDetailProps {
  product: any[];
}

const ProductDetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useAppQuery({
    query: `product-order/${id}`,
  });

  const { data: productVendor } = useAppQuery({
    query: `product-vendor/${data?.createdBy}`,
  });

  const onPurchage = () => {
    const orderDetail = {
      product: { ...data, quantity },
      vendor: productVendor,
    };
    dispatch(placeOrder(orderDetail));
    navigate(`/product-order/${data._id}`);
  };

  const handleQuantityChange = (quantity: number) => {
    if (quantity !== 0) setQuantity(quantity);
  };

  return (
    <>
      <DetailCard>
        <ProductImageView product={data} />
        <div className="h-full w-1/2 product-detail-right p-2">
          <ProductDetail product={data} handleQuantity={handleQuantityChange} />
          <div className="flex w-full justify-center">
            <Button
              text="Purchage"
              onClick={onPurchage}
              style="w-96 items-center"
              disabled={data.stock === 0}
            ></Button>
          </div>
        </div>
      </DetailCard>
    </>
  );
};

export default ProductDetailView;
