// @mui material components
import Grid from "@mui/material/Grid";

// Sri Vivekananda components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

// @mui material components
import Icon from "@mui/material/Icon";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import Card from "@mui/material/Card";

import MDTypography from "components/MDTypography";

import SbgImage from "assets/images/sv_school.jpg";
import JbgImage from "assets/images/sv_jnrClg.png";
import DbgImage from "assets/images/SV_Logo.png";

// Sri Vivekananda example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Dashboard components
import { Divider, TextField } from "@mui/material";

//New changes by Dwarak
import React, { useState, useEffect } from "react";
import firebase from "../.././firebase";
import ProgressBar from "@ramonak/react-progress-bar";
import MDSnackbar from "components/MDSnackbar";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
function Dashboard() {
  const database = firebase.firestore();
  const [pdfProgress, setpdfProgress] = useState(0);
  const [LinksText, setLinksText] = useState("");
  const [Linky, setLinky] = useState("");
  const [linksss, setlinksss] = useState([]);
  const [PdfsuccessSB, setPdfsuccessSB] = useState(false);
  const closePdfsuccessSB = () => setPdfsuccessSB(false);
  const openPdfsuccessSB = () => setPdfsuccessSB(true);
  const [PdfDeleteSB, setPdfDeleteSB] = useState(false);
  const openPdfDeleteSB = () => setPdfDeleteSB(true);
  const closePdfDeleteSB = () => setPdfDeleteSB(false);
  const navigate = useNavigate();
  useEffect(() => {
    var userLocal = sessionStorage.getItem("user1");
    if (!userLocal) {
      navigate("/authentication/sign-in");
    }
  }, []);

  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("Class_Room_Links_JnrClg")
        .doc("Class_Room_Links_JnrClg")
        .get();
      setlinksss(snapshot.data().links_array);
    };
    getContent();
  }, []);

  const renderPdfsuccessSB = (
    <MDSnackbar
      color="primary"
      icon="check"
      title="Notice Board"
      content="Classroom Link uploaded successfully!"
      dateTime="just now"
      open={PdfsuccessSB}
      onClose={closePdfsuccessSB}
      close={closePdfsuccessSB}
      bgWhite
    />
  );

  const renderPdfDeleteSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Notice Board"
      content="Classroom Link deleted successfully!"
      dateTime="just now"
      open={PdfDeleteSB}
      onClose={closePdfDeleteSB}
      close={closePdfDeleteSB}
      bgWhite
    />
  );

  const HandlePdfUpload = async (e) => {
    e.preventDefault();
    const snapshot = await database
      .collection("Class_Room_Links_JnrClg")
      .doc("Class_Room_Links_JnrClg")
      .get();
    var daty = snapshot.data().links_array;
    const newLinksdaty = { Linky, LinksText };
    daty.push(newLinksdaty);
    await database
      .collection("Class_Room_Links_JnrClg")
      .doc("Class_Room_Links_JnrClg")
      .update(
        {
          links_array: daty,
        },
        { merge: true }
      );
    setPdfsuccessSB(true);
    setlinksss(daty);
    document.getElementById("PdfUpload").reset();
    setpdfProgress(0);
  };

  const HandledeletePdf = async (id) => {
    const snapshot = await database
      .collection("Class_Room_Links_JnrClg")
      .doc("Class_Room_Links_JnrClg")
      .get();
    var daty = snapshot.data().links_array;
    daty.splice(id, 1);
    await database
      .collection("Class_Room_Links_JnrClg")
      .doc("Class_Room_Links_JnrClg")
      .update(
        {
          links_array: daty,
        },
        { merge: true }
      );
    setPdfDeleteSB(true);
    setlinksss(daty);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <img
                      style={{
                        marginLeft: "30%",
                        marginRight: "30%",
                        width: "40%",
                      }}
                      alt="test"
                      src={SbgImage}
                    />
                    <MDBox pt={2} pb={1} px={1}>
                      <center>
                        <MDTypography variant="h5" textTransform="capitalize">
                          School
                        </MDTypography>
                      </center>
                      <Divider />
                      <center>
                        <Link to={`/class_room_links_School`}>
                          <MDButton variant="gradient" color="primary">
                            &nbsp;Select
                          </MDButton>
                        </Link>
                      </center>
                    </MDBox>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <img
                      style={{
                        marginLeft: "30%",
                        marginRight: "30%",
                        width: "40%",
                      }}
                      alt="test"
                      src={JbgImage}
                    />
                    <MDBox pt={2} pb={1} px={1}>
                      <center>
                        <MDTypography variant="h5" textTransform="capitalize">
                          Junior College
                        </MDTypography>
                      </center>
                      <Divider />
                      <center>
                        <Link to={`/class_room_links_Junior_College`}>
                          <MDButton variant="gradient" color="primary">
                            &nbsp;Selected
                          </MDButton>
                        </Link>
                      </center>
                    </MDBox>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <img
                      style={{
                        marginLeft: "30%",
                        marginRight: "30%",
                        width: "40%",
                      }}
                      alt="test"
                      src={DbgImage}
                    />
                    <MDBox pt={2} pb={1} px={1}>
                      <center>
                        <MDTypography variant="h5" textTransform="capitalize">
                          Degree College
                        </MDTypography>
                      </center>
                      <Divider />
                      <center>
                        <Link to={`/class_room_links_Degree_College`}>
                          <MDButton variant="gradient" color="primary">
                            &nbsp;Select
                          </MDButton>
                        </Link>
                      </center>
                    </MDBox>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <br /> <br />
        <center>
          <MDTypography variant="h2" gutterBottom color="primary">
            Classroom Links - Junior College
          </MDTypography>
        </center>
        <br />
        <MDBox mt={8} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card id="delete-account">
                <MDBox pt={3} px={2}>
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    color="primary"
                  >
                    Links Section
                  </MDTypography>
                </MDBox>
                <MDBox pt={1} pb={2} px={2}>
                  <MDBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                  >
                    {linksss.map((pdif, id) => {
                      return (
                        <MDBox
                          component="li"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          bgColor="grey-100"
                          borderRadius="lg"
                          p={3}
                          mb={1}
                          mt={2}
                        >
                          <MDBox
                            width="100%"
                            display="flex"
                            flexDirection="column"
                          >
                            <MDBox
                              display="flex"
                              justifyContent="space-between"
                              alignItems={{ xs: "flex-start", sm: "center" }}
                              flexDirection={{ xs: "column", sm: "row" }}
                            >
                              <MDTypography
                                variant="button"
                                fontWeight="medium"
                                textTransform="capitalize"
                              >
                                {pdif.LinksText}
                                {/* {pdif
                                  .slice(123)
                                  .split("?")[0]
                                  .replaceAll("%", " ")} */}
                              </MDTypography>

                              <MDBox
                                ml={{ xs: -1.5, sm: 0 }}
                                display="flex"
                                alignItems="center"
                                mt={{ xs: 2, sm: 0 }}
                              >
                                <MDBox mr={1}>
                                  <MDButton
                                    variant="text"
                                    color="error"
                                    onClick={() => {
                                      HandledeletePdf(id);
                                    }}
                                  >
                                    <Icon>delete</Icon>delete
                                  </MDButton>
                                </MDBox>
                                <a
                                  target="_blank"
                                  rel="noreferrer noopener "
                                  href={pdif.Linky}
                                  download={pdif.Linky}
                                  rel="noopener"
                                  role="button"
                                >
                                  <MDButton variant="text" color="dark">
                                    <VisibilitySharpIcon /> View
                                  </MDButton>
                                </a>
                              </MDBox>
                              {renderPdfDeleteSB}
                            </MDBox>
                          </MDBox>
                        </MDBox>
                      );
                    })}
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
            <br />

            <Grid item xs={12} md={5}>
              <Card sx={{ height: "100%" }}>
                <MDBox pt={3} px={3}>
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    color="primary"
                  >
                    Upload Pdf Files
                  </MDTypography>
                  <MDBox mt={0} mb={2}>
                    <form onSubmit={HandlePdfUpload} id="PdfUpload">
                      <Divider />
                      <TextField
                        required
                        size="large"
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        label="Classroom Link"
                        onChange={(e) => {
                          setLinky(e.target.value);
                          setpdfProgress(0);
                        }}
                        variant="outlined"
                      />
                      {/* <input
                        style={{
                          // backgroundColor: "#fb4787",
                          border: "1px solid lightgrey",
                          borderRadius: "8px",
                          color: "#fb4787",
                          display: "block",
                          padding: "1em",
                          transition:
                            "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                          width: "100%",
                        }}
                        type="file"
                        accept="application/pdf,application/vnd.ms-excel"
                        onClick={(event) => {
                          event.target.value = null;
                          setpdfProgress(0);
                        }}
                        required
                      /> */}
                      <Divider />

                      <TextField
                        required
                        size="large"
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        label="Title"
                        onChange={(e) => {
                          setLinksText(e.target.value);
                          setpdfProgress(0);
                        }}
                        variant="outlined"
                      />
                      <br />
                      <MDBox mt={3} mb={3}>
                        <MDButton
                          variant="gradient"
                          color="primary"
                          type="submit"
                          fullWidth
                        >
                          Upload Link
                        </MDButton>
                      </MDBox>
                    </form>
                    {pdfProgress ? (
                      <ProgressBar
                        completed={pdfProgress}
                        bgColor="#fb4787"
                        labelColor="#fff"
                        labelSize="10 px"
                        animateOnRender
                      />
                    ) : null}
                  </MDBox>
                  {renderPdfsuccessSB}
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
