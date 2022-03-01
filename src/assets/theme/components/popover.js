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

// Sri Vivekananda helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// Sri Vivekananda base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
