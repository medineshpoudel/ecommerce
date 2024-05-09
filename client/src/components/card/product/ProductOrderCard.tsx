/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../button/Button";
import DetailCard from "../DetailCard";

const UserProductOrderDetail = ({
  className,
  product,
  handleConfirmOrder,
}: {
  className: string;
  product: any;
  handleConfirmOrder: () => void;
}) => {
  return (
    <div className={className}>
      <div className="w-3/5 h-4/5">
        <h2 className="text-xl font-bold my-3 text-primary">Product Detail</h2>
        <div className="flex-2 bg-primary">
          <img src={product?.image} className="h-40 w-full" />
        </div>
        <div className="flex-1  p-2">
          <h2 className="text-lg font-bold mb-4">
            <span className="font-bold">Product:</span> {product?.title}
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Price: </span>
            {product?.price}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Quantity: </span> {product?.quantity}
          </p>
          <hr />
          <p className="text-gray-600">
            <span className="font-bold text-primary">Total Amount: </span>Rs
            {product?.totalAmount}
          </p>
        </div>
        <Button text="Confirm Order" onClick={handleConfirmOrder} />
      </div>
    </div>
  );
};

const ProductOrderVendorDetail = ({
  className,
  vendor,
}: {
  className: string;
  vendor?: any;
}) => {
  return (
    <div className={className}>
      <div className="w-3/5 h-4/5">
        <h2 className="text-xl font-bold my-3 text-primary">Vendor Detail</h2>

        <div className="flex-1  p-2">
          <h2 className="text-lg font-bold mb-4">
            <span className="font-bold">Vendor: </span>
            {vendor?.name.toUpperCase()}
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Phone no: </span> {vendor?.phone}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Location: </span> {vendor?.location}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductOrderCard = ({ product, vendor, handleConfirmOrder }: any) => {
  const handleOrder = () => {
    handleConfirmOrder(product?.productId);
  };

  return (
    <DetailCard showCorner={false} className="flex-col">
      <UserProductOrderDetail
        product={product}
        handleConfirmOrder={handleOrder}
        className="h-full flex-1 p-2 flex justify-center items-center border-r-2"
      />
      <ProductOrderVendorDetail
        vendor={vendor}
        className="h-full flex-1 p-2 flex justify-center items-center "
      />
    </DetailCard>
  );
};

export default ProductOrderCard;
