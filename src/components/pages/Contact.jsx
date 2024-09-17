import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      {/* Title with Typography */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5, // Margin top for spacing
        }}
      >
        <Typography variant="h4" component="h1">
          Contact Sara
        </Typography>
      </Box>

      {/* Icon buttons centered */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3, // Additional margin to space out from the title
        }}
      >
        {/* Row of Icon Buttons */}
        <IconButton sx={{ fontSize: 60 }} onClick={() => handleIconClick('mailto:sarampeel@gmail.com')}>
          <EmailIcon fontSize="inherit" />
        </IconButton>
        <IconButton sx={{ fontSize: 60 }} onClick={() => handleIconClick('https://github.com/speel107')}>
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton sx={{ fontSize: 60 }} onClick={() => handleIconClick('https://www.linkedin.com/in/sara-peel-28087022a/')}>
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Contact;

