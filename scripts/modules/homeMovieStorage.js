// skapar / hämtar en array som sparar filmerna som visas på startsidan
export function homeMovieStorage(movie) {
    const homeMovies = JSON.parse(localStorage.getItem('homeMovies')) || [];
    homeMovies.push(movie);
    localStorage.setItem('homeMovies', JSON.stringify(homeMovies));
    
    return movie;
}