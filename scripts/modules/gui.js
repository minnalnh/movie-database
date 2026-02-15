import getMovieCard from '../components/movieCard.js';
import { getMovies } from '../data/movies.js';
import { addClass, createElement, getElement } from '../utils/domUtils.js';

export function renderMovies() {
    const movies = getMovies();
    const sectionRef = getElement('#recommendSection');
    sectionRef.innerHTML = '';

    const displayedMovies = [];

    for(let i = 0; i < movies.length; i++) {
        const movieRef = createMovieItem(movies[i]); // varje film

        for(let i = 10 -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i));
            let k = movies[i];
            movies[i] = movies[j];
            movies[j] = k;

            displayedMovies.push(movies);
        }

        //sectionRef.appendChild(movieRef);
    }

    for(let i = 0; i < 10; i++) {
        sectionRef.appendChild(displayedMovies[i]);
    }
}
/*
function fisherYates(movies) {
    const displayedMovies = [];

    for(let i = 10 -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i));
        let k = movies[i];
        movies[i] = movies[j];
        movies[j] = k;

        displayedMovies.push(movies);
    }
    return displayedMovies;
}
*/
function createMovieItem(movie) {
    const movieRef = createElement('article');
    addClass(movieRef, 'movie');

    movieRef.innerHTML = `
        <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
        <h3 class="movie__title">${movie.Title}</h3>
    `;

    movieRef.addEventListener('click', () => {
        // renderDetails(movie);
        console.log('funkar');
    });

    return movieRef;
} 