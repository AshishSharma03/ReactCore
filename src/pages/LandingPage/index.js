import React from "react";
import DefaultNavbar from "Mainsections/Navbars/DefaultNavbars";
import  routes from "routers/routes";
function LandingPage() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        // transparent
        relative
        dark
      />
    </>
  );
}

export default LandingPage;
