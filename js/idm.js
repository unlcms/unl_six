(function (drupalSettings) {
  window.UNL.idm.pushConfig('loginRoute', drupalSettings.path.baseUrl + 'caslogin?destination=' + drupalSettings.path.currentPath);
  window.UNL.idm.pushConfig('logoutRoute', drupalSettings.path.baseUrl + 'user/logout');
})(drupalSettings);
