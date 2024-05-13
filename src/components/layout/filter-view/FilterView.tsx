/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import useAppQuery from "../../../hooks/useAppQuery";
import SearchBar from "../../search-bar/SearchBar";
import ProductDetailSection from "../detail-view/ProductDetailSection";
import { RootState } from "../../../../app/store";

const FilterView = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { data, isFetching } = useAppQuery({
    query: "product-all",
  });

  return (
    <div className="filter-view p-5">
      <SearchBar productsInCart={cart} />
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
