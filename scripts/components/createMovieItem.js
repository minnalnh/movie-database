import { createElement, getElement, addClass } from '../utils/domUtils.js';
import { favStorage } from '../modules/favStorage.js';

// skapa icke-detaljerade filmkort som visas på index.html, search.html och favorites.html
export function createMovieItem(movie) {
    const movieRef = createElement('article');
    addClass(movieRef, 'movie');
    addClass(movieRef, 'movie-flex');

    // om användaren befinner sig på favorites.html ska gilla-knappen bytas ut mot en ta-bort-knapp
    if(window.location.pathname === '/pages/favorites.html') {
        movieRef.innerHTML = `
            <section class="movie__container">
                <i class="fa-solid fa-delete-left movie__icon" id="movieIcon"></i>
                <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
            </section>
            <h2 class="movie__title">${movie.Title}</h2>
        `;
    } else {
        movieRef.innerHTML = `
            <section class="movie__container">
                <i class="fa-regular fa-heart movie__icon" id="movieIcon"></i>
                <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
            </section>
            <h2 class="movie__title">${movie.Title}</h2>
        `;
    }
    
    movieRef.addEventListener('click', (event) => {
        if(event.target.tagName !== 'I') {
            location.href = `/pages/movie.html?plot=full&i=${movie.imdbID}`;
        
        } else if(event.target.tagName === 'I') {
            favStorage(event, movie);
        }
    });
    
    return movieRef;
}