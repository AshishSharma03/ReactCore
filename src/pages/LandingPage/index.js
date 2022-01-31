import React from "react";
import CBox from "components/CustomBox";
import bgImage from "assets/images/bg-about-us.jpg";
import DefaultFooter from "Mainsections/Footers/DefaultFooter";
import footerRouter from "routers/footer.routes";

function LandingPage() {
  return (
    <>
    <CBox
     minHeight="100vh"
     width="100%"
     sx={{
       backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
         `${linearGradient(
           rgba(gradients.dark.main, 0.6),
           rgba(gradients.dark.state, 0.6)
         )}, url(${bgImage})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       display: "grid",
       placeItems: "center",
     }}
    />
      <DefaultFooter content={footerRouter} />
    </>
  );
}

export default LandingPage;
