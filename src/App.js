import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import TimetableComponent from "./components/time-table";
import { Container } from "@material-ui/core";
import LoginScreen from "./screens/login-screen.js";
import TeacherTimetable from "./screens/teacher-timetable-screen";

function App() {
  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
}

export default App;
