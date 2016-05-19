'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($stateProvider){

	$stateProvider.state('allAlbums',{
		templateUrl: '/templates/allAlbumsTemplate.html',
		url: '/albums',
		controller: "AlbumsCtrl"
	});
	$stateProvider.state('oneAlbum',{
		templateUrl: '/templates/oneAlbumTemplate.html',
		url: '/album/:id',
		controller: "AlbumCtrl"
	});
	$stateProvider.state('allArtists',{
		templateUrl: '/templates/allArtists.html',
		url: '/artists',
		controller: "ArtistsCtrl"
	});


	$stateProvider.state('oneArtist',{
		templateUrl: '/templates/oneArtistTemplate.html',
		url: '/artist/:id',
		controller: "ArtistCtrl"
	})
	.state('oneArtist.artistAlbums', {
		templateUrl: '/templates/artistAlbums.html',
		url: '/albums',
		controller: 'ArtistCtrl'
	})
	.state('oneArtist.artistSongs', {
		templateUrl: '/templates/artistSongs.html',
		url: '/songs',
		controller: 'ArtistCtrl'
	});

});

