export function favSetup(event, movie) {
    // console.log(event.target);
    // console.log(movie);

    const likeBtnRef = event.target;

    if(!likeBtnRef.classList.contains('fa-regular')) {
        // console.log('lägg till denna film');
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));

    } else {
        //console.log('ta bort denna film');
        isInFavorite(movie, favorites);
    }
}

function isInFavorite(movie, favorites) {
    // if(favorites.some(movie))
}

/*
export function likeBtnToggle() {
    const likeBtnRefs = document.querySelectorAll('#movieIcon');
    
    for(let likeBtnRef of likeBtnRefs) {
        likeBtnRef.addEventListener('click', () => {

            if(likeBtnRef.classList.contains('fa-regular')) {
            likeBtnRef.classList.remove('fa-regular');
            likeBtnRef.classList.add('fa-solid');
            
        
            } else {
            likeBtnRef.classList.remove('fa-solid');
            likeBtnRef.classList.add('fa-regular');
            }
        });
    
    }
}
*/