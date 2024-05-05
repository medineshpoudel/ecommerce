/* eslint-disable @typescript-eslint/no-unused-vars */
import GridWithForm from "../../../components/grid/GridWithForm";
import useAppQuery from "../../../hooks/useAppQuery";
import ProductFormFields from "./ProductFormFields";
import ProductGridColumns from "./ProductGridColumns";
import ProductValidationSchema from "./ProductValidationSchema";

const Product = () => {
  const { data, isFetching, onActionHandler } = useAppQuery({
    query: "vendor/product",
  });

  return (
    <GridWithForm
      gridColumns={ProductGridColumns}
      formFields={ProductFormFields}
      data={data}
      onActionHandler={onActionHandler}
      validationSchema={ProductValidationSchema}
    />
  );
};

export default Product;
