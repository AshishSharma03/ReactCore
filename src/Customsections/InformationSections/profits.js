import React from 'react';
import CBox from "components/CustomBox";
import { Grid,Container} from "@mui/material";
import CTypography from "components/CustomTypography";
import CButton from "components/CustomButton";
function Profits() {
  return <>
   <CBox bgColor="white">
        <Container>
          <Grid container>
            <Grid item xl={6} lg={6} p={5} sx={{textAlign:"center"}}>
              <CTypography variant="h1">A</CTypography>
              <CTypography variant="h4">Easy to  Use Tools</CTypography>
              <CTypography variant="body1" pt={2}>Strategic planning is an organization’s process for defining their strategy so that they can accomplish specific goals and objectives. We offer affordable custom website design done by professionals.</CTypography>
              <CButton  sx={{color:"#000000"}}>Read More</CButton>
            </Grid>
            <Grid item xl={6} lg={6} p={5} sx={{textAlign:"center"}}>
              <CTypography variant="h1">B</CTypography>
              <CTypography variant="h4">Special  Discounts</CTypography>
              <CTypography variant="body1" pt={2}>We can help you to boost engagement with your visitors by ensuring that people have access to the information that they. A business concept is a statement that describes the reach and reason of existence of a given business idea.</CTypography>
              <CButton sx={{color:"#000000"}}>Read More</CButton>
            </Grid>
          </Grid>
        </Container>
      </CBox>
  </>;
}

export default Profits;
