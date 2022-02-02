import HeroSection from "Customsections/HeroSection.js";
import HeroBackground from "Customsections/HeroSection.js/background";
import React from "react";
import bgImage from 'assets/images/bg-coworking.jpeg';
import CBox from "components/CustomBox";
import { Container, Grid } from "@mui/material";
import CTypography from "components/CustomTypography";
import CInput from "components/CustomInput";
import CButton from "components/CustomButton";
import DefaultNavbar from "Customsections/Navbars/DefaultNavbars";
import routes from "routers/routes";
import { TextField } from "@mui/material";

function ContactUs() {
  return <>
         <DefaultNavbar
        brand="LOGO"
        routes={routes}
        transparent
        light
        />
        <HeroBackground full cover image={bgImage}>
          <CBox textAlign="center">
          <CTypography variant="h3" mb={4} color="white">Contact us</CTypography>
              <CBox 
              bgColor="white"
               borderRadius="xl"
               shadow="xxl"
               p={2}>
            <Container
              >

              <Grid container rowSpacing={2} direction="column" textAlign="center">
                <Grid item  ></Grid>
                <Grid item  ><CInput   
                      label="First Name"
                      // InputLabelProps={{ shrink: true }}
                      fullWidth/></Grid>
                <Grid item 
                ><CInput 
                // variant="standard"
                label="Last Name"
                // InputLabelProps={{ shrink: true }}
                fullWidth/></Grid>
                <Grid item 
                ><CInput 
                // variant="standard"
                label="Email"
                // InputLabelProps={{ shrink: true }}
                fullWidth/></Grid>
                <Grid item 
                >
                    <TextField
                  label="message"
                  multiline
                  fullWidth
                  rows={4}
                  // defaultValue="Default Value"
                />

                </Grid>
                <Grid item m={1}>
                  <CButton
                  color="info">
                    Submit
                  </CButton>
                </Grid>
              </Grid>
            </Container>
                    </CBox>

          </CBox>
          

        </HeroBackground>
        
      </>;
}

export default ContactUs;
