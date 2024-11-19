const restaurantList = document.getElementById('dosarestaurantList');


const dosarestaurants = JSON.parse(localStorage.getItem('dosarestaurants')) || [];


dosarestaurants.forEach((dosarestaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${dosarestaurant.image}" alt="${dosarestaurant.name}">
      <h3>${dosarestaurant.name}</h3>
      <p>${dosarestaurant.description}</p>
      <p><strong>Address:</strong> ${dosarestaurant.address}</p>
      <p><strong>Phone:</strong> ${dosarestaurant.phone}</p>
      <div id="menubtn"><a href="${dosarestaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${dosarestaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
   <!-- Restaurant 1 -->
<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipNsF3Y2T2CICHK0TL1aiVUKxUrDUmYySuouaGJB=s1360-w1360-h1020" alt="Dosa Charcoal Terrace & Garden Restaurant">
    <h3>Dosa Charcoal Terrace & Garden Restaurant</h3>
    <p>Offers a variety of dosas in a terrace and garden setting.</p>
    <p><strong>Address:</strong> Ghod Dod Rd, Surat</p>
    <p><strong>Phone:</strong> +91 261 234 5678</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Dosa+Charcoal+Terrace+%26+Garden+Restaurant%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/dir//Dosa+Charcoal+Terrace+%26+Garden+Restaurant%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="https://www.example.com/reserve-table" target="_blank">Reserve Table</a></div>
</div>

<!-- Restaurant 2 -->
<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipO-m5jF-ZYQrOwTpXLDlx_TSver6qabGKCqfP2x=s1360-w1360-h1020" alt="Dosa Sigdi">
    <h3>Dosa Sigdi</h3>
    <p>Known for its authentic South Indian dosas.</p>
    <p><strong>Address:</strong> Udhna, Surat</p>
    <p><strong>Phone:</strong> +91 261 345 6789</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Dosa+Sigdi%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/dir//Dosa+Sigdi%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="https://www.example.com/reserve-table" target="_blank">Reserve Table</a></div>
</div>

<!-- Restaurant 3 -->
<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMMIDt2iadvFGbiZ9kfLzeb55fSUg-ct2tCLfi6=s1360-w1360-h1020" alt="Muthu Dosa Center">
    <h3>Muthu Dosa Center</h3>
    <p>Popular spot for a wide range of dosa varieties.</p>
    <p><strong>Address:</strong> Katargam, Surat</p>
    <p><strong>Phone:</strong> +91 823 823 4332</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Muthu+Dosa+Center%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/dir//Muthu+Dosa+Center%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="https://www.example.com/reserve-table" target="_blank">Reserve Table</a></div>
</div>

<!-- Restaurant 4 -->
<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipP1fUPDo1udoWea_wbCESo7bnkpqOApJXj8O1aK=s1360-w1360-h1020" alt="Dosa Culture">
    <h3>Dosa Culture</h3>
    <p>Offers a diverse menu of dosas with unique flavors.</p>
    <p><strong>Address:</strong> Vesu, Surat</p>
    <p><strong>Phone:</strong> +91 846 038 8887</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Dosa+Culture%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/dir//Dosa+Culture%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="https://www.example.com/reserve-table" target="_blank">Reserve Table</a></div>
</div>

  `;
  restaurantList.innerHTML += card;
});
const restaurantCards = document.querySelectorAll('.restaurant-card');

// Create an Intersection Observer to detect when the cards enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class to trigger the animation when the card is in view
      entry.target.classList.add('visible');
      // Stop observing this card once it's in view
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null, // null means we're observing the viewport
  threshold: 0.1 // Trigger the animation when 10% of the card is visible
});

// Observe each restaurant card
restaurantCards.forEach(card => {
  observer.observe(card);
});