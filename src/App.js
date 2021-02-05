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
import Chats from "./Chats"
import ChatView from "./ChatView";
import { selectUser } from './features/appSlice';
import { useDispatch,useSelector } from "react-redux";
import Login from "./Login"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login /> 
        ): (
          <div className="app_body">
            <Switch>
              <Route exact path="/Preview">
                <Preview />
              </Route>
              <Route exact path="/chats">
                <Chats />
              </Route>
              <Route exact path="/chats/view">
                <ChatView />
              </Route>
              <Route path="/">
                <WebcamCapture />
              </Route>
            </Switch>
          </div>     
        )}
        
      </Router>
      
    </div>
  );
}

export default App;
