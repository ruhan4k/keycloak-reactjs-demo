import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json");

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: "login-required",
    })
    .then((authenticated) => {
      debugger;
      console.log(_kc.token);
      console.log(_kc.refreshToken);
      if (authenticated) {
        onAuthenticatedCallback();
      } else {
        doLogin();
      }
    });
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;
