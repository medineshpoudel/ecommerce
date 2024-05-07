/* eslint-disable @typescript-eslint/no-unused-vars */
import GridWithForm from "../../../../components/grid/GridWithForm";
import useAppQuery from "../../../../hooks/useAppQuery";
import ProductOrderFormFields from "./ProductOrderFormFields";
import ProductOrderGridColumns from "./ProductOrderGridColumns";
import ProductOrderValidationSchema from "./ProductOrderValidationSchema";

const ProductOrders = () => {
  const { data, onActionHandler } = useAppQuery({
    query: "vendor//product-order",
  });

  return (
    <GridWithForm
      gridColumns={ProductOrderGridColumns}
      formFields={ProductOrderFormFields}
      data={data}
      onActionHandler={onActionHandler}
      validationSchema={ProductOrderValidationSchema}
    />
  );
};

export default ProductOrders;
