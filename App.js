import React, { useState } from 'react';
import './App.css';
import Dashboard from '../final-project/Dashbord';
import Preferences from '..final-project/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../final-project/Login';
const renderText = (props) => {
    return React.createElement(
        "div",
        {},
        [
   

    React.createElement("h2",{},props.name),
    React.createElement("h3",{},props.realize_date),
    React.createElement("h4",{},props.director)
])

}
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{id : "my-values"},"my films"),
            React.createElement(renderText,{name: "inception", realize_date:"2009", director:"nolan"}),
            React.createElement(renderText,{name: "inception", realize_date:"2009", director:"nolan"}),
            React.createElement(renderText,{name: "inception", realize_date:"2009", director:"nolan"})
        ]
    );
}

function App() {
    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken} />
      }
    
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

 ReactDOM.render(React.createElement(App),document.getElementById('root'));