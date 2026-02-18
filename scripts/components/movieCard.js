import { pushMovies, getMovies } from '../data/movies.js';
import { createElement, getElement } from '../utils/domUtils.js';

export async function getMovieCard(movie) {

    const cardTemplate = `
        <img src="${movie.Poster}" alt="Poster – ${movie.Title}" class="movie__poster">
        <h2 class="movie__title">${movie.Title}</h2>
        <p class="movie__year movie__info">Year: ${movie.Year}</p>
        <p class="movie__rating movie__info">Rating: ${movie.Rated}</p>
        <p class="movie__released movie__info">Release date: ${movie.Released}</p>
        <p class="movie__runtime movie__info">Runtime: ${movie.Runtime}</p>
        <p class="movie__genre movie__info">Genre: ${movie.Genre}</p>
        <p class="movie__director movie__info">Director: ${movie.Director}</p>
        <p class="movie__writer movie__info">Writer: ${movie.Writer}</p>
        <p class="movie__actors movie__info">Actors: ${movie.Actors}</p>
        <p class="movie__plot movie__info">Plot: ${movie.Plot}</p>
        <p class="movie__language movie__info">${movie.Language}</p>
        <p class="movie__country movie__info">${movie.Country}</p>
        <p class="movie__awards movie__info">Awards: ${movie.Awards}</p>
    `;

    const movieRef = createElement('article');
    movieRef.classList.add('movie');
    const sectionRef = getElement('.movie-section');

    movieRef.innerHTML = cardTemplate;
    sectionRef.appendChild(movieRef);

}