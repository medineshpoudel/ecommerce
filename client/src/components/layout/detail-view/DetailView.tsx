/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../../card/Card";

export interface DetailSectionProps {
  title: string;
  products: Array<any>;
}

const DetailSection = ({ title = "Title", products }: DetailSectionProps) => {
  const onDetailViewCardClick = (itemId: any) => {
    console.log(itemId);
  };

  return (
    <div className="mt-10 shadow-md  bg-lightGray">
      <h2 className="text-2xl text-center font-bold m-3">
        {title.toUpperCase()}
      </h2>
      <div className="flex flex-nowrap space-x-2">
        {products.map((product) => (
          <Card item={product} onCardClickHandler={onDetailViewCardClick} />
        ))}
      </div>
    </div>
  );
};

export default DetailSection;
