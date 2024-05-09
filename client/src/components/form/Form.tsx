/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../button/Button";
import axios from "axios";
import { toast } from "react-toastify";

export interface FieldProps {
  name: string;
  type?: string;
  label: string;
  dropdownList?: string[];
  required?: boolean;
  disabled?: boolean;
  default?: any;
}

export interface FormProps {
  initialValues?: any;
  formFields: FieldProps[];
  formTitle?: string;
  onSubmit?: any;
  onCancel?: () => void;
  validationSchema?: object;
  className?: string;
  formClassName?: string;
}

const handleCloudinaryImageUpload = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ydozer4i");
  try {
    console.log(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_PRESET
      }/image/upload`
    );
    const result = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_PRESET
      }/image/upload`,
      formData
    );
    return result.data.url;
  } catch {
    toast.error("error");
  }
};

const ImageFields: Array<{ name: string; file: any }> = [];

const FormComponent = ({
  initialValues = {},
  formFields,
  formTitle = "Form",
  onSubmit,
  onCancel,
  validationSchema,
  className,
  formClassName,
}: FormProps) => (
  <div className={`form-wrapper p-2 ${className} `}>
    <div className="form-title">
      <h2 className="text-primary text-3xl font-semibold m">{formTitle}</h2>
      <i className="fa fa-close" onClick={onCancel} />
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const uploadPromises = ImageFields.map((image) => {
          return handleCloudinaryImageUpload(image.file).then((response) => {
            return { name: image.name, url: response };
          });
        });

        Promise.all(uploadPromises).then((responses) => {
          const updatedValues = { ...values };
          responses.forEach((response) => {
            updatedValues[response.name] = response.url;
          });

          console.log(updatedValues);
          onSubmit(updatedValues);
          setSubmitting(false);
        });

        // Clear ImageFields after processing
        ImageFields.length = 0;
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form
          className={`form p-2 ${formClassName}`}
          encType="multipart/form-data"
        >
          <div className="form-content">
            {formFields.map((field: any) => (
              <div className="form-field" key={field.name}>
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
                      className="field border-2 w-full rounded-md my-2 p-1"
                      disabled={field.disabled}
                      key={field.name}
                      default={field.default}
                    >
                      {field.dropdownList.map((list: string) => (
                        <option value={list} key={list}>
                          {list}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      className="text-red"
                      name={field.name}
                      component="span"
                    />
                  </>
                ) : (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="font-semibold">
                      {field.label}:
                      <span style={{ fontSize: "0.75rem", marginLeft: "5px" }}>
                        {field.required && "(Required)"}
                      </span>
                    </label>
                    <br />
                    {field.type === "file" ? (
                      <input
                        type="file"
                        onChange={(event: any) => {
                          ImageFields.push({
                            name: field.name,
                            file: event.currentTarget.files[0],
                          });
                          setFieldValue(
                            field.name,
                            event.currentTarget.files[0]
                          );
                        }}
                        placeholder={field.placeholder}
                        className="field border-2 w-full rounded-md my-2 p-1"
                        disabled={field.disabled}
                        key={field.name}
                      />
                    ) : (
                      <Field
                        type={field.type ?? "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="field border-2 w-full rounded-md my-2 p-1"
                        disabled={field.disabled}
                        key={field.name}
                      />
                    )}

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
