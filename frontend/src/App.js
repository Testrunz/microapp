
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

import DOE from "./pages/DOE";
import FMEA from "./pages/FMEA";
import MindmapMermaid from "./pages/MindmapMermaid";
import ProcessMap from "./pages/ProcessMap";
import SequenceDiagram from "./pages/SequenceDiagram";
import Setting from "./pages/Setting";
import MindmapPlantuml from "./pages/MindmapPlantuml";
import TestCases from "./pages/TestCases";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useState } from "react";
import DOESettings from "./components/Settings/DOESettings";
import FMEASettings from "./components/Settings/FMEASettings";
import TestcaseSettings from "./components/Settings/TestcaseSettings";
import MermaidSettings from "./components/Settings/MermaidSettings";
import MindmapSettings from "./components/Settings/MindmapSettings";
import ProcessmapSettings from "./components/Settings/ProcessmapSettings";
import SequenceSettings from "./components/Settings/SequenceSettings";

function App() {
  const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Link to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      }
    />
  );
  return (
    <Router>

      
      {/* Routes for login and signup */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes> */}

      {/* {isAuthenticated && ( */}
        <SideBar>
          <Routes>
            <Route path="/" element={<DOE />} />
            <Route path="/fmea" element={<FMEA />} />
            <Route path="/mindmap-mermaid" element={<MindmapMermaid />} />
            <Route path="/mindmap-plantuml" element={<MindmapPlantuml />} />
            <Route path="/process-map" element={<ProcessMap />} />
            <Route path="/sequence-diagram" element={<SequenceDiagram />} />
            <Route path="/test-cases" element={<TestCases />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/doe-settings" element={<DOESettings />} />
            <Route path="/fmea-settings" element={<FMEASettings />} />
            <Route path="/test-cases-settings" element={<TestcaseSettings />} />
            <Route path="/mindmap-mermaid-settings" element={<MermaidSettings />} />
            <Route path="/mindmap-plantuml-settings" element={<MindmapSettings />} />
            <Route path="/process-map-settings" element={<ProcessmapSettings />} />
            <Route path="/sequence-diagram-settings" element={<SequenceSettings />} />
            
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      {/* )} */}
    </Router>
  );
}

export default App;
