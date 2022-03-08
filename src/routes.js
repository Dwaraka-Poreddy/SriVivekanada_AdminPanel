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

/** 
  All of the routes for the Sri Vivekananda are added here,
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

// Sri Vivekananda layouts
import Dashboard from "layouts/dashboard";
import NoticeBoardSchool from "layouts/NoticeBoardSchool";
import NoticeBoardJnrClg from "layouts/NoticeBoardJnrClg";
import NoticeBoardDgClg from "layouts/NoticeBoardDgClg";
import TimeTableSchool from "layouts/TimeTableSchool";
import TimeTableJnrClg from "layouts/TimeTableJnrClg";
import TimeTableDgClg from "layouts/TimeTableDgClg";
import ExamsResultsJnrClg from "layouts/ExamsResultsJnrClg";
import ExamsResultsSchool from "layouts/ExamsResultsSchool";
import ExamsResultsDgClg from "layouts/ExamsResultsDgClg";
import ActivitiesSchool from "layouts/ActivitiesSchool";
import ActivitiesJnrClg from "layouts/ActivitiesJnrClg";
import ActivitiesDgClg from "layouts/ActivitiesDgClg";
import ClassRoomLinksSchool from "layouts/ClassRoomLinksSchool";
import ClassRoomLinksJnrClg from "layouts/ClassRoomLinksJnrClg";
import ClassRoomLinksDgClg from "layouts/ClassRoomLinksDgClg";
import Approve_Students from "layouts/Approve_Students";
import FeesSchool from "layouts/FeesSchool";
import FeesJnrClg from "layouts/FeesJnrClg";
import FeesDgClg from "layouts/FeesDgClg";
import AboutUs from "layouts/AboutUs";
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
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboard",
  //   component: <Dashboard />,
  // },
  {
    type: "collapse",
    name: "About Us",
    key: "about",
    icon: <Icon fontSize="small">school</Icon>,
    route: "/about_us",
    component: <AboutUs />,
  },
  {
    type: "collapse",
    name: "Notice Board",
    key: "notice",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/notice_Board_School",
    component: <NoticeBoardSchool />,
  },
  {
    type: "title",
    name: "Notice Board",
    key: "notice",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/notice_Board_Junior_College",
    component: <NoticeBoardJnrClg />,
  },
  {
    type: "title",
    name: "Notice Board",
    key: "notice",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/notice_Board_Degree_College",
    component: <NoticeBoardDgClg />,
  },
  {
    type: "collapse",
    name: "Timetable",
    key: "time",
    icon: <Icon fontSize="small">table_chart</Icon>,
    route: "/time_table_School",
    component: <TimeTableSchool />,
  },
  {
    type: "title",
    name: "Timetable",
    key: "time",
    icon: <Icon fontSize="small">table_chart</Icon>,
    route: "/time_table_Junior_College",
    component: <TimeTableJnrClg />,
  },
  {
    type: "title",
    name: "Timetable",
    key: "time",
    icon: <Icon fontSize="small">table_chart</Icon>,
    route: "/time_table_Degree_College",
    component: <TimeTableDgClg />,
  },
  {
    type: "collapse",
    name: "Exams & Results",
    key: "exams",
    icon: <Icon fontSize="small">star_half</Icon>,
    route: "/exams_results_School",
    component: <ExamsResultsSchool />,
  },
  {
    type: "title",
    name: "Exams & Results",
    key: "exams",
    icon: <Icon fontSize="small">star_half</Icon>,
    route: "/exams_results_Junior_College",
    component: <ExamsResultsJnrClg />,
  },
  {
    type: "title",
    name: "Exams & Results",
    key: "exams",
    icon: <Icon fontSize="small">star_half</Icon>,
    route: "/exams_results_Degree_College",
    component: <ExamsResultsDgClg />,
  },
  {
    type: "collapse",
    name: "Activities",
    key: "activities",
    icon: <Icon fontSize="small">local_activity</Icon>,
    route: "/activities_School",
    component: <ActivitiesSchool />,
  },
  {
    type: "title",
    name: "Activities",
    key: "activities",
    icon: <Icon fontSize="small">local_activity</Icon>,
    route: "/activities_Junior_College",
    component: <ActivitiesJnrClg />,
  },
  {
    type: "title",
    name: "Activities",
    key: "activities",
    icon: <Icon fontSize="small">local_activity</Icon>,
    route: "/activities_Degree_College",
    component: <ActivitiesDgClg />,
  },
  {
    type: "collapse",
    name: "Classroom Links",
    key: "class",
    icon: <Icon fontSize="small">auto_stories</Icon>,
    route: "/class_room_links_School",
    component: <ClassRoomLinksSchool />,
  },
  {
    type: "title",
    name: "Classroom Links",
    key: "class",
    icon: <Icon fontSize="small">auto_stories</Icon>,
    route: "/class_room_links_Junior_College",
    component: <ClassRoomLinksJnrClg />,
  },
  {
    type: "title",
    name: "Classroom Links",
    key: "class",
    icon: <Icon fontSize="small">auto_stories</Icon>,
    route: "/class_room_links_Degree_College",
    component: <ClassRoomLinksDgClg />,
  },
  {
    type: "collapse",
    name: "Fees",
    key: "fees",
    icon: <Icon fontSize="small">currency_rupee</Icon>,
    route: "/fees_School",
    component: <FeesSchool />,
  },
  {
    type: "title",
    name: "Fees",
    key: "fees",
    icon: <Icon fontSize="small">currency_rupee</Icon>,
    route: "/fees_Junior_College",
    component: <FeesJnrClg />,
  },
  {
    type: "title",
    name: "Fees",
    key: "fees",
    icon: <Icon fontSize="small">currency_rupee</Icon>,
    route: "/fees_Degree_College",
    component: <FeesDgClg />,
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
    type: "title",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "title",
    name: "Register",
    key: "register",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/Register",
    component: <Register />,
  },
  {
    type: "collapse",
    name: "Approve Students",
    key: "approve",
    icon: <Icon fontSize="small">school</Icon>,
    route: "/approve_students",
    component: <Approve_Students />,
  },
];

export default routes;
