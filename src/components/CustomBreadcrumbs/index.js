import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

// Material Kit 2 React components
import CBox from "components/CustomBox";
import CTypography from "components/CustomTypography";

function Breadcrumbs({ routes, ...rest }) {
  return (
    <CBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <CTypography
              key={label}
              component={Link}
              to={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </CTypography>
          ) : (
            <CTypography key={label} variant="button" fontWeight="regular">
              {label}
            </CTypography>
          )
        )}
      </MuiBreadcrumbs>
    </CBox>
  );
}

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breadcrumbs;
