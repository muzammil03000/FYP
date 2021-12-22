import React from "react";
// import LoginPage from "./components/LoginPage/LoginPage";
// import Chart from "./components/Chart/Chart";
import LoginPage from "./components/LoginPage/LoginPage";
import Register from "./components/RegisterPage/RegisterPage";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import index from "./components/js/Index";
function App() {
  // let history = useHistory();
  return (
    // <div>
    //     {/*<Chart/>*/}
    //     {/*<Login/>*/}
    //     <LoginPage/>
    // </div>
    <Router>
      <Switch>
      <Route exact path="/">
    <Redirect to="/index" />
</Route>

        <Route exact path ="/login" component={LoginPage}/>
        <Route exact path ="/index" component={index}/>
        
        <Route exact path ="/RegisterPage" component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
