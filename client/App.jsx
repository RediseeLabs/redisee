import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ActivitiesPage from "./components/BasicActivities/ActivitiesPage";
import ErrorsPage from "./components/Errors/ErrorsPage";
import MemoryPage from "./components/Memory/MemoryPage";
import PerformancePage from "./components/Performance/PerformancePage";
import PersistencePage from "./components/Persistence/PersistencePage";

const App = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="/BasicActivities" element={<ActivitiesPage />} />
        <Route path="/Errors" element={<ErrorsPage />} />
        <Route path="/Memory" element={<MemoryPage />} />
        <Route path="/Performance" element={<PerformancePage />} />
        <Route path="/Persistence" element={<PersistencePage />} />
      </Routes>
    </div>
  );
};

export default App;
