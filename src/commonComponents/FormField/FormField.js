import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@mui/material/TextField";

const GenerateFormField = (
  type,
  name,
  label,
  variant,
  fullwidth,
  helperText = "",
  required,
  customMargin,
  size,
  multiline = false,
  disabled
) => {
  switch (type) {
    case "input":
      return (
        <Field name={name}>
          {(props) => {
            const { field } = props;
            return (
              <TextField
                required={required}
                id={name}
                label={label}
                fullWidth={fullwidth}
                variant={variant}
                helperText={helperText}
                size={size}
                multiline={multiline}
                rows={multiline ? 4 : 1}
                disabled={disabled}
                {...field}
              />
            );
          }}
        </Field>
      );

    case "checkbox":
      return (
        <label>
          <Field type="checkbox" name={name} style={{ margin: 1 }} />
          {label}
        </label>
      );

    default:
      return (
        <Field name={name}>
          {(props) => {
            const { field } = props;
            return (
              <TextField
                style={{ margin: customMargin ? customMargin : 12 }}
                required={required}
                id={name}
                label={label}
                fullWidth={fullwidth}
                variant={variant}
                helperText={helperText}
                size={size}
                multiline={multiline}
                rows={multiline && 4}
                {...field}
              />
            );
          }}
        </Field>
      );
  }
};
const FormField = ({
  type,
  name,
  label,
  variant,
  fullwidth,
  helperText = "",
  required,
  customMargin,
  size,
  multiline = false,
  disabled,
  showErrorMessage,
}) => {
  return (
    <>
      {GenerateFormField(
        type,
        name,
        label,
        variant,
        fullwidth,
        helperText,
        required,
        customMargin,
        size,
        multiline,
        disabled
      )}
      {showErrorMessage && (
        <div style={{ color: "red", paddingLeft: 15, fontSize: 14 }}>
          <ErrorMessage name={name} />
        </div>
      )}
    </>
  );
};

export default FormField;
