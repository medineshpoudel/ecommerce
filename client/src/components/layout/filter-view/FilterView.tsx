/* eslint-disable @typescript-eslint/no-unused-vars */
import useAppQuery from "../../../hooks/useAppQuery";
import SearchBar from "../../search-bar/SearchBar";
import ProductDetailSection from "../detail-view/ProductDetailSection";

const FilterView = () => {
  const { data, isFetching, onActionHandler } = useAppQuery({
    query: "product-all",
  });

  return (
    <div className="filter-view p-5">
      <SearchBar />
      {isFetching ? (
        <div>Loading....</div>
      ) : (
        <>
          <ProductDetailSection title="Best selling products" products={data} />
          <ProductDetailSection title="Featured Product" products={data} />
          <ProductDetailSection title="Deal of the Week" products={data} />
        </>
      )}
    </div>
  );
};

export default FilterView;
