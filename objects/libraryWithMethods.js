const library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three'
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003'
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952'
    }
  },
  playlists: {
    p01: {
      id: 'p01',
      name: 'Coding Music',
      tracks: ['t01', 't02']
    },
    p02: {
      id: 'p02',
      name: 'Other Playlist',
      tracks: ['t03']
    }
  },

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    for (const play in this.playlists) {
      console.log(`${this.playlists[play].id}: ${this.playlists[play].name} - ${this.playlists[play].tracks.length} tracks`)
    }
  },

  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    for (const track in this.tracks) {
      console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
    }
  },

  // prints a track, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  printTrack: function (track) {
    console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
  },

  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`)
    for (const track of this.playlists[playlistId].tracks) {
      console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
    }
  },

  // adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)
  },

  // generates a unique id
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  },

  // adds a track to the library
  addTrack: function (name, artist, album) {
    const trackID = `t${this.generateUid()}`
    this.tracks[trackID] = {
      id: trackID,
      name,
      artist,
      album
    }
  },

  // adds a playlist to the library
  addPlaylist: function (name) {
    const playlistID = `p${this.generateUid()}`
    this.playlists[playlistID] = {
      id: playlistID,
      name,
      tracks: []
    }
  },

  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  printSearchResults: function (query) {
    const queries = query.toLowerCase().split(' ')
    for (const q of queries) {
      for (const track in this.tracks) {
        let match = false
        if (this.tracks[track].name.toLowerCase().search(q) > -1) {
          match = true
        } else if (this.tracks[track].artist.toLowerCase().search(q) > -1) {
          match = true
        } else if (this.tracks[track].album.toLowerCase().search(q) > -1) {
          match = true
        }
        if (match) {
          this.printTrack(track)
        }
      }
    }
  }
}


//Edge Case
//library.printTracks()
