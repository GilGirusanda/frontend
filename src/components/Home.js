import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Solid Organizer
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Manage your tasks and events efficiently!
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" gutterBottom>
            Tasks
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Keep track of your to-do list, organize your day, and stay
            productive.
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            View Tasks
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" gutterBottom>
            Events
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Plan and manage your events, never miss an important date again.
          </Typography>
          <Button variant="contained" color="secondary" fullWidth>
            View Events
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
