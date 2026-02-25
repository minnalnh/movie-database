export function favStorage(event, movie) {
    const likeBtnRef = event.target;

    if(likeBtnRef.classList.contains('fa-regular')) {
        likeBtnRef.classList.remove('fa-regular');
        likeBtnRef.classList.add('fa-solid');

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log('regular');
        if(isInFavorites(movie)) {
            const index = favorites.findIndex(currentMovie => currentMovie.imdbID === movie.imdbID);
            favorites.splice(index, 1);
        } else {
            favorites.push(movie);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));

    } else if(likeBtnRef.classList.contains('fa-solid')) {
        likeBtnRef.classList.remove('fa-solid');
        likeBtnRef.classList.add('fa-regular');

        if(window.location.pathname === '/pages/favorites.html') location.reload();

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.findIndex(currentMovie => currentMovie.imdbID === movie.imdbID);
        favorites.splice(index, 1);
        console.log('solid');
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