import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  width: "100%",
  height: "3rem",
  border: "1px solid black",
  position: "sticky",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});

export const headerTitleBoxStyle = style({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
});

export const headerTitleStyle = style({
  fontSize: "1.4rem",
  color: "#527190",
  fontWeight: "600",
});

export const headerDescriptionStyle = style({
  fontSize: "0.9rem",
  color: "#aaa",
  fontWeight: "400",
  paddingTop: "0.3rem",
});
