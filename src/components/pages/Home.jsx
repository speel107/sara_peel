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
    <Box className="page" style={{ 
      width: "100%", 
      height: "100%",
      display: "flex",
      flexDirection: "row",
    }}>
      <Box style={{ flexGrow: 1 }}>
        <Typography style={{ color: blue }}>
          This page is under construction. Please check back later for updates!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
