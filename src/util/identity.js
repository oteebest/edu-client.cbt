import Oidc from "oidc-client";

var config = {
  authority: "https://localhost:5001",
  client_id: "CBT",
  redirect_uri: "http://localhost:3000/signin-oidc",
  response_type: "code",
  scope: "openid profile cbtapi",
  post_logout_redirect_uri: "http://localhost:3000/signout-callback-oidc",
  metadata: {
    issuer: `https://localhost:5001`,
    authorization_endpoint: `https://localhost:5001/connect/authorize`,
    token_endpoint: `https://localhost:5001/connect/token`,
    jwks_uri: "https://localhost:5001/.well-known/openid-configuration/jwks",
    end_session_endpoint: `https://localhost:5001/connect/endsession`,
  },
};

export const IdentityManager = new Oidc.UserManager(config);
