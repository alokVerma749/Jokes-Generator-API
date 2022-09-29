const btn = document.querySelector(".btn");
const jokeContainer = document.querySelector(".joke");
let url = 'https://api.chucknorris.io/jokes/random?category=dev,science';
// let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single';

/*
 * fetch will immediately return an object which is =>
let promiseObject = fetch(url);
    ***
    promiseObject =
        {
            value:undefined(returned data will filled in here),

            onfullfillment=[any function, which auto triggers when value get updated]
        }
        ***
        promiseObject.then(method);
        ***
        store function(in onfullfillment array) which we want to
         autotriggr when the value property get updated.
        ***
 */
// var myJoke;
// var data;
// btn.addEventListener("click", () => {
//     fetch(url)
//         .then(data => data.json())
//         .then(item => {
//             console.log(item.joke)
//         });
// })
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
