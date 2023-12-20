import React from "react";
import Tasklist from "./list/Tasklist";
import Eventlist from "./list/Eventlist";
import Teamlist from "./list/Teamlist";
import Memberlist from "./list/Memberlist";
import Sidebar from "../scenes/global/Sidebar";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>

      <Tasklist />
      <Eventlist />
      <Teamlist />
      <Memberlist />
    </>
  );
}

export default Dashboard;
