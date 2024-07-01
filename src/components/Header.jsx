import { 
  AppBar,
  Toolbar,
  Button,
  Box
} from "@mui/material";

const Header = () => {
  const buttonColor = "#000000";

  return (
    <AppBar position="static" 
      sx={{
        backgroundColor: '#ffffff',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Button href="/sara_peel" style={{ color: buttonColor }}>
          Sara Peel
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button href="/sara_peel/about" style={{ color: buttonColor }}>
          About
        </Button>
        <Button href="/sara_peel/experience" style={{ color: buttonColor }}>
          Experience
        </Button>
        <Button href="/sara_peel/projects" style={{ color: buttonColor }}>
          Projects
        </Button>
        <Button href="/sara_peel/contact" style={{ color: buttonColor }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
