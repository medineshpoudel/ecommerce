export interface ProductDetailProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <>
      <p className="text-3xl font-semibold z-20 relative">{product.title}</p>
      <div className="p-2 m-2 about-product ">
        <p className="font-bold text-xl">About Product</p>
        <ul className="text-lg list-disc ml-10">
          <li>{product.feature_1}</li>
          <li>{product.feature_2}</li>
          <li>{product.feature_3}</li>
          <li>{product.feature_4}</li>
        </ul>
      </div>
      <div className="m-3 px-5">
        <p>
          Price:
          <span className="line-through font-semibold text-gray text-md m-2">
            Rs {product.actualPrice}
          </span>
          <span className="font-semibold text-primary text-md m-2">
            Rs {product.discountedPrice}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
