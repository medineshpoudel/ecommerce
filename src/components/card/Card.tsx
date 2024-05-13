import { ProductInterface } from "../../interface/ProductInterface";
import Button from "../button/Button";

export interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  onCardClickHandler: (itemId: string) => void;
  onAddToCart: (product: ProductInterface) => void;
}

const Card = ({ item, onCardClickHandler, onAddToCart }: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = () => {
    onAddToCart(item);
  };
  const onItemClick = () => {
    onCardClickHandler(item._id);
  };
  return (
    <div className="relative flex flex-col space-y-2  w-96 h-100 rounded-md p-2 shadow-xl">
      <img
        src={item.image_1}
        className="w-full h-40  border-b-2 border-primary shrink-0"
      />
      <div className="p-3 items-center">
        <p className="cursor-pointer font-bold mb-2" onClick={onItemClick}>
          {item.title}
        </p>
        <span className="line-through font-semibold text-gray text-md">
          Rs {item.actualPrice}
        </span>
        <br />
        <span className="font-semibold text-primary text-md">
          Rs {item.discountedPrice}
        </span>
      </div>
      <Button text="Add to Cart" onClick={addToCart} rounded={false} />
    </div>
  );
};

export default Card;
