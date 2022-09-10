const colors = {
  black: "#2B2B2B",
  white: "#ffffff",
  gray: "#2A425B",
  blue: "#1288F8",
  cyan: "#00D6FA",
  sky: "7CD0FF",
};

const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  large: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  titleSize: calcRem(50),
  subTitleSize: calcRem(40),
};

const theme = {
  colors,
  fontSizes,
};

export default theme;
