import { createElement, getElement } from '../utils/domUtils.js';
import { backToHomePage, likeBtnToggle } from '../modules/gui.js';
import { addDeleteFav } from '../modules/gui.js';

export async function getFavMovie(movie) {

    const cardTemplate = `
        <article class="fav-movie">
            <section class="movie__container">
                <i class="fa-regular fa-heart movie__icon" id="movieIcon"></i>
                <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
            </section>
            <h3 class="movie__title">${movie.Title}</h3>
        </article>
    `;

    const movieRef = createElement('article');
    movieRef.classList.add('single-movie', 'movie');
    const favSectionRef = getElement('#favSection');

    movieRef.innerHTML = cardTemplate;
    favSectionRef.appendChild(movieRef);

    backToHomePage();

    likeBtnToggle();

    addDeleteFav();
}