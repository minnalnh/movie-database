import { getElement } from '../utils/domUtils.js';
import { createMovieItem } from './createMovieItem.js';

export async function favMovie(movie) {
    const favSectionRef = getElement('#favSection');
    const movieRef = createMovieItem(movie);
    favSectionRef.appendChild(movieRef);

    createMovieItem(movie);
}