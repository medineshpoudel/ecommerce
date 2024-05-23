import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  ActionHandlerActions,
  GodamLocalStorage,
} from "../../../constants/constants";
import { ModalContext } from "../../../context/ModalProvider";
import useAppQuery from "../../../hooks/useAppQuery";
import ProductOrderFormFields from "../../../pages/vendor/product/product-order/ProductOrderFormFields";
import ProductOrderCard from "../../card/product/ProductOrderCard";
import FormComponent from "../../form/Form";

const UserProductDetail = () => {
  const { id } = useParams();
  const userRole = localStorage.getItem(GodamLocalStorage.role);
  const { setModalState, closeModal } = useContext(ModalContext);

  const { data, isFetching, onActionHandler } = useAppQuery({
    query: `vendor/product-order/${id}`,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormEdit = (dataToEdit: any) => {
    onActionHandler({ action: ActionHandlerActions.Update, item: dataToEdit });
    closeModal();
  };

  const onEdit = () => {
    setModalState({
      title: `Edit Order`,
      dialogChildren: (
        <FormComponent
          initialValues={data}
          formFields={ProductOrderFormFields}
          formTitle={`Update Product Order`}
          onCancel={() => {
            closeModal();
          }}
          onSubmit={onFormEdit}
          className="bg-white w-1/2 h-3/4"
          formClassName="h-5/6 overflow-auto"
        />
      ),
    });
  };

  const onDelete = () => {
    console.log(id);
  };

  return (
    <>
      {isFetching && <div> Loading....</div>}
      {data && (
        <ProductOrderCard
          product={data}
          showVendorDetail={false}
          showConfirmOder={false}
          showOrderStatus={true}
          showActionButton={userRole === "vendor" ? true : false}
          handleOrderEdit={onEdit}
          handleOrderDelete={onDelete}
        />
      )}
    </>
  );
};

export default UserProductDetail;
