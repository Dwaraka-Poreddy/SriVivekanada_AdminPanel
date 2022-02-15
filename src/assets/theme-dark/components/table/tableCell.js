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

// Sri Vivekananda React base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Sri Vivekananda React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
