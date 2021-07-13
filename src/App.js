import React from 'react';
import SignInPage from "./components/templates/SignInPage";
import {Route, Switch} from "react-router-dom";
import {SignUpPage} from "./components/templates/SignUpPage";
import {AdminSignUpPage} from "./components/templates/AdminSignUpPage";
import CodeVerifyPage from "./components/templates/CodeVerifyPage";
import {Home} from "./components/templates/Home";

function App() {
    return (
        <Switch>
            <Route path="/register" component={SignUpPage}/>
            <Route path="/registerAdmin" component={AdminSignUpPage}/>
            <Route path="/verify" component={CodeVerifyPage}/>
            <Route path="/login" component={SignInPage}/>
            <Route path="/home" component={Home}/>
            <Route path="/" component={Home}/>
        </Switch>
    );
}

export default App;
