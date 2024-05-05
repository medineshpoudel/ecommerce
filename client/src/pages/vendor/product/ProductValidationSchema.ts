import * as Yup from "yup";

export const ProductValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title Must be more than 2 letters!")
    .max(100, "Too Long!")
    .required("Required"),

  actualPrice: Yup.number()
    .min(100, "Price Must be above 100!")
    .max(1000000, "Too Expensive!")
    .required("Required"),

  discountedPrice: Yup.number()
    .min(10, "Price Must be above 10!")
    .max(100000, "Too Expensive!")
    .required("Required"),
});

export default ProductValidationSchema;
