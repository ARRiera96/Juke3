'use strict'; 

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, $log, PlayerFactory, AlbumFactory, $stateParams) {

  $scope.id= $stateParams.id; 
    AlbumFactory.fetchById($scope.id)
    .then(function (album) {
      $scope.album = album;
    })
    .catch($log.error);

  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, $log, $rootScope, PlayerFactory, AlbumFactory) {


  AlbumFactory.fetchAll()
  .then(function (albums) {
    $scope.albums = albums;
  })
  .catch($log.error); // $log service can be turned on and off; also, pre-bound

});
