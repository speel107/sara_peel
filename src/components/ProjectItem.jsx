import { 
  Box,
  Typography,
  Grid,
  Button,
  Chip
} from "@mui/material";
import { 
  offwhite,
  lightbrown,
  darkbrown,
  orange,
  blue
} from "./Header.jsx"

const ProjectItem = ({ item }) => {
  return (
    <Box sx={{ width: "100%", height: "auto", paddingX: "1rem", marginY: "1rem" }} >
      <Grid container sx={{ height: "100%", width: "100%" }}>
        <Grid item xs={2} 
          sx={{ 
            display: "flex", 
            justifyContent: "end", 
            width: "100%", 
            height: "100%",
          }} 
        > 
          <Box 
            sx={{ 
              width: "5rem", 
              height: "20rem", 
              backgroundColor: blue,
              borderRadius: "1rem 0 0 1rem" 
            }} 
          />
        </Grid>
        <Grid item xs={10} container direction="column" 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            backgroundColor: offwhite,
            padding: "1rem",
            height: "20rem",
            borderRadius: "0 1rem 1rem 0"
        }}>
          <Grid item>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {item.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              {item.timeline}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {item.description}
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: '1rem' }}>
              {item.stack.map((tech, index) => (
                <Chip key={index} label={tech} variant="outlined" sx={{ backgroundColor: lightbrown, color: darkbrown }} />
              ))}
            </Box>
          </Grid>
          <Grid item sx={{ marginTop: '1rem' }}>
            { item.button !== "N/A" ? 
              <Button 
                variant="contained" 
                rel="noopener"
                target="_blank"
                href={item.link} 
                sx={{ backgroundColor: orange, color: offwhite, '&:hover': { backgroundColor: darkbrown } }}
              >
                {item.button}
              </Button> : null }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectItem;


