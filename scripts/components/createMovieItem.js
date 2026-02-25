import { createElement, addClass } from '../utils/domUtils.js';
import { favStorage } from '../modules/favStorage.js';

export function createMovieItem(movie) {
    const movieRef = createElement('article');
    addClass(movieRef, 'movie');

    if(window.location.pathname === '/pages/favorites.html') {
        movieRef.innerHTML = `
            <section class="movie__container">
                <i class="fa-solid fa-delete-left movie__icon" id="movieIcon"></i>
                <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
            </section>
            <h3 class="movie__title">${movie.Title}</h3>
        `;
    } else {
        movieRef.innerHTML = `
            <section class="movie__container">
                <i class="fa-regular fa-heart movie__icon" id="movieIcon"></i>
                <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
            </section>
            <h3 class="movie__title">${movie.Title}</h3>
        `;
    }
    
    movieRef.addEventListener('click', (event) => {
        if(event.target.tagName !== 'I') {
        location.href = `/pages/movie.html?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
        
        } else if(event.target.tagName === 'I') {
            favStorage(event, movie);
        }
    });
    
    return movieRef;
}