import { getFavMovie } from '../components/favMovie.js';

favPageSetup();

export async function favPageSetup() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    for(let movie of favorites) {
        getFavMovie(movie);
    }
}