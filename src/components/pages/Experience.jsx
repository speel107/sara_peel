import { 
  Box,
} from "@mui/material";
import {
  Timeline,
  timelineOppositeContentClasses
} from "@mui/lab";
import WorkItem from "../WorkItem";
import jobData from "../../data/jobs.json";

const Experience = () => {
  return (
    <Box className="page" >
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {jobData.map((item) => (
          <WorkItem item={item} key={item.id} />
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;
