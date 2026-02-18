import { fetchMovieData } from './api.js';
import { getMovieCard } from '../components/movieCard.js';
import { createElement, getElement } from '../utils/domUtils.js';

movieCardSetup();

export async function movieCardSetup() {
    const movie = await fetchMovieData();
    getMovieCard(movie);
}