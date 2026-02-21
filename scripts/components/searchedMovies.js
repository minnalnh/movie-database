import { fetchMovieSearch } from '../modules/api.js';
import { getElement, createElement } from '../utils/domUtils.js';

searchedMovies();

export async function searchedMovies() {
    const queryStr = window.location.search;
    const searchStr = queryStr.substring(19);
    const movies = await fetchMovieSearch(searchStr);

    if(movies !== undefined) { // denna if-sats ska inte behövas, kolla på detta vid ett senare tillfälle

        for(let movie of movies) {
            const movieSection = getElement('#movieSection');
            const movieRef = createElement('article');

            movieRef.innerHTML = `
                <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
                <h3 class="movie__title">${movie.Title}</h3>
            `;

            movieSection.appendChild(movieRef);
        }
    }

}