
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state,  $ionicModal, $timeout, $ionicSlideBoxDelegate) {

  $scope.register = function(user){
    profile = angular.copy(user);
    a = JSON.stringify(profile);
    window.localStorage['profileName'] = profile['name']
    window.localStorage['profileVUID'] = profile['vuid']
    window.localStorage['profileDorm'] = profile['dorm']
    window.localStorage.setItem("persistent", "true");
    $state.go('app.home');
  };

 
  $scope.edit = function(){
    $state.go('app.intro');
    $ionicSlideBoxDelegate.slide(2); // doesn't work.. need to find a way to redirect to slide 3
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

  ;

 $scope.homebg = "img/v"+Math.floor((Math.random() * 5) + 1)+".jpg";

})

.controller('ReportAssaultCtrl',function($scope) {
	
})

.controller('TalkCtrl',function($scope) {
	
})

.controller('MedicalHelpCtrl',function($scope) {
	
})

.controller('InformationCtrl',function($scope) {
	
})

.controller('BeforeYouGoCtrl',function($scope, $ionicSlideBoxDelegate) {
	  
})

.controller('GettingThereCtrl',function($scope, $ionicSlideBoxDelegate) {
	  
})

.controller('TalkOnCampusCtrl',function($scope, $ionicSlideBoxDelegate) {
    
})

.controller('TalkOffCampusCtrl',function($scope, $ionicSlideBoxDelegate) {
    
})

.controller('SexualAssaultPamphletCtrl',function($scope, $ionicSlideBoxDelegate) {
    
})

.controller('ProfileCtrl', function($scope){
      $scope.profileName = window.localStorage['profileName'] ;
      $scope.profileVUID =  window.localStorage['profileVUID'] ;
      $scope.profileDorm =  window.localStorage['profileDorm'] ;
});

;



