"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  white: "#FFFFFF",
  gray100: "#F9FBFD",
  gray200: "#EAEEF2",
  gray500: "#E8E8E8",
  gray900: "#1F2238",
  blue500: "#28ABEA",
  blue600: "#04A2E8"
};

// src/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "1.62rem",
  "5xl": "1.75rem"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/space.ts
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
