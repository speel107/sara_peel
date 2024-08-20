import { 
  Grid 
} from '@mui/material';
import ProjectItem from '../ProjectItem';
import projectData from '../../data/projects.json'

const Projects = () => {
  return (
    <Grid container className="page" columnSpacing={2} sx={{ width: "96%" }} >
      {projectData.map((item) => (
        <Grid item xs={12} md={6} key={item.id} sx={{ marginTop: "2rem" }} >
          <ProjectItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
