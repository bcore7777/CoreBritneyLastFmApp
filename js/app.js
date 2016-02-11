// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var MusicApp = angular.module('MusicApp', ['ionic', 'ngRoute'])

.run(function($ionicPlatform, $rootScope, $location) {

  $rootScope.goBack = function(){
    $location.path('/genre');
  }

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//Route Providers

MusicApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html'
    })
    .when('/genre', {
      templateUrl: 'partials/genre.html'
    })
    .when('/countrylist', {
      controller: 'CountryController',
      templateUrl: 'partials/countrylist.html'
    })
    .when('/countrydetail/:itemId',
    {
      controller: 'CountryDetailController',
      templateUrl: 'partials/countrydetail.html'
    })
    .when('/poplist', {
      controller: 'PopController',
      templateUrl: 'partials/poplist.html'
    })
    .when('/popdetail/:itemId',
    {
      controller: 'PopDetailController',
      templateUrl: 'partials/popdetail.html'
    })
    .when('/dancelist', {
      controller: 'DanceController',
      templateUrl: 'partials/dancelist.html'
    })
    .when('/dancedetail/:itemId',
    {
      controller: 'DanceDetailController',
      templateUrl: 'partials/dancedetail.html'
    })
    .when('/rblist', {
      controller: 'RBController',
      templateUrl: 'partials/rblist.html'
    })
    .when('/rbdetail/:itemId',
    {
      controller: 'RBDetailController',
      templateUrl: 'partials/rbdetail.html'
    })
    .when('/mentallist', {
      controller: 'MetalController',
      templateUrl: 'partials/metallist.html'
    })
    .when('/metaldetail/:itemId',
    {
      controller: 'MetalDetailController',
      templateUrl: 'partials/metaldetail.html'
    })
    .when('/tophits', {
      templateUrl: 'partials/tophits.html'
    })
    .when('/toptracklist', {
      controller: 'TopTrackController',
      templateUrl: 'partials/toptracklist.html'
    })
    .when('/toptrackdetail/:itemId',
    {
      controller: 'TopTrackDetailController',
      templateUrl: 'partials/trackdetail.html'
    })
    .when('/topartistlist', {
      controller: 'TopArtistController',
      templateUrl: 'partials/topartistlist.html'
    })
    .when('/topartistdetail/:itemId',
    {
      controller: 'TopArtistDetailController',
      templateUrl: 'partials/topartistdetail.html'
    })
    .when('/topalbumlist', {
      controller: 'TopAlbumController',
      templateUrl: 'partials/topalbumlist.html'
    })
    .when('/topalbumdetail/:itemId',
    {
      controller: 'TopAlbumDetailController',
      templateUrl: 'partials/topalbumdetail.html'
    })
    .otherwise({redirectTo: '/home'});
}]);

//Controllers

MusicApp.controller('CountryController', ['$scope', '$http', function($scope, $http){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=country&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json").then(function(response){
  $scope.albums = response.data.albums.album;
  //console.log(response.albums.album[0]);
  console.log($scope.albums);
  });
}]);

MusicApp.controller('CountryDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=country&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json")
  .then(function(response){
    $scope.name = response.data.albums.album[$routeParams.itemId].name;
    //$scope.artist.name = response.data.albums.album[$routeParams.itemId].artist.name;
    $scope.image = response.data.albums.album[$routeParams.itemId].image;
    $scope.mbid = response.data.albums.album[$routeParams.itemId].mbid;
    $scope.url = response.data.albums.album[$routeParams.itemId].url;
  });

}]);

MusicApp.controller('PopController', ['$scope', '$http', function($scope, $http){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=pop&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json").then(function(response){
  $scope.albums = response.data.albums.album;
  //console.log(response.albums.album[0]);
  console.log($scope.albums);
  });
}]);

MusicApp.controller('PopDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=pop&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json")
  .then(function(response){
    $scope.name = response.data.albums.album[$routeParams.itemId].name;
    //$scope.artist.name = response.data.albums.album[$routeParams.itemId].artist.name;
    //$scope.image[3] = response.data.albums.album[$routeParams.itemId].image[3];
    $scope.mbid = response.data.albums.album[$routeParams.itemId].mbid;
    $scope.url = response.data.albums.album[$routeParams.itemId].url;
  });

}]);

MusicApp.controller('DanceController', ['$scope', '$http', function($scope, $http){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=dance&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json").then(function(response){
  $scope.albums = response.data.albums.album;
  //console.log(response.albums.album[0]);
  console.log($scope.albums);
  });
}]);

MusicApp.controller('DanceDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=dance&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json")
  .then(function(response){
    $scope.name = response.data.albums.album[$routeParams.itemId].name;
    //$scope.artist.name = response.data.albums.album[$routeParams.itemId].artist.name;
    //$scope.image[3] = response.data.albums.album[$routeParams.itemId].image[3];
    $scope.mbid = response.data.albums.album[$routeParams.itemId].mbid;
    $scope.url = response.data.albums.album[$routeParams.itemId].url;
  });

}]);

MusicApp.controller('RBController', ['$scope', '$http', function($scope, $http){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=rb&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json").then(function(response){
  $scope.albums = response.data.albums.album;
  //console.log(response.albums.album[0]);
  console.log($scope.albums);
  });
}]);

MusicApp.controller('RBDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=rb&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json")
  .then(function(response){
    $scope.name = response.data.albums.album[$routeParams.itemId].name;
    //$scope.artist.name = response.data.albums.album[$routeParams.itemId].artist.name;
    //$scope.image[3] = response.data.albums.album[$routeParams.itemId].image[3];
    $scope.mbid = response.data.albums.album[$routeParams.itemId].mbid;
    $scope.url = response.data.albums.album[$routeParams.itemId].url;
  });

}]);

MusicApp.controller('MetalController', ['$scope', '$http', function($scope, $http){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=metal&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json").then(function(response){
  $scope.albums = response.data.albums.album;
  //console.log(response.albums.album[0]);
  console.log($scope.albums);
  });
}]);

MusicApp.controller('MetalDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get("http://ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=metal&limit=20&api_key=07fb3e062181df5b679d0ed70fb4477b&format=json")
  .then(function(response){
    $scope.name = response.data.albums.album[$routeParams.itemId].name;
    //$scope.artist.name = response.data.albums.album[$routeParams.itemId].artist.name;
    //$scope.image[3] = response.data.albums.album[$routeParams.itemId].image[3];
    $scope.mbid = response.data.albums.album[$routeParams.itemId].mbid;
    $scope.url = response.data.albums.album[$routeParams.itemId].url;
  });

}]);





















