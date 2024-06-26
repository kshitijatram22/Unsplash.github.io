
const btn = document.querySelector("#btn");
btn.addEventListener("click", searchImages())
function searchImages() {
    const accessKey = '9sObj-rjGHmsA7prY5OgxyVuxdGjRdarhgOCDaUU8aQ';
    const query = document.getElementById('searchQuery').value;
    const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${accessKey}`; 

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const imagesDiv = document.getElementById('images');
            imagesDiv.innerHTML = '';  // Clear previous results
            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = photo.description || 'Unsplash Image';
                imagesDiv.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}