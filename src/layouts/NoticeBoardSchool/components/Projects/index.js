// @mui material components
import Card from "@mui/material/Card";

// Sri Vivekananda components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Carousel from "react-bootstrap/Carousel";
import bgImage from "assets/images/bg-reset-cover.jpeg";
import MDButton from "components/MDButton";

function Projects() {
  return (
    <Card>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Output Carousel
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={4}>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={bgImage} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <MDBox mt={3} mb={3}>
                <MDButton variant="gradient" color="error" fullWidth>
                  Delete
                </MDButton>
              </MDBox>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bgImage} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <MDBox mt={3} mb={3}>
                <MDButton variant="gradient" color="error" fullWidth>
                  Delete
                </MDButton>
              </MDBox>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={bgImage} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <MDBox mt={3} mb={3}>
                <MDButton variant="gradient" color="error" fullWidth>
                  Delete
                </MDButton>
              </MDBox>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </MDBox>
    </Card>
  );
}

export default Projects;
