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
import DbgImage from "assets/images/SV_dgClg.jpg";

// Sri Vivekananda example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Dashboard components
import { Divider, TextField } from "@mui/material";

//New changes by Dwarak
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../.././firebase";
import { storage } from "../.././firebase";
import { v4 as uuidv4 } from "uuid";
import ProgressBar from "@ramonak/react-progress-bar";
import MDSnackbar from "components/MDSnackbar";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
function Dashboard({ history }) {
  const database = firebase.firestore();
  const [PdfText, setPdfText] = useState("");
  const [approvals, setapprovals] = useState([]);
  const [PdfsuccessSB, setPdfsuccessSB] = useState(false);
  const closePdfsuccessSB = () => setPdfsuccessSB(false);
  const [PdfDeleteSB, setPdfDeleteSB] = useState(false);
  const closePdfDeleteSB = () => setPdfDeleteSB(false);
  const [DisapproveSB, setDisapproveSB] = useState(false);
  const closeDisapproveSB = () => setDisapproveSB(false);

  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    var userLocal = localStorage.getItem("user1");
    console.log("userLocal ", userLocal);
    if (!userLocal) {
      navigate("/authentication/sign-in");
    }
  }, []);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.map((doc) => {
            if (!doc.data().approval) {
              setapprovals((oldArray) => [...oldArray, doc.data()]);
            }
          });
        });
    };
    getContent();
  }, []);

  const renderPdfsuccessSB = (
    <MDSnackbar
      color="primary"
      icon="check"
      title="Notice Board"
      content="Student approved successfully!"
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
      content="Registration ID can not be empty!"
      dateTime="just now"
      open={PdfDeleteSB}
      onClose={closePdfDeleteSB}
      close={closePdfDeleteSB}
      bgWhite
    />
  );

  const renderDisapproveSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Notice Board"
      content="Student disapproved succesfully!"
      dateTime="just now"
      open={DisapproveSB}
      onClose={closeDisapproveSB}
      close={closeDisapproveSB}
      bgWhite
    />
  );

  const HandleApprove = async (id) => {
    if (!PdfText) {
      setPdfDeleteSB(true);
      return;
    }
    const snapshot2 = await database
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          if (doc.data().uid == id) {
            database
              .collection("users")
              .doc(doc.data().uid)
              .update({ approval: true, reg_id: PdfText }, { merge: true });
            doc.data().approval = true;
          }
        });
      })
      .then(async () => {
        setapprovals([]);
        const snapshot2 = await database
          .collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.map((doc) => {
              if (!doc.data().approval) {
                setapprovals((oldArray) => [...oldArray, doc.data()]);
              }
            });
          });
        setPdfsuccessSB(true);
      });
  };
  const HandleDisApprove = async (id) => {
    const snapshot2 = await database
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          if (doc.data().uid == id) {
            database
              .collection("users")
              .doc(doc.data().uid)
              .delete()
              .catch((error) => {
                console.error("Error removing document: ", error);
              });
          }
        });
      })
      .then(async () => {
        setapprovals([]);
        const snapshot2 = await database
          .collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.map((doc) => {
              if (!doc.data().approval) {
                setapprovals((oldArray) => [...oldArray, doc.data()]);
              }
            });
          });
        setDisapproveSB(true);
      });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <center>
          <MDTypography variant="h2" gutterBottom color="primary">
            Approve Students
          </MDTypography>
        </center>
        <br />
        <MDBox mt={8} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card id="delete-account">
                <MDBox pt={3} px={2}>
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    color="primary"
                  >
                    Approval Section
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
                    {approvals.map((pdif, id) => {
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
                              <Grid
                                container
                                spacing={3}
                                justifyContent="center"
                              >
                                <Grid item lg={3}>
                                  <MDBox mr={1}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="medium"
                                      textTransform="capitalize"
                                    >
                                      {pdif.firstName}
                                    </MDTypography>
                                  </MDBox>
                                </Grid>
                                <Grid item lg={1}>
                                  <MDBox mr={1}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="medium"
                                      textTransform="capitalize"
                                    >
                                      {pdif.class_stu}
                                    </MDTypography>
                                  </MDBox>
                                </Grid>
                                <Grid item lg={3}>
                                  <MDBox mr={1}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="medium"
                                      textTransform="capitalize"
                                    >
                                      {pdif.email}
                                    </MDTypography>
                                  </MDBox>
                                </Grid>
                                <Grid item lg={2}>
                                  {/* <MDBox
                                    ml={{ xs: -1.5, sm: 0 }}
                                    display="flex"
                                    alignItems="center"
                                    mt={{ xs: 2, sm: 0 }}
                                  > */}
                                  <MDBox mr={1}>
                                    {" "}
                                    <TextField
                                      required
                                      size="medium"
                                      // style={{ width: "100%" }}
                                      id="outlined-basic"
                                      label="Registration ID"
                                      onChange={(e) => {
                                        setPdfText(e.target.value);
                                      }}
                                      variant="outlined"
                                    />
                                  </MDBox>
                                </Grid>
                                <Grid item lg={1}>
                                  <MDBox mr={1}>
                                    <MDButton
                                      variant="text"
                                      color="primary"
                                      onClick={() => {
                                        // HandledeletePdf(id);
                                        HandleApprove(pdif.uid);
                                      }}
                                    >
                                      <Icon>how_to_reg</Icon>Approve
                                    </MDButton>
                                  </MDBox>
                                </Grid>
                                {renderPdfsuccessSB}
                                <Grid item lg={1}>
                                  <MDBox mr={1}>
                                    <MDButton
                                      variant="text"
                                      color="error"
                                      onClick={() => {
                                        HandleDisApprove(pdif.uid);
                                      }}
                                    >
                                      <Icon>cancel</Icon>Disapprove
                                    </MDButton>
                                    {/* </MDBox> */}
                                    {renderDisapproveSB}
                                  </MDBox>
                                </Grid>
                                {renderPdfDeleteSB}{" "}
                              </Grid>
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
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
