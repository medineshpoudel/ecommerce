/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import Button from "../button/Button";

export interface GridProps {
  gridColumns: any;
  data: any;
  pagable?: boolean;
  showDeleteButton?: boolean;
  showEditButton?: boolean;
  showAddButton?: boolean;
  onAdd?: (data: any) => void;
  onEdit?: (data: any) => void;
  onDelete?: (data: any) => void;
}

const Grid = ({
  gridColumns,
  data,
  onEdit,
  onDelete,
  onAdd,
  showEditButton = true,
  showDeleteButton = true,
  showAddButton = true,
  pagable = true,
}: GridProps) => {
  const CustomButtonComponent = (props: any) => {
    const data = props.data;
    const handleEdit = () => {
      onEdit && onEdit(data);
    };
    const handleDelete = () => {
      onDelete && onDelete(data);
    };

    return (
      <>
        {showEditButton && onEdit}
        {showEditButton && (
          <button
            onClick={handleEdit}
            className="bg-blue h-8  pt-0 text-white "
          >
            Edit
          </button>
        )}
        {showDeleteButton && (
          <button
            onClick={handleDelete}
            className="bg-red h-8  pt-0 text-white "
          >
            Delete
          </button>
        )}
      </>
    );
  };
  return (
    <div>
      {showAddButton && (
        <div className="m-2 h-headerHeight">
          <Button text="Add New" onClick={onAdd} />
        </div>
      )}

      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 600 }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data}
          columnDefs={[
            ...gridColumns,
            {
              field: "button",
              cellRenderer: CustomButtonComponent,
              width: 200,
            },
          ]}
          pagination={pagable}
        />
      </div>
    </div>
  );
};

export default Grid;
