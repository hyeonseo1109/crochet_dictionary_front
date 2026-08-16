import { style } from "@vanilla-extract/css";

export const searchBarStyle = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.4rem",
  alignItems: "center",
});

export const searchInputStyle = style({
  borderRadius: "0.55rem",
  border: "1px solid #aaa",
  padding: "0.2rem 0.7rem",
  fontSize: "0.9rem",
  height: "2rem",
  transition: "border 0.2s ease",

  ":focus": {
    border: "2px solid #282828",
    outline: "none",
  },
});

export const searchButtonStyle = style({
  borderRadius: "0.55rem",
  border: "1px solid #aaa",
  fontSize: "0.9rem",
  height: "2rem",
  width: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: "#ddd",
  },
});
