import React from "react";
// import Form from "./components/form";
import { Routes, Route } from 'react-router-dom';
import MenuBar from "./components/SideBar/MenuBar";
import ActivitiesPage from "./components/BasicActivities/ActivitiesPage";
import ErrorsPage from "./components/Errors/ErrorsPage"
import MemoryPage from "./components/Memory/MemoryPage";
// import TestGraph from "./TestGraph.jsx";
import PerformancePage from "./components/Performance/PerformancePage"
import PersistencePage from "./components/Persistence/PersistencePage"

const App = (props) => {
  return (
    <div>
      <h1>myApp</h1>
      <MenuBar />
      <Routes>
        <Route path="/BasicActivities" element={ <ActivitiesPage />} />
        <Route path="/Errors" element={ <ErrorsPage  />} />
        <Route path="/Memory" element={ <MemoryPage /> } />
        <Route path="/Performance" element={ <PerformancePage />} />
        <Route path="/Persistence" element={ <PersistencePage />}  />
      {/* <Form /> */}
      </Routes>
    </div>
  );
};

export default App;
