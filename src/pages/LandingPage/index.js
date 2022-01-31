import React, { Children } from "react";
import DefaultFooter from "Customsections/Footers/DefaultFooter";
import footerRouter from "routers/footer.routes";
import bgImage from "assets/images/bg3.jpg";
import DefaultNavbar from "Customsections/Navbars/DefaultNavbars";
import routes from "routers/routes";
import { Container ,Grid} from "@mui/material";
import HeroSection from "Customsections/HeroSection.js";
import IconCard from "Customsections/InformationSections/iconCard";
import Introduction from "Customsections/InformationSections/introduction";
import Profits from "Customsections/InformationSections/profits";

// import CBox from "components/CustomBox";
function LandingPage() {
  return (
    <>
    <DefaultNavbar
        brand="LOGO"
        routes={routes}
        transparent
        light
        />
    <HeroSection />
    <Introduction/>
    <IconCard/>
     <Profits/>

      <DefaultFooter content={footerRouter} />
    </>
  );
}



export default LandingPage;
