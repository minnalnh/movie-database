import { getElement } from './utils/domUtils.js';
import { fetchRecommendedMovies } from './modules/api.js';
import { getMovies, pushMovies } from './data/movies.js';
import { renderMovies } from './modules/gui.js';

if(window.location.pathname === '/' || window.location.pathname.includes ('index.html')) {
    console.log('index.html');

} else if(window.location.pathname.includes('favorites.html')) {
    console.log('favorites.html');

} else if(window.location.pathname.includes('movie.html')) {
    console.log('movie.html');

} else if(window.location.pathname.includes('search.html')) {
    console.log('search.html');
}

pageSetup();

async function pageSetup() {
    const movies = await fetchRecommendedMovies();
    pushMovies(movies);
    getMovies();
    renderMovies();

    // searchSetup(movies);
}
/*
async function searchSetup(movies) {
    const listRef = getElement('.');
}
*/