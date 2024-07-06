import { 
  AppBar,
  Toolbar,
  Button,
  Box
} from "@mui/material";

export const blue = "#3C4E73";
export const darkbrown = "#40240C";
export const orange = "#BF6F41";
export const midbrown = "#73503C";
export const lightbrown = "#D9A78B";
export const offwhite = "#FAF7FC";

const Header = () => {
  return (
    <AppBar position="static" 
      sx={{
        backgroundColor: offwhite,
        boxShadow: 'none',
        display: 'flex',
      }}
    >
      <Toolbar style={{ 
        width: "1290px", 
        alignSelf: "center",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Button href="/sara_peel" style={{ color: darkbrown }}>
          Sara Peel
        </Button>
        {/* <Box sx={{ flexGrow: 1 }} /> */}
        <Box>
        <Button href="/sara_peel/about" style={{ color: darkbrown }}>
          About
        </Button>
        <Button href="/sara_peel/experience" style={{ color: darkbrown }}>
          Experience
        </Button>
        <Button href="/sara_peel/projects" style={{ color: darkbrown }}>
          Projects
        </Button>
        <Button href="/sara_peel/contact" style={{ color: darkbrown }}>
          Contact
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
