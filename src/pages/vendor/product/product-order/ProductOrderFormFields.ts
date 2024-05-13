// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductOrderFormFields: any = [
  {
    name: "status",
    label: "Status",
    type: "dropdown",
    dropdownList: ["Proceed To Delivery", "Reject", "Pending"],

    required: true,
  },
];

export default ProductOrderFormFields;
