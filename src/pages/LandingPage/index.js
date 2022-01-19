import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import Box from "components/Box";
import Typography from "components/Typography";
import Button from "components/Button";

// About Us page sections
import Information from "pages/LandingPage/sections/Information";
import Team from "pages/LandingPage/sections/Team";
import Featuring from "pages/LandingPage/sections/Featuring";
import Newsletter from "pages/LandingPage/sections/Newsletter";

//Navbar & Footer
import DefaultNavbar from "sections/Navbars/DefaultNavbars";
import DefaultFooter from "sections/Footers/DefaultFooter";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function LandingPage() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "#",
          label: "Get Started",
          color: "info",
        }}
        transparent
        light
      />
      <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
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
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Work with an amazing design
            </Typography>
            <Typography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </Typography>
            <Button
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              create account
            </Button>
            <Typography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </Typography>
              <Typography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </Typography>
              <Typography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </Typography>
              <Typography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <Box pt={6} px={1} mt={6}>
        {/* <DefaultFooter content={footerRoutes} /> */}
      </Box>
    </>
  );
}

export default LandingPage;
