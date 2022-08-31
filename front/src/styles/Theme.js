const colors = {
  black: "#333333",
  white: "#ffffff",
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
