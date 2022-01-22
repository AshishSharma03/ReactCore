import { forwardRef } from "react";
import PropTypes from "prop-types";
import CTypography from "components/CustomTypography";
import CProgressRoot from "components/CustomProgress/CustomProgressRoot";

const CProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <CTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </CTypography>
    )}
    <CProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of CProgress
CProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the CProgress
CProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default CProgress;
