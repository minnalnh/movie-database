// funktioner som förbereder och pushar filmdatat i movies-arrayen
const movies = [];

export function getMovies() {
    return movies;
}

export function pushMovies(list) {
    for(let item of list) {
        movies.push(item);
    }
}