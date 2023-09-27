import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // This sets the overall theme mode to dark, which uses dark grey backgrounds by default
    primary: {
      main: "#4caf50", // Some shade of green, replace with your preferred green
    },
    secondary: {
      main: "#ffffff", // White color for secondary emphasis
    },
    // You can add more palette options as needed
  },
  // Add other theme customizations if needed
});

export default theme;
