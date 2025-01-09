document.addEventListener('DOMContentLoaded', function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const imageLinks = data.message;
        imageLinks.forEach(link => {
            const img = document.createElement('img');
            img.src = link;
            img.style.width = '500px';
            document.getElementById('dog-image-container').appendChild(img);
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const dogBreeds = Object.keys(data.message);
        dogBreeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            document.getElementById('dog-breeds').appendChild(li);
        });
        const listOfBreeds = Array.from(Object.keys(data.message));
        const dropDown = document.getElementById('breed-dropdown');
        function filterBreeds() {
            const selectedLetter = dropDown.value;
            const breedList = document.getElementById('dog-breeds')
            breedList.innerHTML = '';
            const filteredBreed = listOfBreeds.filter((breed) => breed.startsWith(selectedLetter))
            filteredBreed.forEach(breed => {
                const listItem = document.createElement('li');
                listItem.textContent = breed;
                breedList.appendChild(listItem);
            })
        }
        const breedList = Array.from(document.querySelectorAll('li'));
        breedList.forEach(breed => {
            breed.addEventListener('click', function() {
                breed.style.color = 'firebrick';
                breed.style.fontWeight = 'bold';
            })
        })
        dropDown.addEventListener('change', filterBreeds);
    });
});

console.log('%c HI', 'color: firebrick')
