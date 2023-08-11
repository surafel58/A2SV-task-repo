image_container = document.getElementById('food_img');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

image_container.src = urlParams.get('src');
console.log(urlParams.get('src'));