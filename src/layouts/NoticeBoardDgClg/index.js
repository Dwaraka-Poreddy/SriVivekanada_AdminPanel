// @mui material components
import Grid from "@mui/material/Grid";

// Sri Vivekananda React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

// @mui material components
import Icon from "@mui/material/Icon";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import Card from "@mui/material/Card";

import MDTypography from "components/MDTypography";

import bgImage from "assets/images/bg-reset-cover.jpeg";

// Sri Vivekananda React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import { Divider, TextField } from "@mui/material";

//New changes by Dwarak
import React, { useState, useEffect } from "react";
import firebase from "../.././firebase";
import { storage } from "../.././firebase";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-bootstrap/Carousel";
import ProgressBar from "@ramonak/react-progress-bar";

function Dashboard() {
  const database = firebase.firestore();
  const [imgProgress, setimgProgress] = useState(0);
  const [pdfProgress, setpdfProgress] = useState(0);
  const [ImgText, setImgText] = useState("");
  const [newText, setNewText] = useState("");
  const [imagesss, setimagesss] = useState([]);
  const [pdfsss, setpdfsss] = useState([]);
  const [textsss, settextsss] = useState([]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("notice_board_DegreeClg")
        .doc("notice_board_DegreeClg")
        .get();
      setimagesss(snapshot.data().images_array);
    };
    getContent();
  }, [imagesss]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("notice_board_DegreeClg")
        .doc("notice_board_DegreeClg")
        .get();
      setpdfsss(snapshot.data().pdfs_array);
    };
    getContent();
  }, [pdfsss]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("notice_board_DegreeClg")
        .doc("notice_board_DegreeClg")
        .get();
      setNewText(snapshot.data().texts_array[0]);
      console.log("useEffect text first item : ", newText);
      // settextsss(snapshot.data().texts_array);
    };
    getContent();
  }, []);
  const HandleImageUpload = async (e) => {
    var ud = uuidv4();
    console.log(ud);
    e.preventDefault();
    console.log(e.target[0]);
    const file = e.target[0].files[0];
    const uploadTask = storage.ref(`/images/${ud + file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setimgProgress(prog);
      },
      (err) => console.log(err),
      async () => {
        await storage
          .ref(`/images/${ud + file.name}`)
          .getDownloadURL()
          .then(async (url) => {
            const snapshot = await database
              .collection("notice_board_DegreeClg")
              .doc("notice_board_DegreeClg")
              .get();
            console.log("namaste", snapshot.data().images_array);
            var daty = snapshot.data().images_array;
            const newdaty = { url, ImgText };
            daty.push(newdaty);
            await database
              .collection("notice_board_DegreeClg")
              .doc("notice_board_DegreeClg")
              .update(
                {
                  images_array: daty,
                },
                { merge: true }
              );
          });
      }
    );
    document.getElementById("ImageUpload").reset();
  };
  const HandleTextUpload = async (e) => {
    e.preventDefault();
    const snapshot = await database
      .collection("notice_board_DegreeClg")
      .doc("notice_board_DegreeClg")
      .get();
    console.log("namaste", snapshot.data().texts_array);
    var daty = snapshot.data().texts_array;
    daty[0] = newText;
    await database
      .collection("notice_board_DegreeClg")
      .doc("notice_board_DegreeClg")
      .update(
        {
          texts_array: daty,
        },
        { merge: true }
      );
  };

  const HandlePdfUpload = async (e) => {
    var ud = uuidv4();
    console.log(ud);
    e.preventDefault();
    const file = e.target[0].files[0];

    const uploadTask = storage.ref(`/pdfs/${ud + file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setpdfProgress(prog);
      },
      (err) => console.log(err),
      async () => {
        await storage
          .ref(`/pdfs/${ud + file.name}`)
          .getDownloadURL()
          .then(async (url) => {
            const snapshot = await database
              .collection("notice_board_DegreeClg")
              .doc("notice_board_DegreeClg")
              .get();
            console.log("namaste", snapshot.data().pdfs_array);
            var daty = snapshot.data().pdfs_array;
            daty.push(url);
            await database
              .collection("notice_board_DegreeClg")
              .doc("notice_board_DegreeClg")
              .update(
                {
                  pdfs_array: daty,
                },
                { merge: true }
              );
          });
      }
    );
    setpdfProgress(0);
    document.getElementById("PdfUpload").reset();
  };
  const HandledeleteImage = async (id) => {
    const snapshot = await database
      .collection("notice_board_DegreeClg")
      .doc("notice_board_DegreeClg")
      .get();
    var daty = snapshot.data().images_array;
    console.log("beforedelete", daty);
    console.log("inside del function id: ", id);

    daty.splice(id, 1);
    console.log("afterdelete", daty);

    await database
      .collection("notice_board_DegreeClg")
      .doc("notice_board_DegreeClg")
      .update(
        {
          images_array: daty,
        },
        { merge: true }
      );
  };
  const HandledeletePdf = async (id) => {
    const snapshot = await database
      .collection("notice_board_DegreeClg")
      .doc("notice_board_DegreeClg")
      .get();
    var daty = snapshot.data().pdfs_array;
    console.log("beforedelete", daty);
    daty.splice(id, 1);
    console.log("afterdelete", daty);

    await database
      .collection("notice_board_DegreeClg")
      .doc("notice_board_DegreeClg")
      .update(
        {
          pdfs_array: daty,
        },
        { merge: true }
      );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Professor"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+5%",
                  label: "than lask semester",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Students"
                count="2,890"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="340k"
                percentage={{
                  color: "success",
                  amount: "+18%",
                  label: "than last year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Attendence"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "+3",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <img
                      style={{
                        marginLeft: "35%",
                        marginRight: "35%",
                        width: "30%",
                      }}
                      alt="test"
                      src={bgImage}
                    />
                    <MDBox pt={2} pb={1} px={1}>
                      <center>
                        <MDTypography variant="h5" textTransform="capitalize">
                          School
                        </MDTypography>
                      </center>
                      <Divider />
                      <center>
                        <a href="/notice_Board_School">
                          <MDButton variant="gradient" color="dark">
                            &nbsp;Select
                          </MDButton>
                        </a>
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
                        marginLeft: "35%",
                        marginRight: "35%",
                        width: "30%",
                      }}
                      alt="test"
                      src={bgImage}
                    />
                    <MDBox pt={2} pb={1} px={1}>
                      <center>
                        <MDTypography variant="h5" textTransform="capitalize">
                          Degree College
                        </MDTypography>
                      </center>
                      <Divider />
                      <center>
                        <a href="/notice_Board_Degree_College">
                          <MDButton variant="gradient" color="dark">
                            &nbsp;Selected
                          </MDButton>
                        </a>
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
                        marginLeft: "35%",
                        marginRight: "35%",
                        width: "30%",
                      }}
                      alt="test"
                      src={bgImage}
                    />
                    <MDBox pt={2} pb={1} px={1}>
                      <center>
                        <MDTypography variant="h5" textTransform="capitalize">
                          Junior College
                        </MDTypography>
                      </center>
                      <Divider />
                      <center>
                        <a href="/notice_Board_Junior_College">
                          <MDButton variant="gradient" color="dark">
                            &nbsp;Select
                          </MDButton>
                        </a>
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
          <h4>Notice Board - Degree College </h4>
        </center>
        <br />
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              {/* Carousel starts here */}
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
                    {imagesss.map((imag, id) => {
                      return (
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={imag.url}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>{imag.ImgText}</h3>
                            <MDBox mt={3} mb={3}>
                              <MDButton
                                variant="gradient"
                                color="error"
                                fullWidth
                                onClick={() => {
                                  HandledeleteImage(id);
                                }}
                              >
                                Delete
                              </MDButton>
                            </MDBox>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </MDBox>
              </Card>
              {/* Carousel ends here */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* Images Form starts here */}
              <Card sx={{ height: "100%" }}>
                <MDBox pt={3} px={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Upload Images
                  </MDTypography>
                  <MDBox mt={0} mb={2}>
                    <Divider />
                    <br />
                    <form onSubmit={HandleImageUpload} id="ImageUpload">
                      <input
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid lightgrey",
                          borderRadius: "8px",
                          color: "#000",
                          display: "block",
                          padding: "1em",
                          transition:
                            "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                          width: "100%",
                        }}
                        type="file"
                        accept="image/*"
                        onClick={(event) => {
                          event.target.value = null;
                          setimgProgress(0);
                        }}
                        required
                      />
                      <Divider />

                      <TextField
                        size="large"
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        label="Title"
                        onChange={(e) => {
                          setImgText(e.target.value);
                          setimgProgress(0);
                        }}
                        variant="outlined"
                      />
                      <br />
                      <MDBox mt={3} mb={3}>
                        <MDButton
                          type="submit"
                          variant="gradient"
                          color="success"
                          fullWidth
                        >
                          Upload Image
                        </MDButton>
                      </MDBox>
                    </form>
                    {imgProgress ? (
                      <ProgressBar
                        completed={imgProgress}
                        bgColor="#71be1e"
                        labelColor="#e80909"
                        labelSize="10 px"
                        animateOnRender
                      />
                    ) : null}
                  </MDBox>
                  {/* dwarak snackbar pettava uploaded image ani and miui linear
                  progressbar vadatam rale */}
                </MDBox>
              </Card>
              {/* Images Form ends here */}
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={12} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card id="delete-account">
                <MDBox pt={3} px={2}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Billing Information
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
                    {pdfsss.map((pdif, id) => {
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
                                {pdif
                                  .slice(123)
                                  .split("?")[0]
                                  .replaceAll("%", " ")}
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
                                  href={pdif}
                                  download={pdif}
                                  rel="noopener"
                                  role="button"
                                >
                                  <MDButton variant="text" color="dark">
                                    <VisibilitySharpIcon /> View
                                  </MDButton>
                                </a>
                              </MDBox>
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
                  <MDTypography variant="h6" fontWeight="medium">
                    Upload Pdf Files
                  </MDTypography>
                  <MDBox mt={0} mb={2}>
                    <form onSubmit={HandlePdfUpload} id="PdfUpload">
                      <Divider />
                      <input
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid lightgrey",
                          borderRadius: "8px",
                          color: "#000",
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
                      />
                      <br />
                      <MDBox mt={3} mb={3}>
                        <MDButton
                          variant="gradient"
                          color="success"
                          type="submit"
                          fullWidth
                        >
                          Upload Pdf
                        </MDButton>
                      </MDBox>
                    </form>
                    {pdfProgress ? (
                      <ProgressBar
                        completed={pdfProgress}
                        bgColor="#71be1e"
                        labelColor="#e80909"
                        labelSize="10 px"
                        animateOnRender
                      />
                    ) : null}
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>

            <Grid item xl={12}>
              <Card sx={{ height: "100%" }}>
                <MDBox pt={3} px={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Upload Main Text
                  </MDTypography>
                  <MDBox mt={0} mb={2}>
                    <form onSubmit={HandleTextUpload}>
                      <Divider />
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Paragraph Text for the Page</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          value={newText}
                          onChange={(e) => setNewText(e.target.value)}
                        />
                      </Form.Group>
                      <MDBox mt={3} mb={3}>
                        <center>
                          <MDButton
                            variant="gradient"
                            color="success"
                            type="submit"
                          >
                            Update Text
                          </MDButton>
                        </center>
                      </MDBox>
                    </form>
                  </MDBox>
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
