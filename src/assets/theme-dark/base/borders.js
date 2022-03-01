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
 * The base border styles for the Sri Vivekananda PRO React.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Sri Vivekananda PRO React using thie file.
 */

// Sri Vivekananda Base Styles
import colors from "assets/theme-dark/base/colors";

// Sri Vivekananda Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { white } = colors;

const borders = {
  borderColor: rgba(white.main, 0.4),

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};

export default borders;
