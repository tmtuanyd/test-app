import { Box, Checkbox, styled, Typography } from "@mui/material";
import { useField } from "formik";
import React from "react";

type CheckboxProps = {
  name: string;
  label: string;
};

const CustomTypography = styled(Typography)`
  margin-left: 2px;
`;

const FormCheckbox = ({ label, name }: CheckboxProps) => {
  const [field] = useField(name);

  return (
    <Box display="flex" alignItems="center">
      <Checkbox {...field} checked={field.value} />
      <CustomTypography className="semiBold">{label}</CustomTypography>
    </Box>
  );
};

export default FormCheckbox;
