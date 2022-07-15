import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ProfileForm from "./components/ProfileForm";

const CustomPaper = styled(Paper)`
  margin: 24px 48px 38px 146px;
  padding: 36px 48px;
  border-radius: 4px;
  box-shadow: 0 10px 10px 0 rbga(0, 0, 0, 0.1);
  width: 620px;
`;

const CustomTypography = styled(Typography)`
  font-family: NutmegHeadline, serif, sans-serf !important;
`;

const EditProfile = () => {
  return (
    <CustomPaper>
      <Box width="100%">
        <CustomTypography variant="h6" className="semiBold">
          EDIT EMPLOYEE PROFILE
        </CustomTypography>
        <ProfileForm />
      </Box>
    </CustomPaper>
  );
};

export default EditProfile;
