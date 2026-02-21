import { fetchMovieSearch } from '../modules/api.js';
import { getElement, createElement } from '../utils/domUtils.js';

//searchedMovies(matching);

export async function searchedMovies(matching) {
    location.href = `/pages/search.html?apikey=52ddd3cb&s=${searchInput}`;

    test(matching);
}

function test(matching) {
    console.log(matching);
}