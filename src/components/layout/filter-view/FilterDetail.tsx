import useAppQuery from "../../../hooks/useAppQuery";
import ProductDetailSection from "../detail-view/ProductDetailSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const FilterDetail = ({ data }: any) => {
  const { data: bestSellingData } = useAppQuery({ query: "best-selling" });
  const { data: dealOfTheWeek } = useAppQuery({ query: "deal-of-the-week" });
  const { data: newArrivals } = useAppQuery({ query: "new-arrivals" });
  return (
    <>
      <ProductDetailSection
        title="Best selling products"
        products={bestSellingData}
      />
      <ProductDetailSection title="New Arrivals" products={newArrivals} />
      <ProductDetailSection title="Deal of the Week" products={dealOfTheWeek} />
    </>
  );
};

export default FilterDetail;
