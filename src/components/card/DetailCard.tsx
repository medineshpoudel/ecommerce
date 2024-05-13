import { ReactNode } from "react";

export const ProductViewCorners = () => (
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailCard = ({
  children,
  className,
  showCorner = true,
}: {
  children: ReactNode;
  className?: string;
  showCorner?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center items-center h-full w-full  overflow-hidden ${className}`}
    >
      {showCorner && <ProductViewCorners />}
      <div className="h-5/6 w-5/6  shadow-lg flex relative">{children}</div>
    </div>
  );
};

export default DetailCard;
