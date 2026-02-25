export function homeMovieStorage(movie) {
    // localStorage.clear();
    const homeMovies = JSON.parse(localStorage.getItem('homeMovies')) || [];
    homeMovies.push(movie);
    localStorage.setItem('homeMovies', JSON.stringify(homeMovies));
    console.log(movie);

    return movie;
}