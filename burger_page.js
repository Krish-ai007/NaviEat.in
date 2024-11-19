const restaurantList = document.getElementById('burgerrestaurantList');


const burgerrestaurants = JSON.parse(localStorage.getItem('burgerrestaurants')) || [];


burgerrestaurants.forEach((burgerrestaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${burgerrestaurant.image}" alt="${burgerrestaurant.name}">
      <h3>${burgerrestaurant.name}</h3>
      <p>${burgerrestaurant.description}</p>
      <p><strong>Address:</strong> ${burgerrestaurant.address}</p>
      <p><strong>Phone:</strong> ${burgerrestaurant.phone}</p>
      <div id="menubtn"><a href="${burgerrestaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${burgerrestaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
   <div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPiz8ClZF0RMNIuwLinAkEcPtfWrfEGEJ07BkfJ=s1360-w1360-h1020" alt="Crunch - Vesu">
    <h3>Crunch - Vesu</h3>
    <p>Premium burger restaurant known for its fresh and crunchy offerings.</p>
    <p><strong>Address:</strong> Vesu, Surat</p>
    <p><strong>Phone:</strong> +91 261 123 4567</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Crunch+-+Vesu%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/Crunch+-+Vesu%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMNhjFkYrMIUuGZYCitXoOyZIHLAN9SrnuiB-5O=s1360-w1360-h1020" alt="Burger King - VIP Road">
    <h3>Burger King - VIP Road</h3>
    <p>International fast-food chain serving a variety of burgers and sides.</p>
    <p><strong>Address:</strong> VIP Road, Surat</p>
    <p><strong>Phone:</strong> +91 261 987 6543</p>
    <div id="menubtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be04d2d098a4897:0x6ba9eb4fcaefc2c4!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwiD8tb-j-WJAxUB2DgGHd6tMRcQzeMEegQIERAA" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/Burger+King+-+VIP+Road%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh5.googleusercontent.com/p/AF1QipNv-miL9lNcU9uu2UzYrTy0dLKkeIrVhMHYBE1-=w455-h306-n-k-no" alt="Brown Burger Co.">
    <h3>Brown Burger Co.</h3>
    <p>Popular spot offering a range of burgers with unique flavors.</p>
    <p><strong>Address:</strong> Surat</p>
    <p><strong>Phone:</strong> +91 261 123 7890</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Brown+Burger+Co.%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/Brown+Burger+Co.%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipP1C0J1O7_QaToLee3xx6j0d-wsbEPS-u7giZ2U=s1360-w1360-h1020" alt="The Burger Company">
    <h3>The Burger Company</h3>
    <p>Known for its diverse burger menu and cozy ambiance.</p>
    <p><strong>Address:</strong> Surat</p>
    <p><strong>Phone:</strong> +91 261 345 6789</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/The+Burger+Company%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/The+Burger+Company%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPEvrlTj_F3ab3geOQx7C-VTiYzLwUNwC-VYke0=s1360-w1360-h1020" alt="Wat-a-Burger!">
    <h3>Wat-a-Burger!</h3>
    <p>Offers a variety of burgers with both vegetarian and non-vegetarian options.</p>
    <p><strong>Address:</strong> Surat</p>
    <p><strong>Phone:</strong> +91 261 567 8901</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Wat-a-Burger%21%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/Wat-a-Burger%21%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh5.googleusercontent.com/p/AF1QipMEl_D27ZQcCoUM94IXUSLiVQIrEBR1sawbVkox=w455-h306-n-k-no" alt="McDonald's - Althan">
    <h3>McDonald's - Althan</h3>
    <p>Global fast-food chain known for its classic burgers and fries.</p>
    <p><strong>Address:</strong> Althan, Surat</p>
    <p><strong>Phone:</strong> +91 261 654 3210</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/McDonald%27s+-+Althan%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/McDonald%27s+-+Althan%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh5.googleusercontent.com/p/AF1QipO5Dmkq-hHpda5p5bxoglRNA1YQacCbd5e9LW6p=w455-h306-n-k-no" alt="Zorko - Brand Of Food Lovers">
    <h3>Zorko - Brand Of Food Lovers</h3>
    <p>Serves a range of burgers along with other fast-food items.</p>
    <p><strong>Address:</strong> Surat</p>
    <p><strong>Phone:</strong> +91 261 789 0123</p>
    <div id="menubtn"><a href="https://maps.google.com/maps/search/Zorko+-+Brand+Of+Food+Lovers%2C+Surat%2C+India" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://maps.google.com/maps/search/Zorko+-+Brand+Of+Food+Lovers%2C+Surat%2C+India" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
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