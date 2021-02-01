import React from 'react';
import './App.css';
import WebcamCapture from "./WebcampCapture";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from "./Preview"

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
          <Switch>
            <Route exact path="/Preview">
              <Preview />
            </Route>
            <Route path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
