// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductFormFields: any = [
  {
    name: "title",
    label: "Title",
    required: true,
  },
  {
    name: "actualPrice",
    label: "Actual Price",
    required: true,
  },
  {
    name: "discountedPrice",
    label: "Discounted Price",
    required: true,
  },
  {
    name: "productType",
    label: "ProductType",
    type: "dropdown",
    dropdownList: ["Laptop", "Mobile", "Headphone"],
    required: true,
    default: "Mobile",
  },
  {
    name: "feature_1",
    label: "Feature 1 ",
    required: true,
  },
  {
    name: "feature_2",
    label: "Feature 2 ",
    required: true,
  },
  {
    name: "feature_3",
    label: "Feature 3 ",
    required: true,
  },
  {
    name: "feature_4",
    label: "Feature 3 ",
    required: true,
  },
  {
    name: "image_1",
    label: "Image 1 ",
    type: "file",
    required: true,
  },
  {
    name: "image_2",
    label: "Image 2 ",
    type: "file",
    required: true,
  },
  {
    name: "image_3",
    label: "Image 3 ",
    type: "file",
    required: true,
  },
  {
    name: "image_4",
    label: "Image 4 ",
    type: "file",
    required: true,
  },
];

export default ProductFormFields;
