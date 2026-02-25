import { getElement } from '../utils/domUtils.js';
import { backToHomePage } from '../modules/gui.js';
import { createMovieItem } from './createMovieItem.js';

export async function getFavMovie(movie) {
    const favSectionRef = getElement('#favSection');
    const movieRef = createMovieItem(movie);
    favSectionRef.appendChild(movieRef);

    createMovieItem(movie);
    backToHomePage();
}