import React from 'react';
import HeroBackground from './background';
import bgImage from "assets/images/bg3.jpg";
import { Container ,Grid} from "@mui/material";
import CTypography from "components/CustomTypography";
import CBox from 'components/CustomBox';



function HeroSection() {
  return <>
         <HeroBackground
      full 
      cover 
      image={bgImage} 
      >
    <Container sx={{display:{xl:"block",lg:"block",sm:"none",xs:"none"}}}>
          <Grid container spacing={2}  alignItems="center"> 
              <Grid item xs={6}>
              <CTypography color="white" variant="h4" >Hii, Developers</CTypography>
                <CTypography color="white" variant="h1" >Don't worry</CTypography>
                <CTypography color="white" variant="body1" >I will save your time, just tell your client.</CTypography>
                <CTypography color="white" variant="h4">"wait until your coffee is over"</CTypography>
              </Grid>
              <Grid item xs={6}>
                <CBox
                
                minHeight={"75vh"}
                width="100%"
                borderRadius="20px"
                 sx={{
                  backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.1),
                      rgba(gradients.dark.state, 0.0)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat:"no-repeat",
                  display: "grid",
                  placeItems:"center",
                  boxShadow:" -7px 1px 121px -11px rgba(0,0,0,0.85)",
                }}/>

              </Grid>
          </Grid>

    </Container>
        <Container  sx={{display:{xl:"none",lg:"none",sm:"block",xs:"block"}}}>
        <CTypography color="white" variant="h4" >Hii, Developers</CTypography>
                <CTypography color="white" variant="h1" >Don't worry</CTypography>
                <CTypography color="white" variant="body1" >I will save your time, just tell your client.</CTypography>
                <CTypography color="white" variant="h4">"wait until your coffee is over"</CTypography>
          </Container>

      </HeroBackground>
      </>;
}

export default HeroSection;
