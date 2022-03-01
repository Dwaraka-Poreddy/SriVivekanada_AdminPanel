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

// Sri Vivekananda Base Styles
import borders from "assets/theme/base/borders";

// Sri Vivekananda Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};

export default cardMedia;
