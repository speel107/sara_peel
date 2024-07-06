import { 
  Box,
  Typography
} from "@mui/material";

const ProjectItem = ({ item }) => {
  return (
    <Box>
      <Typography variant="h4" > { item.name } </Typography>
      <Typography variant="body1" > { item.category } </Typography>
    </Box>
  );
};

export default ProjectItem;
