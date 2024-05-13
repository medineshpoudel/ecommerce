import ProductDetailSection from "../detail-view/ProductDetailSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilterDetail = ({ data }: any) => {
  return (
    <>
      <ProductDetailSection title="Best selling products" products={data} />
      <ProductDetailSection title="Featured Product" products={data} />
      <ProductDetailSection title="Deal of the Week" products={data} />
    </>
  );
};

export default FilterDetail;
