/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { ActionHandlerActions } from "../../constants/constants";
import { ModalContext } from "../../context/ModalProvider";
import FormComponent from "../form/Form";
import Grid from "./Grid";

export interface GridWithFormProps {
  data: any;
  gridColumns: any;
  onActionHandler?: any;
  pageTitle?: string;
  formFields?: any;
  validationSchema?: any;
}

const GridWithForm = ({
  data,
  gridColumns,
  onActionHandler,
  pageTitle = "product",
  formFields,
  validationSchema,
}: GridWithFormProps) => {
  const { setModalState, closeModal } = useContext(ModalContext);

  const onFormSubmit = (dataToAdd: any) => {
    onActionHandler({ action: ActionHandlerActions.Add, item: dataToAdd });
    closeModal();
  };

  const onFormEdit = (dataToEdit: any) => {
    onActionHandler({ action: ActionHandlerActions.Update, item: dataToEdit });
    closeModal();
  };

  const addHandler = () => {
    setModalState({
      title: `Create ${pageTitle}`,
      dialogChildren: (
        <FormComponent
          formFields={formFields}
          validationSchema={validationSchema}
          formTitle={`Create ${pageTitle}`}
          onCancel={() => {
            closeModal();
          }}
          onSubmit={onFormSubmit}
          className="bg-white w-1/2 h-3/4"
          formClassName="h-5/6 overflow-auto"
        />
      ),
    });
  };

  const editHandler = (formData: any) => {
    setModalState({
      title: `Create ${pageTitle}`,
      dialogChildren: (
        <FormComponent
          initialValues={formData}
          formFields={formFields}
          formTitle={`Update ${pageTitle}`}
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

  const deleteHandler = (dataToDelete: any) => {
    onActionHandler({
      action: ActionHandlerActions.Delete,
      item: dataToDelete,
    });
  };

  return (
    <Grid
      data={data}
      gridColumns={gridColumns}
      onDelete={deleteHandler}
      onEdit={editHandler}
      onAdd={addHandler}
    />
  );
};

export default GridWithForm;
