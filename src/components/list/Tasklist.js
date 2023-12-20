import React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Tasklist() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);

  return (
    <>
      <Grid item xs={12} md={6} sx={{ width: 0.7, ml: 8 }}>
        <Typography
          sx={{ mt: 4, mb: 2, pt: 2, pb: 2 }}
          variant="h2"
          component="div"
          align="center"
          style={{ border: "1px solid white" }}
        >
          Tasklist
        </Typography>
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  {" "}
                  <Avatar>
                    <CreateIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid>
    </>
  );
}

export default Tasklist;
