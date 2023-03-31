const actors = new WeakMap();
const rating = new WeakMap();

class Movie {
    constructor(title, director, releaseYear, genre) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.genre = genre;
        actors.set(this, []);
        rating.set(this, []);
    }

    addActor(actor) {
        actors.get(this).push(actor);
    }

    removeActor(actor) {
        if(actors.get(this).length === 0) {
            throw new Error("The cast is empty");
        }
        
        let index = actors.get(this).indexOf(actor);
        
        if(index === -1) {
            throw new Error("This actor is not in the cast");
        }

        actors.get(this).splice(index, 1);
    }
    
    showActors() {
        let cast = actors.get(this).reduce((cast, currentNum) => cast + ", " + currentNum)
        return cast;
    }

    addReview(review) {
        rating.get(this).push(review);
    }

    rating() {
        return (rating.get(this).reduce((accumulator, currentNum) =>
        accumulator + currentNum, 0) / rating.get(this).length).toFixed(2);
    }

    reset() {
        this.title = '';
        this.director = '';
        this.releaseYear = null;
        this.genre = '';
        actors.set(this, []);
        rating.set(this, []);
    }
}

let m = new Movie("Warcraft", "Peter", 2016, "fantasy");