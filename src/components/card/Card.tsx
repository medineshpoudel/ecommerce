import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductInterface } from "../../interface/ProductInterface";

export interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  onCardClickHandler?: (itemId: string) => void;
  onAddToCart?: (product: ProductInterface) => void;
}

const Card = ({
  item,
  onCardClickHandler = () => {},
  onAddToCart = () => {},
}: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onAddToCart(item);
  };
  const onItemClick = () => {
    onCardClickHandler(item._id);
  };

  return (
    <div className="bg-white rounded-2xl h-52 w-72 md:w-72 md:h-60 p-3 flex justify-between flex-col hover:cursor-pointer">
      <div
        className="flex justify-between h-1/5 z-0 !important"
        onClick={onItemClick}
      >
        <p className="font-bold text-lg">{item.title}</p>
        <p className="bg-gray p-2 text-white font-bold h-10 rounded-lg w-auto  text-center">
          Rs: {item.discountedPrice}
        </p>
      </div>
      <div className="h-4/6 relative z-0 !important" onClick={onItemClick}>
        <img
          src={item.image_1}
          className="h-full w-full bg-cover"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <button
          onClick={addToCart}
          className="bottom-3 right-0 absolute bg-gray rounded-full h-10 w-10 text-white flex justify-center items-center z-10 !important"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Card;
