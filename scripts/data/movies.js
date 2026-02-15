const movies = [];

export function getMovies() {
    return movies;
}

export function pushMovies(list) {
    for(let item of list) {
        movies.push(item);
    }
}