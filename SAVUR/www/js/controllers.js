angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state,  $ionicModal, $timeout, $ionicSlideBoxDelegate) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/profile.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeProfile = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.profile = function() {
    $scope.modal.show();
  };

  $scope.edit = function(){
     $scope.modal.hide();
    $state.go('app.intro');
    $ionicSlideBoxDelegate.slide(2);
  };

  // Perform the login action when the user submits the login form
  $scope.register = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  $scope.register = function(){
   $state.go('app.home');
    // cache the form inputs
  }

})
.controller('HomeCtrl',function($scope, $ionicPopup, $timeout) {

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Alert',
     template: 'Are you sure you want to alert the Public Safety? A message will be sent to the Public Safety with your profile information and your GPS location'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };


});

;



