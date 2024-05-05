/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Button from "../../button/Button";
import ProductDetail from "./ProductDetail";
import ProductImageView from "./ProductImageView";
import useAppQuery from "../../../hooks/useAppQuery";
import { ActionHandlerActions } from "../../../constants/constants";

export interface ProductDetailProps {
  product: any[];
}

const DummyProduct = {
  _image_1: "/public/test-image.png",
  _image_2: "/public/test-image-5.jpeg",
  _image_3: "/public/test-image-6.jpeg",
};

const ProductViewCorners = () => (
  <>
    <div className="absolute h-24 w-24 bottom-14 left-32 overflow-hidden z-10">
      <div
        className=" bg-primary h-full w-full z-10"
        style={{ clipPath: "circle(96.3% at 1% 99%)" }}
      ></div>
    </div>
    <div className="absolute h-24 w-24 top-14 right-32 overflow-hidden z-10">
      <div
        className=" bg-primary h-full w-full z-10"
        style={{ clipPath: "circle(96.3% at 98% 3%)" }}
      ></div>
    </div>
  </>
);

const ProductDetailView = ({ product = DummyProduct }: any) => {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isFetching, onActionHandler } = useAppQuery({
    query: `product-order/${id}`,
  });

  const onPurchage = () => {
    onActionHandler({ action: ActionHandlerActions.Add, item: data });
  };

  return (
    <div className="flex justify-center items-center h-full relative overflow-hidden">
      <ProductViewCorners />
      <div className="h-5/6 w-5/6  shadow-lg flex">
        <ProductImageView product={product} />
        <div className="h-full w-1/2 product-detail-right p-2">
          <ProductDetail product={data ?? {}} />
          <div className="flex w-full justify-center">
            <Button
              text="Purchage"
              onClick={onPurchage}
              style="w-96 items-center"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
