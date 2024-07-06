import { 
  Grid 
} from '@mui/material';
import ProjectItem from '../ProjectItem';
import projectData from '../../data/projects.json'

const Projects = () => {
  return (
    <Grid container className='page' >
      {projectData.map((item) => (
        <Grid item xs={12} md={6} key={item.id}>
          <ProjectItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
