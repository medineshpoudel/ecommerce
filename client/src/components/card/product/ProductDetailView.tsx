/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Button from "../../button/Button";
import ProductDetail from "./ProductDetail";
import ProductImageView from "./ProductImageView";
import useAppQuery from "../../../hooks/useAppQuery";
import { ActionHandlerActions } from "../../../constants/constants";
import DetailCard from "../DetailCard";

export interface ProductDetailProps {
  product: any[];
}

const ProductDetailView = () => {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, onActionHandler } = useAppQuery({
    query: `product-order/${id}`,
  });

  const onPurchage = () => {
    onActionHandler({ action: ActionHandlerActions.Add, item: data });
  };

  return (
    <>
      <DetailCard>
        <ProductImageView product={data} />
        <div className="h-full w-1/2 product-detail-right p-2">
          <ProductDetail product={data} />
          <div className="flex w-full justify-center">
            <Button
              text="Purchage"
              onClick={onPurchage}
              style="w-96 items-center"
            ></Button>
          </div>
        </div>
      </DetailCard>
    </>
  );
};

export default ProductDetailView;
