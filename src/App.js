import React, {useEffect} from 'react';
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
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch,useSelector } from "react-redux";
import Login from "./Login"
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid, 
        }))
      } else {
        dispatch(logout())
      }
    })
  },[])

  

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login /> 
        ): (
          <>
          <img className="app_logo" src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt=""/>
          <div className="app_body">
            <div className="app_background">
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
          </div>
          </>     
        )}
        
      </Router>
      
    </div>
  );
}

export default App;
