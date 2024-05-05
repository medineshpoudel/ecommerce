import Button from "../button/Button";

export interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  onCardClickHandler: (itemId: string) => void;
}

const Card = ({ item, onCardClickHandler }: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onButtonClick = () => {};

  const onItemClick = () => {
    onCardClickHandler(item._id);
  };
  return (
    <div className="relative flex flex-col space-y-2  w-96 h-100 rounded-md p-2 shadow-xl">
      <img
        src={item.imageUrl}
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
      <Button text="Add to Cart" onClick={onButtonClick} rounded={false} />
    </div>
  );
};

export default Card;
