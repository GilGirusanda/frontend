import React, { useState, useEffect } from "react";
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

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Tasklist() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);

  const [tasks, setTasks] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  const handleDeleteTaskEvent = (id) => {
    // console.log(id);

    // var index = tasks.indexOf(id);
    // console.log("index", index);

    // var newArray = tasks;
    // console.log("newArray before:", newArray);
    // if (index !== -1) newArray.splice(index, 1);

    // console.log("newArray after:", newArray);
    // setTasks(newArray);

    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // useEffect(() => {
  //   // const fetchedTasks = [0, 1, 2];
  //   console.log("USE EFFECT");
  // }, [tasks]);

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
          <List dense={dense} sx={{ pt: 0, pb: 0 }}>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteTaskEvent(task.id)}
                  >
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
            ))}
          </List>
        </Demo>
      </Grid>
    </>
  );
}

export default Tasklist;
