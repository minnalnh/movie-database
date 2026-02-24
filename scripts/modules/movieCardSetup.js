import { fetchMovieData } from './api.js';
import { getMovieCard } from '../components/movieCard.js';

movieCardSetup();

export async function movieCardSetup() {
    const movie = await fetchMovieData();
    getMovieCard(movie);
}