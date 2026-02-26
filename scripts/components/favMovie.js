import { getElement } from '../utils/domUtils.js';
import { createMovieItem } from './createMovieItem.js';

// funktion som placerar ut favoritfilmer på favorites.html
export async function favMovie(movie) {
    const favSectionRef = getElement('#favSection');
    const movieRef = createMovieItem(movie);
    favSectionRef.appendChild(movieRef);

    createMovieItem(movie);
}