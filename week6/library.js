class Library {

    static setDefaults(name, creator) {
        Library._defaultLibrary = new Library(name, creator);
    }

    constructor(name, creator) {
        if(arguments.length < 2) {
            console.log('Warning: not enough arguments were provided (name, creator) so library has been set to default.')
            this.name = Library._defaultLibrary.name;
            this.creator = Library._defaultLibrary.creator;
        } else {
            this.name = name;
            this.creator = creator;
        }
        this.playlists = [];
    }

    getPlaylists() {
        return this.playlists;
    }

    addPlaylist(playlist) {
        this.playlists.push(playlist);
    }

}

class Playlist {

    static setDefaults(name) {
        Playlist._defaultPlaylist = new Playlist(name);
    }

    constructor(name) {
        if(arguments.length === 0 ) {
            this.name = Playlist._defaultPlaylist.name;
        } else {
            this.name = name;
        }
        this.tracks = [];
    }

    getTracks() {
        return this.tracks;
    }

    addTrack(track) {
        this.tracks.push(track);
    }

    overallRating() {
        if (this.tracks.length === 0) return;
        if (this.tracks.length === 1) return this.tracks[0].rating;
        let averageRating = 0;
        for (let elem of this.tracks) {
            averageRating += elem.rating
        }
        averageRating = averageRating/this.tracks.length;
        return averageRating;
    }

    totalDuration() {
        if (this.tracks.length === 0) return 0;
        if (this.tracks.length === 1) return this.tracks[0].length;
        let totalDuration = 0;
        for (let elem of this.tracks) {
            totalDuration += elem.length;
        }
        return totalDuration;
    }

}

class Track {

    static setDefaults(title, rating, length) {
        Track._defaultTrack = new Track(title, rating, length)
    }

    constructor(title, rating, length) {
        if(arguments.length < 3) {
            console.log('Warning: not enough arguments were provided (title, rating, length) so track has been set to default.')
            this.title = Track._defaultTrack.title;
            this.rating = Track._defaultTrack.rating;
            this.length = Track._defaultTrack.length;
            return;
        } else {
            if(!Number.isInteger(rating) || rating > 5 || rating < 1) {
                throw new Error('Rating invalid')
            };
            this.title = title;
            this.rating = rating;
            this.length = length;
        }
    }

}

Library.setDefaults('No name', 'Anonymous creator');
Playlist.setDefaults('No name')

let lib = new Library('The Baboos', 'Bamboo');

let nightLife = new Playlist('Night Life');
let anonymous = new Playlist();
lib.addPlaylist(nightLife);
lib.addPlaylist(anonymous);
console.log(lib.getPlaylists());

let trackA = new Track('Dance Dance', 5, 154)
let trackB = new Track('Move to the Music', 2, 204)
nightLife.addTrack(trackA);
nightLife.addTrack(trackB);
console.log(nightLife.getTracks());
console.log(lib.getPlaylists());

console.log(lib.playlists[0].overallRating());
console.log(lib.playlists[0].totalDuration());