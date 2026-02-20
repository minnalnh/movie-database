import { fetchMovieSearch } from '../modules/api.js';

export async function searchedMovies(event) {
    event.preventDefault();
    const movies = await fetchMovieSearch(searchInput);

    
}