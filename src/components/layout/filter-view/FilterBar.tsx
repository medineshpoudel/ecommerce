import { useEffect, useState } from "react";
import Button from "../../button/Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilterBar = ({ onFilter, onReset }: any) => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [queryUrl, setQueryUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (
      category !== undefined ||
      title !== "" ||
      minPrice !== undefined ||
      maxPrice !== undefined
    ) {
      const params = [];
      if (category !== undefined) {
        params.push(`productType=${category}`);
      }
      if (title !== "") {
        params.push(`title=${title}`);
      }
      if (minPrice !== undefined) {
        params.push(`discountedPrice[gte]=${minPrice}`);
      }
      if (maxPrice !== undefined) {
        params.push(`discountedPrice[lte]=${maxPrice}`);
      }
      const url = `?${params.join("&&")}`;
      setQueryUrl(url);
    } else {
      setQueryUrl(undefined);
    }
  }, [title, category, minPrice, maxPrice]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleFilterSubmit = () => {
    onFilter(queryUrl);
  };

  const handleReset = () => {
    setCategory(undefined);
    setTitle("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    onReset();
  };

  return (
    <div className="md:block bg-gray-100 p-4 lg:w-1/3 xl:w-1/4 shadow-2xl h-bodyHeight bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Filter By</h2>
        <input
          className="field border w-full border-slate-100 rounded-md my-2 p-1"
          type="text"
          placeholder="Search By Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category || ""}
          onChange={handleCategoryChange}
          className="field border w-full border-slate-100 rounded-md my-2 p-1"
        >
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="minPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Min Price
        </label>
        <input
          id="minPrice"
          type="number"
          min="0"
          step="50"
          placeholder="Min Price"
          value={minPrice || ""}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          className="field border w-full border-slate-100 rounded-md my-2 p-1"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="maxPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Max Price
        </label>
        <input
          id="maxPrice"
          type="number"
          min="0"
          step="50"
          placeholder="Max Price"
          value={maxPrice || ""}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="field border w-full border-slate-100 rounded-md my-2 p-1"
        />
      </div>
      <div>
        <Button text="Search" style="mt-3 mr-2" onClick={handleFilterSubmit} />
        <Button text="Reset" buttonColor="bg-gray" onClick={handleReset} />
      </div>
    </div>
  );
};

export default FilterBar;
