import { fetchMovieData } from '../modules/api.js';

getMovieCard();

export async function getMovieCard() {
    const movies = await fetchMovieData();
    console.log(movies);
    return `

    `;
}

/*
        Title: ${}
        Year: ${}
        Rated: ${}
        Released: ${}
        Runtime: ${}
        Genre: ${}
        Director: ${}
        Writer: ${}
        Actors: ${}
        Plot: ${}
*/