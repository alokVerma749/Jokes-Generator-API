const btn = document.querySelector(".btn");
const jokeContainer = document.querySelector(".joke");
let url = 'https://api.chucknorris.io/jokes/random?category=dev,science';

btn.addEventListener("click", function handleClick() {
    let futureData = fetch(url);
    let myJoke = futureData.then(getData);
    myJoke.then(display);
    function getData(data) {
        return data.json();
    }
    function display(item) {
        console.log(item.value)
        jokeContainer.innerText = item.value
    }
})
