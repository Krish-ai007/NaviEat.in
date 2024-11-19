const restaurantList = document.getElementById('chatrestaurantList');


const restaurants = JSON.parse(localStorage.getItem('chatrestaurants')) || [];


chatrestaurants.forEach((chatrestaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${chatrestaurant.image}" alt="${chatrestaurant.name}">
      <h3>${chatrestaurant.name}</h3>
      <p>${chatrestaurant.description}</p>
      <p><strong>Address:</strong> ${chatrestaurant.address}</p>
      <p><strong>Phone:</strong> ${chatrestaurant.phone}</p>
      <div id="menubtn"><a href="${chatrestaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${chatrestaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
  `;
  restaurantList.innerHTML += card;
});