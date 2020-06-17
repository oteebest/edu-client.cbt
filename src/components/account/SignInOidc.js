import React from "react";
import Oidc from "oidc-client";

const SignInOidc = (props) => {
  function SignIn() {
    new Oidc.UserManager({ response_mode: "query" })
      .signinRedirectCallback()
      .then(function () {
        window.location = "/";
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  SignIn();

  return <div>Signed In</div>;
};

export default SignInOidc;
