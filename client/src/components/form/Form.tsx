/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../button/Button";

export interface FieldProps {
  name: string;
  type?: string;
  label: string;
  dropdownList?: string[];
  required?: boolean;
  disabled?: boolean;
}

export interface FormProps {
  initialValues?: any;
  formFields: FieldProps[];
  formTitle?: string;
  onSubmit?: any;
  onCancel?: any;
  validationSchema?: object;
}
const mySchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const FormComponent = ({
  initialValues = {},
  formFields,
  formTitle = "Form",
  onSubmit,
  onCancel,
  validationSchema = mySchema,
}: FormProps) => (
  <div className="form-wrapper p-2">
    <div className="form-title">
      <h2 className="text-primary text-3xl font-semibold  m">{formTitle}</h2>
      <i className="fa fa-close" onClick={onCancel} />
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form p-2">
          <div className="form-content">
            {formFields.map((field: any) => (
              <div className="form-field">
                {field.type === "dropdown" ? (
                  <>
                    <label htmlFor={field.name}>
                      {field.label}
                      <span style={{ fontSize: "0.75rem", marginLeft: "5px" }}>
                        {field.required && "(Required)"}
                      </span>
                    </label>
                    <Field
                      as="select"
                      name={field.name}
                      className="field"
                      disable={field.disabled}
                    >
                      {field.dropdownList.map((list: string) => (
                        <option value={list}>{list}</option>
                      ))}
                    </Field>
                    <ErrorMessage
                      className="text-red"
                      name={field.type}
                      component="span"
                    />
                  </>
                ) : (
                  <div>
                    <label htmlFor={field.name} className="font-semibold">
                      {field.label}:
                      <span style={{ fontSize: "0.75rem", marginLeft: "5px" }}>
                        {field.required && "(Required)"}
                      </span>
                    </label>
                    <br />
                    <Field
                      type={field.type ?? "text"}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="field border-2 w-full rounded-md my-2 p-1"
                      disable={field.disabled}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="form-error text-red"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="form-action-wrapper">
            <Button text="Submit" type="submit" disabled={isSubmitting} />

            <Button text="Cancel" buttonColor="bg-gray" onClick={onCancel} />
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;
