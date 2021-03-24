import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './Chat';
import './App.css';
import { useStateValue } from './stateProvider';
import Login from './Login';
function App() {
  const [{user}, dispatch] = useStateValue();
  // dispatch({
  //   type: 'GET_USER'
  // })
  console.log(user)
  return (
    <div className="app">
      { !user ? (
        <Login />
      ) : (
      <Router >
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>
                Click on channels!
              </h1>
            </Route>
          </Switch>
        </div>
      </Router>
      )}
    </div>
  );
}

export default App;
