import { renderTrailer } from './caroussel.js';

export async function carousselSetup(movies) {
    const trailersTemp = [...movies];
    const displayedTrailers = [];

    for(let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * trailersTemp.length);
        const randomTrailer = trailersTemp.splice(randomIndex, 1)[0];
        displayedTrailers.push(randomTrailer);

        const num = Math.floor(Math.random() * 5);
        renderTrailer(displayedTrailers[i], num);
    }
}