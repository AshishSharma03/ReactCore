import CBox from "components/CustomBox";
import React from "react";
import { Grid,Container} from "@mui/material";
import CTypography from "components/CustomTypography";
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";


function IconCard() {
  return (
    <>
      <CBox bgColor="black" pb={10}>
        <Container>
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            px={{ xl: 20 }}
            p={8}
          >
            <CTypography variant="h1">Marketing Your Home</CTypography>
            <CTypography variant="body1" textAlign="center" pt={4}>
              {" "}
              The sale of a significant home is truly noteworthy. To represent a
              home of distinction requires highly-qualified real estate
              professionals with global reach and local expertise.
            </CTypography>
          </Grid>
          <Grid container>
            <Grid item xl={4} xs={12} md={6}>
              <DefaultInfoCard
                icon="public"
                title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes"
              />
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <DefaultInfoCard
                icon="public"
                title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes"
              />
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <DefaultInfoCard
                icon="public"
                title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes"
              />
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <DefaultInfoCard
                icon="public"
                title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes"
              />
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <DefaultInfoCard
                icon="public"
                title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes"
              />
            </Grid>
            <Grid item xl={4} xs={12} md={6}>
              <DefaultInfoCard
                icon="public"
                title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes"
              />
            </Grid>
          </Grid>
        </Container>
      </CBox>
    </>
  );
}

export default IconCard;
