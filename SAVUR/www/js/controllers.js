
var PublicSafetyEmail = 'syeom@villanova.edu';

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

  
  profileName = window.localStorage['profileName'] ;
  profileVUID =  window.localStorage['profileVUID'] ;
  profileDorm =  window.localStorage['profileDorm'] ;
  if (profileName == null){
    profileName = 'anonymous';
  }
  if (profileVUID == null){
    profileVUID = 'unknown';
  }
  if (profileDorm == null){
    profileDorm = 'unknown';
  } 
  // this has to be dynamic
  GPSlang = 40.035110;
  GPSlong = -75.337355;


 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Alert',
     template: 'Are you sure you want to alert the Public Safety? A message will be sent to the Public Safety with your profile information and your GPS location'
   });
   confirmPopup.then(function(res) {
     if(res) {

           $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              'key': 'SSCZCrdD5D9q4IKd4P7b1g',
              'message': {
                'from_email': 'SAVUR@villanova.edu',
                'to': [
                    {
                      'email': PublicSafetyEmail,
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': 'SaVUr Emergency Alert!! ',
                'html': '<body><h1> Name: '+ profileName + '</h1><h2> VUID: '+ profileVUID + '</h2><h2> Dorm : '+ profileDorm+'<h2> GPS : Longitute:'+ GPSlong+ ' Latitude: '+GPSlang +'</h2><a href ="http://maps.google.com/maps?q='+GPSlang+','+GPSlong+'&ll='+GPSlang+','+GPSlong+'&z=17"><p> Click to open in Google Maps </p></a><br><p> Please note that no phone number is provided. Either we can ask users for # or Officers has to look up the number using novaid</p></body>'
              }
            }
           }).done(function(response) {
            
               var alertPopup = $ionicPopup.alert({
                 title: 'SAVUR',
                 template: 'Public Safety has been alerted. They will contact you very shortly'
               });
               alertPopup.then(function(res) {
               });
             
             console.log(response); 
           });




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



