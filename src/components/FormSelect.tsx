import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useField } from "formik";
import React from "react";

type SelectProp = {
  label: string;
  name: string;
};

const FormSelect = ({ label, name }: SelectProp) => {
  const [field, meta] = useField(name);
  return (
    <FormControl fullWidth error={Boolean(meta.touched && meta.error)}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label}>
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FormSelect;
