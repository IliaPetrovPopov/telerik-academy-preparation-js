// Create a class representing a music playlist.
// It should have properties for the title and
// the songs in the playlist, as well as
// methods to add and remove songs and
// to shuffle the playlist.

class Playlist {
    constructor(title, songs) {
        this.title = title;
        this.songs = songs.split(", ");
    }

    // Fisher-Yates algorithm for shuffle
    shuffle() {
        for(let i = this.songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
        }
    }

    addSong(song) {
        this.songs.push(song);
    }

    removeSong(song) {
        let index = this.songs.indexOf(song);
        this.songs.splice(index, 1);
    }
}

let pl = new Playlist("Rock culture", "Highway to Hell, sss, khrp, sql");