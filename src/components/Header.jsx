import { 
  AppBar,
  Toolbar,
  Box
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";

export const blue = "#192340";
export const darkgreen = "#4F5902";
export const green = "#B9BF04";
export const yellow = "#D9CB04";
export const offwhite = "#E9EBF2";

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? green : darkgreen,
    fontWeight: location.pathname === path ? "bold" : "normal",
    height: "100%", // Ensures button height matches the toolbar
    padding: "0 16px", // Adjust padding as needed
    display: "flex",
    alignItems: "center", // Centers text vertically
    textDecoration: "none", // Removes underline from links
    '&:hover': {
      color: green,
      fontWeight: "bold"
    }
  });

  return (
    <AppBar position="sticky" 
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
        <Link to="/" style={linkStyle('/')}>
          Sara Peel
        </Link>
        <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
          {/* <Link to="/about" style={linkStyle('/about')}>
            About
          </Link> */}
          {/* <Link to="/experience" style={linkStyle('/experience')}>
            Experience
          </Link> */}
          <Link to="/projects" style={linkStyle('/projects')}>
            Projects
          </Link>
          <Link to="/contact" style={linkStyle('/contact')}>
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
