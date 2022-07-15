import FormCheckbox from "@components/FormCheckbox";
import { FormContainer } from "@components/FormContainer";
import FormDatePicker from "@components/FormDatePicker";
import FormInput from "@components/FormInput";
import FormSelect from "@components/FormSelect";
import { Box, Grid, Button, styled } from "@mui/material";
import React from "react";
import * as Yup from "yup";

const CustomGrid = styled(Grid)`
  margin-bottom: 16px;
`;

const dataProfile = {
  firstName: "Test",
  lastName: "Test",
  gender: "male",
  email: "test@gmail.com",
  birthday: new Date(),
  startDate: new Date(),
  customField1: "Test custom field 1",
  customField2: "Test custom field 2",
  removeRecord: false,
};

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  birthday: null,
  startDate: null,
  customField1: "",
  customField2: "",
  removeRecord: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Wrong format")
    .required("Required field"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Wrong format")
    .required("Required field"),
  email: Yup.string().email("Wrong format"),
  gender: Yup.string().required(),
  startDate: Yup.date(),
  birthday: Yup.date(),
});

const ProfileForm = () => {
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <FormContainer
      initialValues={dataProfile}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleSubmit, setValues, errors, setTouched }) => {
        console.log(errors);
        const handleDelete = () => {
          setValues(initialValues);
          setTouched({});
        };
        return (
          <Box mt={4.5}>
            <Grid container spacing={2}>
              <CustomGrid item xs={12} sm={6}>
                <FormInput label="First name" name={"firstName"} />
              </CustomGrid>
              <CustomGrid item xs={12} sm={6}>
                <FormInput label="Last name" name={"lastName"} />
              </CustomGrid>
              <CustomGrid item xs={12} sm={6}>
                <FormSelect label="Select gender" name={"gender"} />
              </CustomGrid>
              <CustomGrid item xs={12} sm={6}>
                <FormInput label="Corporate email" name="email" />
              </CustomGrid>
              <CustomGrid item xs={12} sm={6}>
                <FormDatePicker label="Birthday date" name="birthday" />
              </CustomGrid>
              <CustomGrid item xs={12} sm={6}>
                <FormDatePicker label="Start date" name="startDate" />
              </CustomGrid>
              <CustomGrid item xs={12}>
                <FormInput label="Custom field 1" name="customField1" />
              </CustomGrid>
              <CustomGrid item xs={12}>
                <FormInput label="Custom field 2" name="customField2" />
              </CustomGrid>
            </Grid>
            <Box>
              <FormCheckbox label={"Remove this record"} name="removeRecord" />
            </Box>
            <Box mt={7} textAlign="right">
              <Button variant="outlined" onClick={() => setValues(dataProfile)}>
                Cancel
              </Button>
              {values?.removeRecord ? (
                <Button variant="contained" onClick={handleDelete}>
                  Confirm & delete
                </Button>
              ) : (
                <Button variant="contained" onClick={() => handleSubmit()}>
                  Save change
                </Button>
              )}
            </Box>
          </Box>
        );
      }}
    </FormContainer>
  );
};

export default ProfileForm;
