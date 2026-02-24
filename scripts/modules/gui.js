import { getMovies } from '../data/movies.js';
import { addClass, createElement, getElement } from '../utils/domUtils.js';
import { favStorage } from './favStorage.js';

export function renderMovies() {
    const movies = getMovies();
    const sectionRef = getElement('#recommendSection');
    sectionRef.innerHTML = '';

    const moviesTemp = [...movies];
    const displayedMovies = [];
    
    for(let i = 0; i < 20; i++) {
        // kod hämtad från week-7-lecture-9-feb
        const randomIndex = Math.floor(Math.random() * moviesTemp.length);
        const randomMovie = moviesTemp.splice(randomIndex, 1)[0];
        displayedMovies.push(randomMovie);

        const movieRef = createMovieItem(displayedMovies[i]);
        sectionRef.appendChild(movieRef); 
    }
}

function createMovieItem(movie) {
    const movieRef = createElement('article');
    addClass(movieRef, 'movie');

    movieRef.innerHTML = `
        <section class="movie__container">
            <i class="fa-regular fa-heart movie__icon" id="movieIcon"></i>
            <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
        </section>
        <h3 class="movie__title">${movie.Title}</h3>
    `;
    
    movieRef.addEventListener('click', () => {
        addDeleteFav(event, movie);
    });
    
    return movieRef;
}

export function backToHomePage() {
    const btnRef = getElement('.back-button');

    btnRef.addEventListener('click', () => {
        location.href = '../index.html';
    });
}

export function likeBtnToggle() {
    const likeBtnRefs = document.querySelectorAll('#movieIcon');
    
    for(let likeBtnRef of likeBtnRefs) {
        likeBtnRef.addEventListener('click', () => {

            if(likeBtnRef.classList.contains('fa-regular')) {
            likeBtnRef.classList.remove('fa-regular');
            likeBtnRef.classList.add('fa-solid');

            console.log('lägg till denna film');
        
            } else if(likeBtnRef.classList.contains('fa-solid')) {
            likeBtnRef.classList.remove('fa-solid');
            likeBtnRef.classList.add('fa-regular');

            console.log('ta bort denna film');
            }
        });
    
    }
}

export function addDeleteFav(event, movie) {
    if(event.target.tagName !== 'I') {
            location.href = `/pages/movie.html?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
        
        } else if(event.target.tagName === 'I') {
            favStorage(event, movie);
    }
}