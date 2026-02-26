import { addClass, removeClass } from '../utils/domUtils.js';

// funktion som skapar och hämtar data från "favorites" i localStorage
export function favStorage(event, movie) {
    const likeBtnRef = event.target;

    // om gilla-knappen inte är ifylld
    if(likeBtnRef.classList.contains('fa-regular')) {
        removeClass(likeBtnRef, 'fa-regular');
        addClass(likeBtnRef, 'fa-solid');

        // tagen från lektionskod
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(isInFavorites(movie)) {
            const index = favorites.findIndex(currentMovie => currentMovie.imdbID === movie.imdbID);
            favorites.splice(index, 1);
        } else {
            favorites.push(movie);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));

        // om gilla-knappen är ifylld
    } else if(likeBtnRef.classList.contains('fa-solid')) {
        removeClass(likeBtnRef, 'fa-solid');
        addClass(likeBtnRef, 'fa-regular');

        // ladda om sidan om man befinner sig på favorit-sidan – simulera react-beteende när filmer tas bort
        if(window.location.pathname === '/pages/favorites.html') location.reload();

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.findIndex(currentMovie => currentMovie.imdbID === movie.imdbID);
        favorites.splice(index, 1);

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// tagen från lektionskod
function isInFavorites(movie) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if(favorites.some(currentMovie => currentMovie.imdbID === movie.imdbID)) {
        return true;

    } else {
        return false;
    }
}