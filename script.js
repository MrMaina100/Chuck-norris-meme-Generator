async function getChuckJokes (){
   const res = await  fetch('https://api.chucknorris.io/jokes/random');
   const data = await res.json();

   displayJokes(data.value);
}

function displayJokes (jokes) {

   const jokeDivDisplay = document.querySelector('#joke');
   jokeDivDisplay.innerHTML = `${jokes}`

}


getChuckJokes();
document.querySelector('#joke-btn').addEventListener('click', getChuckJokes)
document.body.addEventListener('DOMContentLoaded', getChuckJokes)
