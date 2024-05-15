/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../../../../app/store";
import { addToCart } from "../../../features/user/cartSlice";
import { ProductInterface } from "../../../interface/ProductInterface";
import Card from "../../card/Card";

export interface DetailSectionProps {
  title: string;
  products: Array<any>;
}

const ProductDetailSection = ({
  title = "Title",
  products,
}: DetailSectionProps) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const navigate = useNavigate();
  const onDetailViewCardClick = (itemId: any) => {
    navigate(`/product-detail/${itemId}`);
  };

  const handleAddToCart = (product: ProductInterface) => {
    dispatch(addToCart(product));
    toast.success("Added To Cart");
  };

  return (
    <div className="shadow-md bg-lightGray">
      <h2 className="text-2xl text-center font-bold m-3">
        {title.toUpperCase()}
      </h2>
      <div className="flex flex-nowrap space-x-2">
        {products?.map((product) => (
          <Card
            key={product._id}
            item={product}
            onCardClickHandler={onDetailViewCardClick}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailSection;
