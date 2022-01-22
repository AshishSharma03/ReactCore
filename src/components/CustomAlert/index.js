import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Material Kit 2 React components
import CBox from "components/CustomBox";

// Custom styles for the CAlert
import CustomAlertRoot from "components/CustomAlert/CustomAlertRoot";
import CustomAlertCloseIcon from "components/CustomAlert/CustomAlertCloseIcon";

function CAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <CustomAlertRoot ownerState={{ color }} {...rest}>
        <CBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </CBox>
        {dismissible ? (
          <CustomAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</CustomAlertCloseIcon>
        ) : null}
      </CustomAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of CAlert
CAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the CAlert
CAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CAlert;
