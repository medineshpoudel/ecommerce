import FilterView from "../layout/filter-view/FilterView";
import CollectionFilterDetail from "./CollectionFilterDetail";

const NewCollection = () => {
  return (
    <div className="mt-5 p-2 h-auto flex flex-col bg-secondary">
      <div className="flex flex-col  justify-center items-center gap-2">
        <p className="font-bold text-3xl ">OUR NEW COLLECTION</p>
        <p>
          Discover the latest collections at Godam, where new arrivals are
          always just a click away.
        </p>
      </div>
      <div className="w-auto flex justify-evenly mt-3">
        <FilterView showSearchBar={false}>
          <CollectionFilterDetail />
        </FilterView>
      </div>
    </div>
  );
};

export default NewCollection;
