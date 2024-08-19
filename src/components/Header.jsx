import { 
  AppBar,
  Toolbar,
  Button,
  Box
} from "@mui/material";
import { useLocation } from "react-router-dom";

export const blue = "#3C4E73";
export const darkbrown = "#40240C";
export const orange = "#BF6F41";
export const midbrown = "#73503C";
export const lightbrown = "#D9A78B";
export const offwhite = "#FAF7FC";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? orange : darkbrown,
    fontWeight: location.pathname === path ? "bold" : "normal",
    height: "100%", // Ensures button height matches the toolbar
    padding: "0 16px", // Adjust padding as needed
    display: "flex",
    alignItems: "center", // Centers text vertically
    '&:hover': {
      color: orange,
      fontWeight: "bold"
    }
  });

  return (
    <AppBar position="static" 
      sx={{
        backgroundColor: offwhite,
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center', // Centers the content within the AppBar
        overflowX: 'hidden', // Prevents any overflow
      }}
    >
      <Toolbar sx={{ 
        width: "100%",
        maxWidth: "1290px", 
        alignSelf: "center",
        display: "flex",
        justifyContent: "space-between",
        height: "64px",
        boxSizing: 'border-box', // Ensures padding is included in width calculations
      }}>
        <Button href="/sara_peel" sx={linkStyle('/sara_peel')}>
          Sara Peel
        </Button>
        <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
          <Button href="/sara_peel/about" sx={linkStyle('/sara_peel/about')}>
            About
          </Button>
          <Button href="/sara_peel/experience" sx={linkStyle('/sara_peel/experience')}>
            Experience
          </Button>
          <Button href="/sara_peel/projects" sx={linkStyle('/sara_peel/projects')}>
            Projects
          </Button>
          <Button href="/sara_peel/contact" sx={linkStyle('/sara_peel/contact')}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
