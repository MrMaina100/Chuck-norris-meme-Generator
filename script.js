const jokeElemn = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = ()=>{
   const xhr = new XMLHttpRequest();

   xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
   xhr.onreadystatechange = function (){
      if(this.readyState === 4 && this.status === 200){

         jokeElemn.innerHTML = JSON.parse(this.responseText).value;
      }
   }
   xhr.send();
}




jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)