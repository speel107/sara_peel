import { 
  Box,
  Typography
} from "@mui/material";
import homeImage from "../../images/stgeorge-91.jpg";
import { 
  blue,
  offwhite,
} from "../Header.jsx"

const Home = () => {
  return (
    <Box style={{ 
      width: "100%", 
      height: "100%",
      display: "flex",
      flexDirection: "row",
      }} 
    >
      <Box style={{ flexGrow: 1, backgroundColor: blue }}>
        <Typography style={{ color: offwhite }}>
          Developer / Designer / Doesn't like the Dentist
        </Typography>
      </Box>
      <Box style={{ flexGrow: 1, backgroundColor: offwhite }} >
        <img src={homeImage} alt="Sara" style={{ objectFit: "contain", height: "98vh", width: "auto" }} />
      </Box>
    </Box>
  );
};

export default Home;
