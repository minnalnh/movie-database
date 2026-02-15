import getMovieCard from '../components/movieCard.js';
import { getMovies } from '../data/movies.js';
import { addClass, createElement, getElement } from '../utils/domUtils.js';

export function renderMovies() {
    const movies = getMovies();
    const sectionRef = getElement('#recommendSection');
    sectionRef.innerHTML = '';

    for(let i = 0; i < movies.length; i++) {
        const movieRef = createMovieItem(movies[i]);
        sectionRef.appendChild(movieRef);
    }
}

function createMovieItem(movie) { // hämta ut mer info än bara titeln
    const movieRef = createElement('p');
    addClass(movieRef, 'recmnd-section__info');
    movieRef.textContent = movie.Title;
        console.log(movieRef)

    movieRef.addEventListener('click', () => {
        // renderDetails(movie);
        console.log('funkar');
    });

    return movieRef;
}