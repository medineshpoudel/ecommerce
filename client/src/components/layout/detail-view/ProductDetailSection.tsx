/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Card from "../../card/Card";

export interface DetailSectionProps {
  title: string;
  products: Array<any>;
}

const ProductDetailSection = ({
  title = "Title",
  products,
}: DetailSectionProps) => {
  const navigate = useNavigate();
  const onDetailViewCardClick = (itemId: any) => {
    navigate(`/product-detail/${itemId}`);
  };

  return (
    <div className="mt-10 shadow-md  bg-lightGray">
      <h2 className="text-2xl text-center font-bold m-3">
        {title.toUpperCase()}
      </h2>
      <div className="flex flex-nowrap space-x-2">
        {products?.map((product) => (
          <Card
            key={product._id}
            item={product}
            onCardClickHandler={onDetailViewCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailSection;
