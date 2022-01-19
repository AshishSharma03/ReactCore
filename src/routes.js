// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

//Pages
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";

const routes = [
  {
    key: 1,
    name: "about us",
    route: "/about-us",
    icon: <GitHubIcon />,
    component: <AboutUs />,
  },
  {
    key: 2,
    name: "contact us",
    route: "/contact-us",
    icon: <GitHubIcon />,
    component: <ContactUs />,
  },
];

export default routes;
