import { favMovie } from '../components/favMovie.js';

favMovieSetup();

// funktion som skapar / förbereder korten med favoritfilmer på favorites.html
export async function favMovieSetup() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    for(let movie of favorites) {
        favMovie(movie);
    }
}