import { 
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector
} from "@mui/lab";
import {
  Typography
} from "@mui/material"

const WorkItem = ({ item }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        { item.dates }
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5">
          { item.title }
        </Typography>
        <Typography variant="body1">
          { item.company }
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkItem;
