/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../features/user/cartSlice";
import { ProductInterface } from "../../interface/ProductInterface";
import Card from "../card/Card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CollectionFilterDetail = ({ data }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDetailViewCardClick = (itemId: any) => {
    navigate(`/product-detail/${itemId}`);
  };

  const handleAddToCart = (product: ProductInterface) => {
    dispatch(addToCart(product));
    toast.success("Added To Cart");
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  min-h-128 ">
        {data?.slice(0, 6).map((product: any) => (
          <Card
            key={product._id}
            item={product}
            onCardClickHandler={onDetailViewCardClick}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Link to="/home" className="text-primary hover:text-primary border-b-2">
        View More
      </Link>
    </div>
  );
};

export default CollectionFilterDetail;
