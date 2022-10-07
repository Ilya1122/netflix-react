import createPalette from "@mui/material/styles/createPalette";

type Custom = {
  primary: {
    main: string;
  };
  grey: {
    main: string;
  };
};

declare module "@mui/material/styles" {
  interface Palette {
    custom: Custom;
  }
  interface PaletteOptions {
    custom: Custom;
  }
}

export const defaultPalette = createPalette({
  primary: {
    main: "#562C8E",
    dark: "#470073",
    light: "#C5ABFC",
    contrastText: "#ffffff",
  },
  success: {
    main: "#47B347",
    dark: "#5DDE3C",
    light: "#E8F8E4",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#FF2E00",
    light: "#FFF1EE",
    dark: "#FF9A03",
    contrastText: "#ffffff",
  },
  info: {
    main: "#5783F1",
    light: "#69DAF2",
    dark: "#29A3CC",
    contrastText: "#ffffff",
  },
  error: {
    main: "#FF6B4A",
  },
  custom: {
    primary: {
      main: "#000000",
    },
    grey: {
      main: "#747474",
    },
  },
});
