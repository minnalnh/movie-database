import { fetchMovieData } from './api.js';
import { movieCard } from '../components/movieCard.js';

movieCardSetup();

// funktion som förbereder bildkorten med info från den specifika sökningen
export async function movieCardSetup() {
    const movie = await fetchMovieData();
    movieCard(movie);
}