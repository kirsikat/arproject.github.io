const form = document.querySelector('form'); 
const input = document.querySelector('input'); 
const resultsDiv = document.querySelector('#results'); 
 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
 
  const searchTerm = input.value; 
  resultsDiv.innerHTML = <p>Результати для "${searchTerm}" будуть відображені тут</p>; 
});