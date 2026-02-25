import { getMovies } from '../data/movies.js';
import { getElement } from '../utils/domUtils.js';
import { createMovieItem } from '../components/createMovieItem.js';
import { homeMovieStorage } from './homeMovieStorage.js';

export function renderMovies() {
    const movies = getMovies();
    const sectionRef = getElement('#recommendSection');
    sectionRef.innerHTML = '';

    const moviesTemp = [...movies];
    const displayedMovies = [];

    //localStorage.removeItem('homeMovies');
    
    if(window.location.pathname === '/') {

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
    } else if(window.location.pathname === '/index.html') {

        const storageMovies = JSON.parse(localStorage.getItem('homeMovies'));

        for(let movie of storageMovies) {
            const movieRef = createMovieItem(movie);
            sectionRef.appendChild(movieRef);
        }
    }


}