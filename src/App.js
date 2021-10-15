import React from "react";
import './App.scss';
import Noteslist from './pages/Noteslist';
import EditNote from './pages/EditNote';
import CreateNote from './pages/CreateNote';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './images/favicon.png'

function App() {
  return (
    <Router>
      <div>
      <div class="header">
        <img src={logo} alt=""/>
        <p>Your notes app with tags</p>
      </div>
        <Switch>
          <Route exact path="/" component={Noteslist}/>
          <Route exact path="/notes/:id/edit" component={EditNote} />
          <Route exact path="/notes/create" component={CreateNote} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

