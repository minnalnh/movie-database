import { getMovies } from '../data/movies.js';
import { addClass, createElement, getElement } from '../utils/domUtils.js';
import { searchSetup } from './searchSetup.js';

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
    
    movieRef.addEventListener('click', (event) => {
        if(event.target.tagName !== 'I') {
            location.href = `/pages/movie.html?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
        }
    });
    
    return movieRef;
}

export function backToHomePage() {
    const btnRef = getElement('.back-button');

    btnRef.addEventListener('click', () => {
        location.href = '../index.html';
    });
}

export function addToFav() {
    const movies = document.querySelectorAll('.movie');
    const likeBtnRefs = document.querySelectorAll('#movieIcon');

    for(let likeBtnRef of likeBtnRefs) {
        likeBtnRef.addEventListener('click', (event) => {
            
            if(likeBtnRef.classList.contains('fa-regular')) {
                likeBtnRef.classList.remove('fa-regular');
                likeBtnRef.classList.add('fa-solid');
                
                // localStorage.setItem('activeMovie', JSON.stringify(movie)); // funkar ej

            } else {
                likeBtnRef.classList.remove('fa-solid');
                likeBtnRef.classList.add('fa-regular');
            }
            
        });
    }
}

export function goToFavPage() {
    const favBtnRef = getElement('#favBtn');

    favBtnRef.addEventListener('click', () => {
        location.href = '../../pages/favorites.html';
    });
}