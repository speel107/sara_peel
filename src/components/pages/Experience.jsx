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
    <Box className="page" sx={{ display: "flex", justifyContent: "center" }} >
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            display: 'block', // Remove flex to prevent extra space
            textAlign: 'right', // Align text to the right
            marginRight: '0', // Prevent right-side margin
            maxWidth: '150px', // Adjust as needed
          },
          "& .MuiTimelineContent-root": {
            maxWidth: "300px", // Restrict width of right side
          }
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
