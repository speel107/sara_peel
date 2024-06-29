import { 
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="/sara_peel">
          Sara Peel
        </Button>
        <Button color="inherit" href="/sara_peel/about">
          About
        </Button>
        <Button color="inherit" href="/sara_peel/experience">
          Experience
        </Button>
        <Button color="inherit" href="/sara_peel/projects">
          Projects
        </Button>
        <Button color="inherit" href="/sara_peel/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
