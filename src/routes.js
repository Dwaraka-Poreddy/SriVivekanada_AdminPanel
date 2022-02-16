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

/** 
  All of the routes for the Sri Vivekananda React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Sri Vivekananda React layouts
import Dashboard from "layouts/dashboard";
import NoticeBoardSchool from "layouts/NoticeBoardSchool";
import NoticeBoardJnrClg from "layouts/NoticeBoardJnrClg";
import NoticeBoardDgClg from "layouts/NoticeBoardDgClg";
import Notifications from "layouts/notifications";
import SignIn from "layouts/authentication/sign-in";
import React, { useState, useEffect } from "react";
import Register from "layouts/authentication/Register";
// @mui icons
import Icon from "@mui/material/Icon";
// const [isloggedin, setisloggedin] = useState(false);
// useEffect(() => {
//   if (user && user.token) {
//     setisloggedin(true);
//   } else {
//     setisloggedin(false);
//   }
// }, [user]);
// useEffect(() => {
//   firebase.auth().onAuthStateChanged(async function (user) {
//     if (!user) {
//       setisloggedin(false);
//     } else {
//       setisloggedin(true);
//     }
//   });
// }, []);
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "NoticeBoard ",
    key: "noticeboardschool",
    icon: <Icon fontSize="small">NoticeBoard</Icon>,
    route: "/notice_Board_School",
    component: <NoticeBoardSchool />,
  },
  {
    type: "title",
    name: "NoticeBoard Junior Clg",
    key: "noticeboardjnrclg",
    icon: <Icon fontSize="small">NoticeBoard</Icon>,
    route: "/notice_Board_Junior_College",
    component: <NoticeBoardJnrClg />,
  },
  {
    type: "title",
    name: "NoticeBoard Degree Clg",
    key: "noticeboarddegreeclg",
    icon: <Icon fontSize="small">NoticeBoard</Icon>,
    route: "/notice_Board_Degree_College",
    component: <NoticeBoardDgClg />,
  },
  {
    type: "collapse",
    name: "Time Table ",
    key: "timetableschool",
    icon: <Icon fontSize="small">Time Table</Icon>,
    route: "/notice_Board_School",
    component: <NoticeBoardSchool />,
  },
  {
    type: "collapse",
    name: "Study Material ",
    key: "studymaterialschool",
    icon: <Icon fontSize="small">Study Material</Icon>,
    route: "/notice_Board_School",
    component: <NoticeBoardSchool />,
  },
  {
    type: "collapse",
    name: "Results  ",
    key: "resultsschool",
    icon: <Icon fontSize="small">Results</Icon>,
    route: "/notice_Board_School",
    component: <NoticeBoardSchool />,
  },
  {
    type: "collapse",
    name: "About Us",
    key: "aboutus",
    icon: <Icon fontSize="small">About Us</Icon>,
    route: "/notice_Board_School",
    component: <NoticeBoardSchool />,
  },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Register",
    key: "register",
    icon: <Icon fontSize="small">Register</Icon>,
    route: "/authentication/Register",
    component: <Register />,
  },
];

export default routes;
