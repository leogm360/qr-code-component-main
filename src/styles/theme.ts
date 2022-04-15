import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      50: "hsl(212, 45%, 89%)",
      200: "hsl(220, 15%, 55%)",
      900: "hsl(218, 44%, 22%)",
    },
    grey: {
      0: "hsl(0, 0%, 100%)",
    },
  },
  fonts: {
    heading: "Outfit",
    body: "Outfit",
  },
  fontSize: {
    sm: "0.9375rem",
  },
  styles: { global: { body: { bg: "blue.50", color: "blue.200" } } },
});

export default theme;
