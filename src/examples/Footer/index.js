// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Sri Vivekananda components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Sri Vivekananda base styles
import typography from "assets/theme/base/typography";

function Footer({ company, links }) {
  const { href } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <MDBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href}>
          <MDTypography variant="button" fontWeight="medium" color="primary">
            {link.name}
          </MDTypography>
        </Link>
      </MDBox>
    ));

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit" color="primary">
            favorite
          </Icon>
        </MDBox>
        {/* <Link href={href} target="_blank">
          <MDTypography variant="button" fontWeight="medium">
            &nbsp;Srinivas&nbsp;
          </MDTypography>
        </Link> */}
      </MDBox>
      <MDBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,
          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  company: { href: "https://Srinivas&Dwarak/", name: "Srinivas Dwarak" },
  links: [
    { href: "/notice_Board_School", name: "Notice Board" },
    { href: "/time_table_School", name: "Time table" },
    { href: "/exams_results_School", name: "Exams & Results" },
    { href: "/activities_School", name: "Activities" },
    { href: "/about_us", name: "About Us" },
  ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
