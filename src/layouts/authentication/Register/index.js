/**
=========================================================
* Sri Vivekananda - v2.1.0
=========================================================

* Product Page: https://Srinivas&Dwarak/product/Srinivas&Dwarak
* Copyright 2022 Creative Tim (https://Srinivas&Dwarak)

Coded by Srinivas&Dwarak

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Sri Vivekananda components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/full_Logo.png";

import { auth, googleAuthProvider } from "../../../firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import firebase from "../../.././firebase";
import MDSnackbar from "components/MDSnackbar";

const Basic = ({ history }) => {
  const database = firebase.firestore();
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState("");
  // const [ReEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [AuthLoginErrorSB, setAuthLoginErrorSB] = useState(false);
  const openAuthLoginErrorSB = () => setAuthLoginErrorSB(true);
  const closeAuthLoginErrorSB = () => setAuthLoginErrorSB(false);
  const [RegistersuccessSB, setRegistersuccessSB] = useState(false);
  const closeRegistersuccessSB = () => setRegistersuccessSB(false);
  const openRegistersuccessSB = () => setRegistersuccessSB(true);

  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) {
    } else {
      navigate("/authentication/sign-in");
    }
  }, [user]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/authentication/sign-in");
      }
    });
  }, []);
  const renderAuthLoginErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Notice Board"
      content="User  with this username already exists!"
      dateTime="just now"
      open={AuthLoginErrorSB}
      onClose={closeAuthLoginErrorSB}
      close={closeAuthLoginErrorSB}
      bgWhite
    />
  );
  const renderRegistersuccessSB = (
    <MDSnackbar
      color="primary"
      icon="check"
      title="Notice Board"
      content="New user created successfully!"
      dateTime="just now"
      open={RegistersuccessSB}
      onClose={closeRegistersuccessSB}
      close={closeRegistersuccessSB}
      bgWhite
    />
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const snipshot = await database.collection("Admin_Auth").doc(email).get();
    if (!snipshot.data()) {
      console.log("inside snipdata");
      const snapshot = await database
        .collection("Admin_Auth")
        .doc(`${email}`)
        .set({ password: password }, { merge: true });
      openRegistersuccessSB();
    } else {
      openAuthLoginErrorSB();
    }

    // const result = await auth.signInWithEmailAndPassword(email, password);
    // const { user } = result;
    // const idTokenResult = await user.getIdTokenResult();
    // dispatch({
    //   type: "LOGGED_IN_USER",
    //   payload: {
    //     email: user.email,
    //     token: idTokenResult.token,
    //     uid: user.uid,
    //   },
    // });
    // navigate("/dashboard");

    // auth.signInWithEmailAndPassword(email, password).then((response) => {
    //   navigate("/");
    //   sessionStorage.setItem(
    //     "Auth Token",
    //     response._tokenResponse.refreshToken
    //   );
    // });
    // try {
    //   const result = await auth.signInWithEmailAndPassword(email, password);
    //   console.log("resut : ogin page : ", result);
    //   const { user } = result;
    //   const idTokenResult = await user.getIdTokenResult();
    //   dispatch({
    //     type: "LOGGED_IN_USER",
    //     payload: {
    //       email: user.email,
    //       token: idTokenResult.token,
    //       uid: user.uid,
    //     },
    //   });
    //   history.push("/");
    // } catch (error) {
    //   console.log(email, " adsa ", password);
    // }
  };
  return (
    <BasicLayout
    //  image={bgImage}
    >
      {renderAuthLoginErrorSB}
      {renderRegistersuccessSB}
      <Card>
        <MDBox pt={4} pb={3} mx={3}>
          <img
            style={{
              width: "100%",
            }}
            className="d-block  img-fluid"
            src={bgImage}
            alt="First slide"
          />
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={handleSubmit}>
            <MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <button
                  type="submit"
                  style={{ borderWidth: "0", width: "100%" }}
                >
                  <MDButton variant="gradient" color="primary" fullWidth>
                    Register
                  </MDButton>
                </button>
              </MDBox>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </BasicLayout>
  );
};

export default Basic;
