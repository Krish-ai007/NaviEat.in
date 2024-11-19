const restaurantList = document.getElementById('restaurantList');


const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];


restaurants.forEach((restaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <h3>${restaurant.name}</h3>
      <p>${restaurant.description}</p>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>Phone:</strong> ${restaurant.phone}</p>
      <div id="menubtn"><a href="${restaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${restaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
    <div class="restaurant-card">
      <img src="https://lh3.googleusercontent.com/p/AF1QipP39F87mkyEuJcBUkiCzeZfyeOBrk3BG-Dqieiv=s1360-w1360-h1020" alt="Domino's Pizza">
      <h3>Domino's Pizza</h3>
      <p>Popular chain offering a wide variety of pizzas with quick delivery services.</p>
      <p><strong>Address:</strong> Plot No. 2, Ground Floor I.G. Complex, 3 & 4, Dumbhal Rd, near T.V.S Work, Surat</p>
      <p><strong>Phone:</strong> +91 261 234 5678</p>
     
        <div  id="menubtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be04d8ff02431bd:0xf2a60263e3f8c400!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwjC5_GW8OSJAxWlUWcHHeeDDi4QzeMEegQIEBAA" target="_blank">View Menu</a></div>
        <div  id="locatebtn"><a href="https://www.google.co.in/maps/dir//Ground+Floor,+Domino's+Pizza,+International+Business+Center,+Shop+No+2,+Plot+No+134%2FA+%26+134%2FB,+Revenue+Survey+No.+79,+B%2F1,+Gaurav+Path,+Piplod,+Surat,+Gujarat+395006/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04d8ff02431bd:0xf2a60263e3f8c400?sa=X&ved=1t:57443&ictx=111" target="_blank">Locate on Map</a></div>
        <div id="tablereserve"><a href="https://www.dominos.co.in/store-location" target="_blank">Reserve Table</a></div>
      
    </div>
    <!-- Restaurant 2 -->
    <div class="restaurant-card">
      <img src="https://lh3.googleusercontent.com/p/AF1QipPu7zCCmYCfLyOjRXp9jYmmd3Sy_Z7apxcXaaAh=s1360-w1360-h1020" alt="Pizza Hut">
      <h3>Pizza Hut</h3>
      <p>International chain known for its Italian-American cuisine menu including pizza and pasta.</p>
      <p><strong>Address:</strong> OB/1, Tribhuvan Complex, Ghod Dod Rd, Surat</p>
      <p><strong>Phone:</strong> +91 261 345 6789</p>
       <div  id="menubtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be04ddfcc9b5cb1:0x65c1ccfdbdc63151!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwiS8Jma-OSJAxVRR2wGHcqGG88QzeMEegQIDhAA" target="_blank">View Menu</a></div>
        <div  id="locatebtn"><a href="https://www.google.co.in/maps/dir//Pizza+Hut,+Tribhuvan+Complex,+OB%2F1,+Ghod+Dod+Rd,+next+to+Baskin+Robbins,+Surat,+Gujarat+395007/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04ddfcc9b5cb1:0x65c1ccfdbdc63151?sa=X&ved=1t:57443&ictx=111" target="_blank">Locate on Map</a></div>
        <div id="tablereserve"><a href="https://www.dominos.co.in/store-location" target="_blank">Reserve Table</a></div>
    </div>
    <!-- Restaurant 3 -->
    <div class="restaurant-card">
      <img src="https://lh3.googleusercontent.com/p/AF1QipPUx7l7vQH4lk4n1MSXBuLCiR2R_J2tisQQdAWC=s680-w680-h510" alt="La Pino'z Pizza">
      <h3>La Pino'z Pizza</h3>
      <p>Known for its giant pizzas and a variety of toppings to choose from.</p>
      <p><strong>Address:</strong> Udhna Gam, Surat</p>
      <p><strong>Phone:</strong> +91 823 823 4332</p>
       <div  id="menubtn"><a href="https://lh3.googleusercontent.com/p/AF1QipP1vCKO6F-cmNGlFi1lMdsRKko9yZvyZH08sChw=s1360-w1360-h1020">View Menu</a></div>
        <div  id="locatebtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be04d877a1c6bb5:0x94d7f84db7ecdc60!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwjDgcjk-eSJAxU9TGwGHWuuA2cQzeMEegQIDhAA" target="_blank">Locate on Map</a></div>
        <div id="tablereserve"><a href="https://lapinozpizza.in/store-locator/Surat" target="_blank">Reserve Table</a></div>
    </div>
    <!-- Restaurant 4 -->
    <div class="restaurant-card">
      <img src="https://lh3.googleusercontent.com/p/AF1QipPiz8ClZF0RMNIuwLinAkEcPtfWrfEGEJ07BkfJ=s1360-w1360-h1020" alt="US Pizza">
      <h3>Dome Pizzeria - Piplod</h3>
      <p>Offers a range of pizzas with a blend of Indian and international flavors.</p>
      <p><strong>Address:</strong> Piplod, Surat</p>
      <p><strong>Phone:</strong> +91 261 456 7890</p>
     <div id="menubtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be04d798d277377:0x5e9f9e9ea63d3f83!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwj8rPH7-uSJAxVJQ2cHHXzeL_MQzeMEegQICxAA">View Menu</a></div>
        <div  id="locatebtn"><a href="https://www.google.co.in/maps?s=web&sca_esv=5978d60357fd5052&lqi=ChlwaXp6YSByZXN0YXVyYW50IGluIHN1cmF0SKSx6YyTsICACForEAAQARgAGAEYAyIZcGl6emEgcmVzdGF1cmFudCBpbiBzdXJhdCoECAMQAZIBEHBpenphX3Jlc3RhdXJhbnSqAWEKCC9tLzA2NjN2EAEqFCIQcGl6emEgcmVzdGF1cmFudCgAMh4QASIaip2xIKwpc4pByytcZNbc-ZGB8cApAonVhYEyHRACIhlwaXp6YSByZXN0YXVyYW50IGluIHN1cmF0ugEHCgVwaXp6YQ&phdesc=QP_xSVUUVDA&vet=12ahUKEwiznODb-uSJAxXvR2wGHa5hCYcQ1YkKegQIIRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KXdzJ415TeA7MYM_Paaenp9e&daddr=1st,+Samanvay,+Gymkhana+Rd,+near+Chandni+Chowk,+Piplod,+Surat,+Gujarat+395007" target="_blank">Locate on Map</a></div>
        <div id="tablereserve"><a href="https://instagram.com/dome.srt" target="_blank">Reserve Table</a></div>
    </div>
    <!-- Restaurant 5 -->
    <div class="restaurant-card">
      <img src="https://lh5.googleusercontent.com/p/AF1QipMPitten2YRTLh-J8E_isS7QfOAdNad4qpMifvE=w260-h175-n-k-no" alt="Pizza Zone">
      <h3>Pizza Zone</h3>
      <p>Known for its unlimited pizza offers and a variety of side dishes.</p>
      <p><strong>Address:</strong> UG-1, Safal Square, Vesu Cross Road, Magdalla Road, Surat</p>
      <p><strong>Phone:</strong> +91 846 038 8887</p>
      <div id="menubtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be05270f1fbfb61:0xba890cb62d96bb61!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwig_9fcjOWJAxWZUGwGHS1VFe8QzeMEegQIBhAA">View Menu</a></div>
        <div  id="locatebtn"><a href="https://www.google.co.in/maps?s=web&sca_esv=8af1621642e5e6e9&lqi=ChBwaXp6YSB6b25lIHN1cmF0IgOIAQFI2ez3oKCqgIAIWhwQABABGAAYARgCIhBwaXp6YSB6b25lIHN1cmF0kgEQcGl6emFfcmVzdGF1cmFudKoBSBABKg4iCnBpenphIHpvbmUoADIeEAEiGowhX9gHii9V1UX6q1hu3ormsNrKGNIuzMMfMhQQAiIQcGl6emEgem9uZSBzdXJhdA&vet=12ahUKEwi70dbbjOWJAxU71DQHHUK9JEEQ1YkKegQIIxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWH7-_FwUuA7MWG7li22DIm6&daddr=Udhan+Mandalla+Road+Safal+Square+Nr+Cross+Road,+University+Rd,+Surat,+Gujarat+395007" target="_blank">Locate on Map</a></div>
        <div id="tablereserve"><a href="http://pizzazone.co.in/" target="_blank">Reserve Table</a></div>
    </div>
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