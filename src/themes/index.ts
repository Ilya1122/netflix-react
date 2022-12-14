import { createTheme } from "@mui/material";
// import { cyan, pink } from "@mui/material/colors";
// import createPalette from "@mui/material/styles/createPalette";
import { defaultPalette as palette } from "./palettes";

export const theme = createTheme({
  // palette,
  // typography,
  // spacing: [0, 2, 4, 8, 16, 32, 64],
  // breakpoints: customBreakpoints,
});

export const defaultTheme = createTheme({
  palette,
  // components: {
  //   MuiButton: muiButton(theme),
  //   MuiRadio: muiRadioButton(theme),
  //   MuiCheckbox: muiCheckbox(theme),
  //   MuiTextField: muiTextField(theme),
  //   MuiSelect: muiSelect(theme),
  //   MuiInput: muiInput(theme),
  //   MuiAvatar: muiAvatar(theme),
  //   MuiTooltip: muiTooltip(theme),
  //   MuiCssBaseline: muiCssBaseline(),
  // },
});
