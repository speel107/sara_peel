import { 
  Box,
  Typography,
  Grid
} from "@mui/material";
import LawImage from "../images/LawSchool-SM.jpg"

const ProjectItem = ({ item }) => {
  return (
    <Box sx={{ width: "100%", height: "15rem", marginX: "3rem", marginY: "1rem" }} >
      <Grid container style={{ height: "100%", width: "100%" }}>
        <Grid item xs={3} style={{ width: "100%", height: "100%", overflow: "hidden" }} > 
          <img src={LawImage} alt="Project Logo" style={{ objectFit: "cover" }} />
        </Grid>
        <Grid item xs={9} container style={{}}>
          <Grid item xs={12} >
            <Typography variant="subtitle1"  >
              { item.timeline }
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h5" >
              { item.name }
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="body1" >
              { item.description }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectItem;
