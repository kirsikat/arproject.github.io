const form = document.querySelector('form'); 
const input = document.querySelector('input'); 
const resultsDiv = document.querySelector('#results'); 
 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
 
  const searchTerm = input.value; 
  resultsDiv.innerHTML = <p>Результати для "${searchTerm}" будуть відображені тут</p>; 
});
document.getElementById('tab1').style.display = 'block';
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
