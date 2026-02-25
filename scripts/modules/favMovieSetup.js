import { favMovie } from '../components/favMovie.js';

favMovieSetup();

export async function favMovieSetup() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    for(let movie of favorites) {
        favMovie(movie);
    }
}