
var PublicSafetyEmail = 'syeom@villanova.edu';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state,  $ionicModal, $timeout, $ionicSlideBoxDelegate) {

  $scope.register = function(user){
    profile = angular.copy(user);
    a = JSON.stringify(profile);
    window.localStorage['profileName'] = profile['name']
    window.localStorage['profileVUID'] = profile['vuid']
    window.localStorage['profilePhone'] = profile['phone']
    window.localStorage['profileDorm'] = profile['dorm']
    window.localStorage.setItem("persistent", "true");
    $state.go('app.home');
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
  profilePhone =window.localStorage['profilePhone'] ;
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
  if (profilePhone == null){
    profilePhone = 'unknown';
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
                'html': '<body><h1> Name: '+ profileName + '</h1><h2> Phone Number: '+ profilePhone + '</h2><h2> VUID: '+ profileVUID + '</h2><h2> Dorm : '+ profileDorm+'<h2> GPS : Longitute:'+ GPSlong+ ' Latitude: '+GPSlang +'</h2><a href ="http://maps.google.com/maps?q='+GPSlang+','+GPSlong+'&ll='+GPSlang+','+GPSlong+'&z=17"><p> Click to open in Google Maps </p></a><br><p> Please note that no phone number is provided. Either we can ask users for # or Officers has to look up the number using novaid</p></body>'
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

  if (window.localStorage['anonymous'] == null){
    window.localStorage['anonymous'] = "false";
    $scope.showedit = false;
    $scope.showprofile = true;
    anonytoggle = false;
  }
  else if (window.localStorage['anonymous'] == "true"){
    $scope.showedit = false;
    $scope.showprofile = false;
    anonytoggle = true;
  }
  else{
    $scope.showedit = false;
    $scope.showprofile = true;
    anonytoggle = false;
  }

  $scope.profileName = window.localStorage['profileName'] ;
  $scope.profileVUID =  window.localStorage['profileVUID'] ;
  $scope.profilePhone = window.localStorage['profilePhone'] ;
  $scope.profileDorm =  window.localStorage['profileDorm'] ;

  $scope.goedit = function(){
    $scope.showedit = true;
    $scope.showprofile = false;
  }
  $scope.cancel = function(){
    $scope.showedit = false;
    $scope.showprofile = true;
  }
  $scope.profilesave = function(){
    $scope.showedit = false;
    $scope.showprofile = true;
  }

  $scope.AnonyChange = function() {
    if ($scope.showanony.checked){
      console.log("user wants to be anonymous");
      window.localStorage['anonymous'] = "true" ;


      $scope.showedit = false;
      $scope.showprofile = false;

      // move varialbes stored
        window.localStorage['profileName2'] = window.localStorage['profileName'] ;
        window.localStorage['profileVUID2'] =  window.localStorage['profileVUID'] ;
        window.localStorage['profilePhone2'] = window.localStorage['profilePhone'] ;
        window.localStorage['profileDorm2']  =  window.localStorage['profileDorm'] ;

        delete window.localStorage["profileName"]
        delete window.localStorage["profileVUID"]
        delete window.localStorage["profilePhone"]
        delete window.localStorage["profileDorm"]

    }
    else{
      console.log("user says it's okay to show profile");
      window.localStorage['anonymous'] = "false" ;
      $scope.showedit = false;
      $scope.showprofile = true;
      // transfer back the original values
        window.localStorage['profileName'] = window.localStorage['profileName2'] ;
        window.localStorage['profileVUID'] =  window.localStorage['profileVUID2'] ;
        window.localStorage['profilePhone'] = window.localStorage['profilePhone2'] ;
        window.localStorage['profileDorm']  =  window.localStorage['profileDorm2'] ;

    }
  };
  
  
  $scope.showanony = { checked: anonytoggle };
  console.log("username: "+window.localStorage['profileName'] + " userVUID : "+ window.localStorage['profileVUID'] + " user phone: "+window.localStorage['profilePhone']+ " Dorm: "+ window.localStorage['profileDorm'] + " anonymousboolean: "+window.localStorage['anonymous']);
});

;



