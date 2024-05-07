import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductImageViewProps {
  product: any;
}

const ProductImageView = ({ product }: ProductImageViewProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState<string>();

  useEffect(() => {
    if (product) {
      setPreviewImageUrl(product.image_1);
    }
  }, [product]);

  const onProductImageClick = (imageUrl: string) => {
    setPreviewImageUrl(imageUrl);
  };

  return (
    <div className="flex flex-col h-full w-1/2 ">
      <div className="h-1/2  flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300">
        <img src={previewImageUrl} className=" h-full w-full" />
      </div>
      <div className="h-1/2  flex p-2 mt-5">
        <div
          className="h-4/6 w-4/6 border-2 m-1 border-secondary hover:scale-110 transition-transform duration-300"
          onClick={() => onProductImageClick(product?.image_1)}
        >
          <img
            src={`${product?.image_1}`}
            className="h-full w-full bg-opacity-85"
          />
        </div>
        <div
          className="h-4/6 w-4/6 border-2 m-1 border-secondary hover:scale-110 transition-transform duration-300"
          onClick={() => onProductImageClick(product?.image_2)}
        >
          <img src={product?.image_2} className="h-full w-full bg-opacity-85" />
        </div>
        <div
          className="h-4/6 w-4/6 border-2 m-1 border-secondary hover:scale-110 transition-transform duration-300"
          onClick={() => onProductImageClick(product?.image_3)}
        >
          <img src={product?.image_3} className="h-full w-full bg-opacity-85" />
        </div>
      </div>
      <p className="font-semibold text-center m-2 text-secondary">
        Please click over the pictures to view it:
      </p>
    </div>
  );
};

export default ProductImageView;
