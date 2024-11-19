const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
  const searchTerm = event.target.value.toLowerCase();   


  if (searchTerm.includes('pizza') || searchTerm.includes('italian')) {
    window.location.href = 'pizza_page.html';

  } else if (searchTerm.includes('burger') || searchTerm.includes('fast food')) {
    window.location.href = 'burger_page.html'; 

  } else if (searchTerm.includes('dosa') || searchTerm.includes('south-indian')) {
    window.location.href = 'Dosa_page.html'; 

  } else if (searchTerm.includes('chaat') || searchTerm.includes('pani puri')) {
    window.location.href = 'panipuri_page.html'; 

  } else if (searchTerm.includes('chinese') || searchTerm.includes('manchurian')) {
    window.location.href = 'chinese_page.html';
   } else {
    
    console.log('No specific match found.');
  }
}
});