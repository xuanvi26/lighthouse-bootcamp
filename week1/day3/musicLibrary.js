var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "James Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Thirty-Three",
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
               },
    printPlaylists: function () {
      for (var p in this.playlists) { 
          var name = this.playlists[p].name;
          var numOfTracks = this.playlists[p].tracks.length;
          console.log(p + ': ' + name + ' - ' + numOfTracks + ' tracks');
      }
    },
    printTracks: function () {
      for (var t in this.tracks) {
        var name = this.tracks[t].name;
        var artist = this.tracks[t].artist;
        var album = this.tracks[t].album;
        console.log(t + ': ' + name + ' by ' + artist + " (" + album + ")")
        }
      },
    printPlaylist: function (playlistId) {
      var id = this.playlists[playlistId].id;
      var name = this.playlists[playlistId].name;
      var numOfTracks = this.playlists[playlistId].tracks.length;
      console.log(id + ': ' + name + ' - ' + numOfTracks + ' tracks');

      var specificTracks = this.playlists[playlistId].tracks; 
      for (let i of specificTracks) {
        var name = this.tracks[i].name;
        var artist = this.tracks[i].artist;
        var album = this.tracks[i].album;
        console.log(i + ': ' + name + ' by ' + artist + " (" + album + ")")
      }
    },
    addTrackToPlaylist: function (trackId, playlistId) {
      var trackList = this.playlists[playlistId].tracks;
      trackList.push(trackId);
    },
    addTrack: function (name, artist, album) {
      var uniqueId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      var newTrackObj = {
        'id': uniqueId,
        'name': name,
        'artist': artist,
        'album': album
      }
     this.tracks[uniqueId] = newTrackObj;
    },
    addPlaylist: function (name) {
      var uniqueId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      var newPlaylistObj = {
        'id': uniqueId,
        'name': name,
        'tracks': []
      }
     this.playlists[uniqueId] = newPlaylistObj;
    },
    printSearchResults: function(query) {
      for (let trackId in this.tracks) {
        if (this.tracks[trackId].name.toLowerCase().search(query) >= 0 || this.tracks[trackId].artist.toLowerCase().search(query) >= 0 || this.tracks[trackId].album.toLowerCase().search(query) >= 0) {
          var name = this.tracks[trackId].name;
          var artist = this.tracks[trackId].artist;
          var album = this.tracks[trackId].album;
        console.log(trackId + ': ' + name + ' by ' + artist + " (" + album + ")")
        }
      } 
    }
  }

  library.printSearchResults('james');
  // library.addTrack('song name', 'artist name', 'album name');
  // library.addPlaylist('wowowow');
  // library.addTrackToPlaylist('t03', 'p01')
  // library.printPlaylists();
  // library.printTracks();
  // library.printPlaylist('p01');
  
  // generates a unique id
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
 