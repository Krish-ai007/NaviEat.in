const restaurantList = document.getElementById('jalebirestaurantList');


const jalebirestaurants = JSON.parse(localStorage.getItem('jalebirestaurants')) || [];


jalebirestaurants.forEach((jalebirestaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${jalebirestaurant.image}" alt="${jalebirestaurant.name}">
      <h3>${jalebirestaurant.name}</h3>
      <p>${jalebirestaurant.description}</p>
      <p><strong>Address:</strong> ${jalebirestaurant.address}</p>
      <p><strong>Phone:</strong> ${jalebirestaurant.phone}</p>
      <div id="menubtn"><a href="${jalebirestaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${jalebirestaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
  `;
  restaurantList.innerHTML += card;
});