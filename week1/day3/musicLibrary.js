var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               }
  }

  
  // FUNCTIONS TO IMPLEMENT:
  
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  
  var printPlaylists = function () {
    for (var p in library.playlists) { 
        var name = library.playlists[p].name;
        var numOfTracks = library.playlists[p].tracks.length;
        console.log(p + ': ' + name + ' - ' + numOfTracks + ' tracks');
    }
  } 
 
  
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  
  var printTracks = function () {
    for (var t in library.tracks) {
      //recall that this is an array
      var name = library.tracks[t].name;
      var artist = library.tracks[t].artist;
      var album = library.tracks[t].album;
      console.log(t + ': ' + name + ' by ' + artist + " (" + album + ")")
      }
    }


  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  
  var printPlaylist = function (playlistId) {
      // input has to be a string
      var id = library.playlists[playlistId].id;
      var name = library.playlists[playlistId].name;
      var numOfTracks = library.playlists[playlistId].tracks.length;
      console.log(id + ': ' + name + ' - ' + numOfTracks + ' tracks');

      var specificTracks = library.playlists[playlistId].tracks; 
      for (var i = 0; i < specificTracks.length; i++) {
        var name = library.tracks[specificTracks[i]].name;
        var artist = library.tracks[specificTracks[i]].artist;
        var album = library.tracks[specificTracks[i]].album;
        console.log(specificTracks[i] + ': ' + name + ' by ' + artist + " (" + album + ")")
      }
  }
  
  // adds an existing track to an existing playlist
  
  var addTrackToPlaylist = function (trackId, playlistId) {
    //recall that this is an array
    var trackList = library.playlists[playlistId].tracks;
    trackList.push(trackId);
  }
  
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  // adds a track to the library
  
  var addTrack = function (name, artist, album) {
  
  }
  
  
  // adds a playlist to the library
  
  var addPlaylist = function (name) {
  
  }
  
  
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
  var printSearchResults = function(query) {
  
  }