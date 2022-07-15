import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import React from "react";

type DatePickerProps = {
  label: string;
  name: string;
};

const FormDatePicker = ({ label, name }: DatePickerProps) => {
  const [{ value }, meta, { setValue }] = useField(name);
  return (
    <DatePicker
      label={label}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          error={Boolean(meta.error && meta.touched)}
        />
      )}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default FormDatePicker;
