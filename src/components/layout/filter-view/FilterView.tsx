import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import useAppQuery from "../../../hooks/useAppQuery";
import Button from "../../button/Button";
import SearchBar from "../../search-bar/SearchBar";
import FilterBar from "./FilterBar";

export interface FilterViewProps {
  showSearchBar?: boolean;
  children?: ReactNode;
}

const FilterView = ({ showSearchBar = true, children }: FilterViewProps) => {
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

  return (
    <div className="filter-view p-3">
      {showSearchBar && (
        <SearchBar productsInCart={cart} handleSearch={() => {}} />
      )}
      <div className="flex flex-col lg:flex-row">
        <FilterBar onFilter={handleFilterSubmit} onReset={handleReset} />
        <div className="p-4 w-full">
          {data?.length ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.cloneElement(children as React.ReactElement<any>, {
              data: data,
            })
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center h-full w-full font-bold">
              <h2 className="text-primary">The Filtered Data Is Not Found</h2>
              <Button
                text="Reset"
                buttonColor="bg-gray"
                style="bg-gray"
                onClick={handleReset}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterView;
