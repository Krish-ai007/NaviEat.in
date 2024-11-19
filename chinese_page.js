const restaurantList = document.getElementById('chineserestaurantList');


const chineserestaurants = JSON.parse(localStorage.getItem('chineserestaurants')) || [];


chineserestaurants.forEach((chineserestaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${chineserestaurant.image}" alt="${chineserestaurant.name}">
      <h3>${chineserestaurant.name}</h3>
      <p>${chineserestaurant.description}</p>
      <p><strong>Address:</strong> ${chineserestaurant.address}</p>
      <p><strong>Phone:</strong> ${chineserestaurant.phone}</p>
      <div id="menubtn"><a href="${chineserestaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${chineserestaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
   <div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipNzFEd6cJ6h-oek5sYkvCX-zFjlgB0zjS96Cmws=s1360-w1360-h1020" alt="Golden Dragon">
    <h3>Golden Dragon</h3>
    <p>Renowned for authentic Chinese cuisine and a serene ambiance.</p>
    <p><strong>Address:</strong> Athwa, Surat</p>
    <p><strong>Phone:</strong> +91 261 266 4422</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/golden-dragon-athwa" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/3Y4G5J6K7L72" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipN5fASk8Ff2rEq_FVcJJHywds2zwjBteGNeGe28=s1360-w1360-h1020" alt="Wok On Fire">
    <h3>Wok On Fire</h3>
    <p>Offers a fusion of Chinese and Asian delicacies in a modern setting.</p>
    <p><strong>Address:</strong> Piplod, Surat</p>
    <p><strong>Phone:</strong> +91 261 279 9999</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/wok-on-fire-piplod" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/8H9G5J6K7L72" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPJeDmYJRmw-7B_Nv-ITf7_MfJ4FYaxiLeCVZY=s1360-w1360-h1020" alt="Berco's">
    <h3>Berco's</h3>
    <p>Known for its extensive Chinese menu and elegant interiors.</p>
    <p><strong>Address:</strong> Dumas Road, Surat</p>
    <p><strong>Phone:</strong> +91 261 272 7272</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/bercos-dumas-road" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/9I0G5J6K7L72" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipMCocvpYnQpZjNOaUbOdpPyABFycmh0DItU0gFH=s1360-w1360-h1020" alt="Vintage Asia">
    <h3>Vintage Asia</h3>
    <p>Offers a blend of Chinese and other Asian cuisines in a luxurious setting.</p>
    <p><strong>Address:</strong> Dumas Road, Surat</p>
    <p><strong>Phone:</strong> +91 261 405 1234</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/vintage-asia-dumas-road" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/1J2G5J6K7L72" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>


<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPbICNHuDv5L9pezJE8gevsQSCEp3j-aI45Ks0t=s1360-w1360-h1020" alt="Famous Chinese Cuisine">
    <h3>Famous Chinese Cuisine</h3>
    <p>Offers a variety of Chinese dishes with authentic flavors.</p>
    <p><strong>Address:</strong> Varachha, Surat</p>
    <p><strong>Phone:</strong> +91 261 274 7474</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/famous-chinese-cuisine-varachha" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/3L4G5J6K7L72" target="_blank">Locate on Map</a></div>
     <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPR9uS2AteOME6ma7aW4LyfZUKk4k7p96xOW6aG=s1360-w1360-h1020" alt="Go China">
    <h3>Go China</h3>
    <p>Known for its diverse Chinese menu and cozy ambiance.</p>
    <p><strong>Address:</strong> City Light, Surat</p>
    <p><strong>Phone:</strong> +91 261 275 7575</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/go-china-city-light" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://www.google.co.in/maps/dir//Go+China+Restaurant,+Western+Business+Park,+G-8,+opp.+S.D.+Jain+School,+Vesu,+Surat,+Gujarat+395007/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04d890a114aa3:0xb2e8fbd0d7031bb6?sa=X&ved=1t:57443&ictx=111" target="_blank">Locate on Map</a></div>
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