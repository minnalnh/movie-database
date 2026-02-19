import { getMovies } from '../data/movies.js';
import { addClass, createElement, getElement } from '../utils/domUtils.js';
//import { searchSetup } from './searchSetup.js';
import { fetchMovieSearch } from './api.js';

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
        <img src=${movie.Poster} alt="Poster – ${movie.Title}" class="movie__poster">
        <h3 class="movie__title">${movie.Title}</h3>
    `;
    
    movieRef.addEventListener('click', () => {
        location.href = `/pages/movie.html?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
    });
    
    return movieRef;
}

export function backToHomePage() {
    const btnRef = getElement('.back-button');

    btnRef.addEventListener('click', () => {
        location.href = '../index.html';
    });
}

export async function searchListener() {
    const searchRef = getElement('#searchInput');
    
    searchRef.addEventListener('input', async (event) => {
        const searchInput = searchRef.value;
        const movies = await fetchMovieSearch(searchInput);
        if(movies !== undefined) console.log(movies);
        //const matching = movies.filter(movie => movie.name.toLowerCase().includes(event.target.value.toLowerCase()));
    });
}
/*
const listRef = getElement('#searchList');
    console.log(dataSearch);
    const searchRef = getElement('#searchInput');
    const matching = dataSearch.filter(movie => movie.Title.includes(event.target.value));
    */