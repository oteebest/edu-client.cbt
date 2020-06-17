import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/account/Login";
import SignInOidc from "./components/account/SignInOidc";
import Dashboard from "./components/dashboard/Dashboard";
import Assessments from "./components/assessment/Assessments";
import Assessments2 from "./components/assessment/Assessments2";
import QuestionList from "./components/question/QuestionList";
import { IdentityManager } from "./util/identity";
import NotFound from "./components/common/NotFound";
import * as Constants from "./util/constants";

function App(props) {
  const [userLoginStatus, setLoginStatus] = useState({ status: "unknown" });

  async function GetUser() {
    const user = await IdentityManager.getUser();

    return user;
  }

  if (userLoginStatus.status === "unknown") {
    GetUser().then((u) => {
      if (u) {
        localStorage.setItem(Constants.ACCESS_TOKEN, u.access_token);

        setLoginStatus({ status: "true" });
      } else {
        setLoginStatus({ status: "false" });
      }
    });
  }

  if (userLoginStatus.status === "unknown") {
    return <div>IsLoading........</div>;
  } else if (userLoginStatus.status === "false") {
    return (
      <>
        <Switch>
          <Route path="/signin-oidc" component={SignInOidc} />
          <Route component={Login} />
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/assessments" exact component={Assessments} />
          <Route path="/question" exact component={QuestionList} />

          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
