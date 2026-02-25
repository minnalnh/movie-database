import { fetchMovieData } from './api.js';
import { movieCard } from '../components/movieCard.js';

movieCardSetup();

export async function movieCardSetup() {
    const movie = await fetchMovieData();
    movieCard(movie);
}