const size = {
  mobile: "500px",
  mobileM: "767px",
  tabletS: "992px",
  tabletM: "1199px",
  laptop: "1200px",
};

const theme = {
  mobile: `(max-width:${size.mobile})`,
  mobileM: `(max-width:${size.mobileM})`,
  tabletS: `(max-width:${size.tabletS})`,
  tabletM: `(max-width:${size.tabletM})`,
  laptop: `(min-width:${size.laptop})`,
};

export default theme;
