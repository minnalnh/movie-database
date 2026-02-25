import { createElement, getElement } from '../utils/domUtils.js';

export async function movieCard(movie) {

    const cardTemplate = `
        <section class="movie-box-1">
            <section class="movie-box-1__container">
                <i class="fa-regular fa-heart movie-box-1__icon"></i>
                <img src="${movie.Poster}" alt="Poster – ${movie.Title}" class="movie-box-1__poster">
            </section>
            <h2 class="movie-box-1__title">${movie.Title}</h2>
        </section>
        <section class="movie-box-2">
            <p class="movie-box-2__year movie-box-2__info">Year: ${movie.Year}</p><br>
            <p class="movie-box-2__rating movie-box-2__info">Rating: ${movie.Rated}</p><br>
            <p class="movie-box-2__released movie-box-2__info">Release date: ${movie.Released}</p><br>
            <p class="movie-box-2__runtime movie-box-2__info">Runtime: ${movie.Runtime}</p><br>
            <p class="movie-box-2__genre movie-box-2__info">Genre: ${movie.Genre}</p><br>
            <p class="movie-box-2__director movie-box-2__info">Director: ${movie.Director}</p><br>
            <p class="movie-box-2__writer movie-box-2__info">Writer: ${movie.Writer}</p><br>
            <p class="movie-box-2__actors movie-box-2__info">Actors: ${movie.Actors}</p><br>
            <p class="movie-box-2__plot movie-box-2__info">Plot: ${movie.Plot}</p><br>
            <p class="movie-box-2__language movie-box-2__info">Language: ${movie.Language}</p><br>
            <p class="movie-box-2__country movie-box-2__info">Country: ${movie.Country}</p><br>
            <p class="movie-box-2__awards movie-box-2__info">Awards: ${movie.Awards}</p>
        </section>
    `;

    const movieRef = createElement('article');
    movieRef.classList.add('single-movie', 'movie');
    const sectionRef = getElement('.movie-section');

    movieRef.innerHTML = cardTemplate;
    sectionRef.appendChild(movieRef);

}