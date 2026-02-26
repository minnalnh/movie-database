import { createElement, getElement, addClass } from '../utils/domUtils.js';
import { favStorage } from '../modules/favStorage.js';

// filmkort som visas på movie.html
export async function movieCard(movie) {

    const cardTemplate = `
        <section class="movie-box-1">
            <section class="movie-box-1__container">
                <i class="fa-regular fa-heart movie-box-1__icon"></i>
                <img src="${movie.Poster}" alt="Poster – ${movie.Title}" class="movie-box-1__poster">
            </section>
            <h1 class="movie-box-1__title">${movie.Title}</h1>
            <p class="movie-box-1__year movie-box-1__info">Year: ${movie.Year}</p><br>
            <p class="movie-box-1__genre movie-box-__info">Genre: ${movie.Genre}</p><br>
        </section>
        <section class="movie-box-2">
            <p class="movie-box-2__rating movie-box-2__info">Rating: ${movie.Rated}</p><br>
            <p class="movie-box-2__released movie-box-2__info">Release date: ${movie.Released}</p><br>
            <p class="movie-box-2__runtime movie-box-2__info">Runtime: ${movie.Runtime}</p><br>
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
    addClass(movieRef, 'single-movie');
    addClass(movieRef, 'movie');
    const sectionRef = getElement('.movie-section');

    movieRef.innerHTML = cardTemplate;
    sectionRef.appendChild(movieRef);

    const likeBtnRef = getElement('.movie-box-1__icon');

    likeBtnRef.addEventListener('click', (event) => {
        favStorage(event, movie);
        
    });

}