import CBox from "components/CustomBox";
import React from "react";
import { Grid, Container,Typography ,Box} from "@mui/material";
import CTypography from "components/CustomTypography";
import CButton from "components/CustomButton";

function Introduction() {
  return (
    <>
      <CBox p={5}>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Typography
          p={1}
            component="div"
            >
          <Box sx={{fontWeight:"light",letterSpacing: 6}}>
          WE DESIGN WITH
          </Box>
          </Typography>
            
          <CTypography variant="h1">The Future in Mind</CTypography>
          <CTypography variant="body2" p={{ xl: 4, sm: 0, md: 4 }} py={4}>
            An integrated architecture, design, planning and consulting firm —
            6000+ professionals networked across 48 offices—providing global
            reach with local touch. AGENCY is a collaborative interdisciplinary
            practice engaging contemporary culture through architecture,
            urbanism, and advocacy. Our people collaborate across a network of
            24 offices on three continents.
          </CTypography>
          <CButton
            mt={10}
            variant="outlined"
            color="info"
            sx={{ borderRadius: 0, paddingRight: 5, paddingLeft: 5 }}
          >
            Learn More
          </CButton>
        </Grid>
      </CBox>
    </>
  );
}

export default Introduction;
