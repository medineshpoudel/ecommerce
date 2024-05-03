import GridWithForm from "../../../components/grid/GridWithForm";

const cols = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" },
];

const gridData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

const Product = () => {
  return (
    <GridWithForm
      gridColumns={cols}
      data={gridData}
      onActionHandler={() => {}}
    />
  );
};

export default Product;
