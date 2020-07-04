import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SurveyList from "./components/surveylist.component";
import AddSurvey from "./components/addsurvey.component";
import EditSurvey from "./components/editsurvey.component";
import Navbar from "./components/navbar.component";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route path="/" exact component={SurveyList} />
      <Route path="/add" component={AddSurvey}></Route>
      <Route path="/edit/:id" component={EditSurvey} />
    </Router>
  );
}

export default App;
