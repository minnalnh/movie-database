import { getElement } from '../utils/domUtils.js';

export async function searchSetup(movieSearch) {
    const listRef = getElement('#searchList');
    console.log(movieSearch);
    const searchRef = getElement('#searchInput');

    searchRef.addEventListener('input', (event) => {
        const matching = movieSearch.filter(movie => movie.Title.includes(event.target.value));
        //console.log(matching);
    });
}