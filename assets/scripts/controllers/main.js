'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    
    messageService.getMessages().then(function ( response ) {
      console.log(11111, response.data.messages);
      $scope.messages = response.data.messages;
    });


    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          console.log(22222, response.data.messages);
          $scope.messages = response.data.messages;
        });
      }
    };

   

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
