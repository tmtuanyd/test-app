import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

type InputProp = {
  label: string;
  name: string;
};

const FormInput = ({ label, name }: InputProp) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <TextField
        {...field}
        label={label}
        fullWidth
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error}
      />
    </div>
  );
};

export default FormInput;
