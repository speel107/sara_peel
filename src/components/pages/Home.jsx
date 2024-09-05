import { 
  Box,
  Typography,
} from "@mui/material";
import homeImage from "../../images/grad-31.png";
import { 
  blue,
} from "../Header.jsx"

const Home = () => {
  return (
    <Box className="page" style={{ 
      width: "100%", 
      height: "95vh",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <img
        src={homeImage}
        alt="Feature"
        style={{ 
          width: "20rem",
        }}
      />
      <Box sx={{ 
        textAlign: { xs: 'center', md: 'left' }, 
        width: "40%",
        paddingLeft: "2rem",
      }}>
        <Typography variant="h2" gutterBottom color={blue} >
          Hi, I'm Sara Peel!
        </Typography>
        <Typography variant="h6" color={blue} paragraph lineHeight="1.65rem" >
          I’m a recent graduate in Computer Science with experience in development, 
          talent for organization and communication, and a passion for solving human 
          problems through technology.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
