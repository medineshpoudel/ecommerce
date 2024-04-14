import SearchBar from "../../search-bar/SearchBar";
import ProductDetailSection from "../detail-view/ProductDetailSection";

const ProductDummyData = [
  {
    id: "1",
    title: "Acer Nitro % ",
    actualPrice: 20000,
    discountedPrice: 10000,
    imageUrl: "./test-image.png",
  },
  {
    id: "2",
    title: "Ear Buds Pro ",
    actualPrice: 20000,
    discountedPrice: 10000,
    imageUrl: "./test-image-4.jpg",
  },
  {
    id: "3",
    title: "Sony Dolby Atmos ",
    actualPrice: 20000,
    discountedPrice: 10000,
    imageUrl: "./test-image-5.jpeg",
  },
  {
    id: "4",
    title: "Samsung S24 Ultra ",
    actualPrice: 20000,
    discountedPrice: 10000,
    imageUrl: "./test-image-6.jpeg",
  },
  {
    id: "5",
    title: "Poco X3",
    actualPrice: 20000,
    discountedPrice: 10000,
    imageUrl: "./test-image-5.jpeg",
  },
];

const FilterView = () => {
  return (
    <div className="filter-view p-5">
      <SearchBar />
      <ProductDetailSection
        title="Best selling products"
        products={ProductDummyData}
      />
      <ProductDetailSection
        title="Featured Product"
        products={ProductDummyData}
      />
      <ProductDetailSection
        title="Deal of the Week"
        products={ProductDummyData}
      />
    </div>
  );
};

export default FilterView;
