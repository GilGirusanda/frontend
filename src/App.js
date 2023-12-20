import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./scenes/dashboard/index";
import Sidebar from "./scenes/global/Sidebar.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Tasklist from "./components/list/Tasklist";
import Eventlist from "./components/list/Eventlist";
import Teamlist from "./components/list/Teamlist";
import Memberlist from "./components/list/Memberlist";
import Unauthorized from "./components/Unauthorized.js";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);

  // const checkLogin = () => {
  //   setIsSidebar(true);
  // };

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <MyNavbar />
            <main style={{ display: "flex" }}>
              <Sidebar isSidebar={isSidebar} />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/unauthorized" element={<Unauthorized />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/tasklist" element={<Tasklist />} />
                <Route path="/dashboard/eventlist" element={<Eventlist />} />
                <Route path="/dashboard/teamlist" element={<Teamlist />} />
                <Route path="/dashboard/memberlist" element={<Memberlist />} />
              </Routes>
            </main>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
