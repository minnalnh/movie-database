import { getElement, createElement } from '../utils/domUtils.js';
import { fetchMovieSearch } from './api.js';
import { searchedMovies } from '../components/searchedMovies.js'; // används inte men om jag tar bort den visas inte filmerna som matchar sökresultatet ???

export async function searchSetup() {
    const listRef = getElement('#searchList');
    const searchRef = getElement('#searchInput');
    
    searchRef.addEventListener('input', async (event) => {
        const searchInput = searchRef.value;
        const searchBtnRef = getElement('#searchBtn');
        const movies = await fetchMovieSearch(searchInput);

        if(movies) {
            if(movies.length > 0) {
                const matching = movies.filter(movie => movie.Title.toLowerCase().includes(event.target.value.toLowerCase()));
                listRef.innerHTML = '';

                for(let movie of matching) {
                    const listItemRef = createElement('li');
                    listItemRef.classList.add('section__search-item');
                    listItemRef.textContent = movie.Title;
                    listRef.appendChild(listItemRef);
                    
                    listRef.addEventListener('click', (event) => {
                        const clickedMovieRef = event.target.textContent;
                        
                        if(movie.Title === clickedMovieRef) {
                            location.href = `/pages/movie.html?apikey=52ddd3cb&plot=full&i=${movie.imdbID}`;
                        }
                    });
                }


                searchBtnRef.addEventListener('click', (event) => {
                    event.preventDefault();
                    location.href = `/pages/search.html?apikey=52ddd3cb&s=${searchInput}`;
                });
            }
        } else if(searchInput === '') {
            listRef.innerHTML = '';
        }

    });
}