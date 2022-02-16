/**
=========================================================
* Sri Vivekananda React - v2.1.0
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

// Sri Vivekananda React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { auth, googleAuthProvider } from "../../../firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Basic = ({ history }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState("");
  // const [ReEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) {
      navigate("/dashboard");
    } else {
      navigate("/authentication/sign-in");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("form submitted");
    const result = await auth.signInWithEmailAndPassword(email, password);
    const { user } = result;
    const idTokenResult = await user.getIdTokenResult();
    dispatch({
      type: "LOGGED_IN_USER",
      payload: {
        email: user.email,
        token: idTokenResult.token,
        uid: user.uid,
      },
    });
    navigate("/dashboard");
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
    //   toast.error(error.message);
    // }
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
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
                <button type="submit">
                  <MDButton variant="gradient" color="info" fullWidth>
                    sign in
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
