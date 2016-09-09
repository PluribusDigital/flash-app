/* global _ */
(function() {
  'use strict';

  angular
    .module('flashApp')
    .factory('authService', authService);


  function authService($log, $q, $rootScope, $sessionStorage, flashService) {
    var identity = null;

    return {
      isAuthenticated: isAuthenticated,
      setIdentity: setIdentity,
      getIdentity: getIdentity,
      authenticate: authenticate,
      unauthenticate: unauthenticate
    };

    function isAuthenticated() {

    }

    function setIdentity(_identity_) {
      identity = _identity_;
    }

    function getIdentity() {
      if (identity) {
        return $q(function(resolve) {
          resolve(identity);
        })
      } else if ($sessionStorage.userCredentials) {
        return authenticate($sessionStorage.userCredentials.username, $sessionStorage.userCredentials.password);
      }

      return $q(function(resolve, reject) {
        reject({
          message: 'Not logged in'
        })
      });
    }

    function authenticate(username, password) {
      $sessionStorage.userCredentials = {
        username: username,
        password: password
      };

      $rootScope.username = username;
      $rootScope.password = password;

      return $q(function(resolve, reject) {
        flashService.resource('users').get(username)
          .then(function(res){
            identity = res.data.data;

            resolve(identity);
          })
          .catch(function(err) {
            reject(err);
          });
      });
    }

    function unauthenticate() {
      identity = null;
      $sessionStorage.userCredentials = null;
      $rootScope.username = null;
      $rootScope.password = null;
    }
  }
})();
