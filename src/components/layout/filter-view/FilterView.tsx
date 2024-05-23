import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import useAppQuery from "../../../hooks/useAppQuery";
import Button from "../../button/Button";
import CollectionFilterDetail from "../../landing/CollectionFilterDetail";
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

  const handleSearch = (title: string) => {
    title ? setQueryUrl(`?title=${title}`) : setQueryUrl(undefined);
  };

  return (
    <div className="filter-view p-3">
      {showSearchBar && (
        <SearchBar productsInCart={cart} handleSearch={handleSearch} />
      )}
      <div className="flex flex-col lg:flex-row">
        <FilterBar onFilter={handleFilterSubmit} onReset={handleReset} />
        <div className="p-4 w-full">
          {data?.length && !queryUrl ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.cloneElement(children as React.ReactElement<any>, {
              data: data,
            })
          ) : data?.length && queryUrl ? (
            <CollectionFilterDetail data={data} showViewMore={false} />
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center h-auto w-full font-bold">
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
