export function favSetup(event, movie) {
    const likeBtnRef = event.target;

    if(!likeBtnRef.classList.contains('fa-regular')) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        if(isInFavorites(movie)) {
            const index = favorites.findIndex(currentMovie => currentMovie.imdbID === movie.imdbID);
            favorites.splice(index, 1);
        } else {
            favorites.push(movie);
            console.log('test');
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));

    } else if(likeBtnRef.classList.contains('fa-regular')) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.findIndex(currentMovie => currentMovie.imdbID === movie.imdbID);
        favorites.splice(index, 1);
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function isInFavorites(movie) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if(favorites.some(currentMovie => currentMovie.imdbID === movie.imdbID)) {
        return true;

    } else {
        return false;
    }
}