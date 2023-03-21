// we try with fetch api rather than ajax 

function getChuckJokes (){
   fetch('https://api.chucknorris.io/jokes/random')
   .then((res)=> res.json())
   .then((data)=> generateJoke(data.value))
}

function generateJoke(jokes){

   const jokeDisplayDiv = document.querySelector('#joke');
   jokeDisplayDiv.innerHTML = `${jokes}`


}

getChuckJokes();
document.querySelector('#joke-btn').addEventListener('click', getChuckJokes);