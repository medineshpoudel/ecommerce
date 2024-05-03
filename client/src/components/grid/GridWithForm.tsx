/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "./Grid";

export interface GridWithFormProps {
  data: any;
  gridColumns: any;
  onActionHandler?: any;
}

const GridWithForm = ({
  data,
  gridColumns,
  onActionHandler,
}: GridWithFormProps) => {
  const deleteHandler = () => {
    onActionHandler();
  };

  const editHandler = () => {
    onActionHandler();
  };

  const addHandler = () => {
    onActionHandler();
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
