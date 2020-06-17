import React, { useEffect } from "react";
import { IdentityManager } from "../../util/identity";

const Login = function () {
  useEffect(() => {
    async function DoLogin() {
      IdentityManager.signinRedirect();
    }

    DoLogin();
  });

  return (
    <>
      <div>Login</div>
    </>
  );
};

export default Login;
