import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        Dashboard
      </Box>
    </Box>
  );
};

export default Dashboard;
