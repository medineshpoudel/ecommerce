import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import useAppQuery from "../../../hooks/useAppQuery";
import Button from "../../button/Button";
import SearchBar from "../../search-bar/SearchBar";
import FilterBar from "./FilterBar";
import FilterDetail from "./FilterDetail";

const FilterView = () => {
  const [queryUrl, setQueryUrl] = useState<string | undefined>(undefined);
  const cart = useSelector((state: RootState) => state.cart);
  const { data } = useAppQuery({
    query: queryUrl ? `product-all${queryUrl}` : "product-all",
  });

  const handleFilterSubmit = (filterQuery: string) => {
    setQueryUrl(filterQuery);
  };

  const handleReset = () => {
    setQueryUrl(undefined);
  };

  console.log(queryUrl);

  return (
    <div className="filter-view p-3">
      <SearchBar productsInCart={cart} handleSearch={() => {}} />
      <div className="flex flex-col lg:flex-row">
        <FilterBar onFilter={handleFilterSubmit} onReset={handleReset} />
        <div className="p-4 w-full">
          {data?.length ? (
            <FilterDetail data={data} />
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center h-full w-full font-bold">
              <h2 className="text-red">The Filtered Data Is Not Found</h2>
              <Button text="Reset" style="bg-red" onClick={handleReset} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterView;
