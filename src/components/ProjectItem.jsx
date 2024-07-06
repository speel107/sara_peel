import { 
  Box,
  Typography
} from "@mui/material";

const ProjectItem = ({ item }) => {
  return (
    <Box sx={{ paddingX: "3rem", paddingY: "1rem" }} >
      <Typography variant="h5" > { item.name } </Typography>
      <Typography variant="body1" > { item.category } </Typography>
    </Box>
  );
};

export default ProjectItem;
