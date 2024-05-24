const img = document.querySelector('.image');
const button = document.querySelector(".refresh");
// search
const searchInput = document.querySelector(".Search");
const SearchButton = document.querySelector(".SearchButton");

// initiated search term
let searchTerm = "cat";

function fetchGif(searchTerm) {
     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=07ae9UEXAerQO31OEqmmRTFxHccjd90s&s=${searchTerm}`, {mode: 'cors'})
     .then(function(response) {
     return response.json();
     })
     .then(function(response) {
     img.src = response.data.images.original.url;
     })
     .catch(function(error) {
          console.error('Error fetching the GIF:', error);
      });
}

// Refreshing function to fetch new image;
button.addEventListener("click", () => {
     fetchGif();
})

// Search your gif
SearchButton.addEventListener("click", (event) => {
     event.preventDefault();

     // if search value doesn't exists
     if (!searchInput.value) {
          searchInput.placeholder = "enter search term";
     } else {
          searchTerm = searchInput.value.trim();
          fetchGif(searchTerm);
          searchInput.value = "";
     }
     
})

fetchGif();