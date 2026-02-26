import { getMovies } from '../data/movies.js';
import { getElement } from '../utils/domUtils.js';
import { createMovieItem } from '../components/createMovieItem.js';
import { homeMovieStorage } from './homeMovieStorage.js';

// funktion som har med gränssnittet att göra – rendera och slumpa fram filmer på startsidan
export function renderMovies() {
    const movies = getMovies();
    const sectionRef = getElement('#recommendSection');
    sectionRef.innerHTML = '';

    const moviesTemp = [...movies];
    const displayedMovies = [];
    
    // om användaren laddar sidan för första gången slumpas filmerna (även om man laddar om sidan)
    if(window.location.pathname === '/') {
        // töm "homeMovies" ifall den redan innehåller filmer och skapa upp en tom array
        localStorage.removeItem('homeMovies');
        const homeMovies = [];

        for(let i = 0; i < 20; i++) {
            // kod hämtad från week-7-lecture-9-feb
            const randomIndex = Math.floor(Math.random() * moviesTemp.length);
            const randomMovie = moviesTemp.splice(randomIndex, 1)[0];
            displayedMovies.push(randomMovie);
    
            const movie = displayedMovies[i];
            const movieRef = createMovieItem(movie);
    
            sectionRef.appendChild(movieRef);
    
            homeMovieStorage(movie);
        }
    // om användaren besöker en undersida och sedan går tillbaks till startsidan hämtas filmerna från localStorage, i stället för att nya slumpas fram
    } else if(window.location.pathname === '/index.html') {

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
        const storageMovies = JSON.parse(localStorage.getItem('homeMovies'));

        for(let movie of storageMovies) {
            const movieRef = createMovieItem(movie);
            sectionRef.appendChild(movieRef);
        }
    }
}