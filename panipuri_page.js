const restaurantList = document.getElementById('panipurirestaurantList');


const panipurirestaurants = JSON.parse(localStorage.getItem('panipurirestaurants')) || [];


panipurirestaurants.forEach((panipurirestaurant) => {
  const card = `
    <div class="restaurant-card">
      <img src="${panipurirestaurant.image}" alt="${panipurirestaurant.name}">
      <h3>${panipurirestaurant.name}</h3>
      <p>${panipurirestaurant.description}</p>
      <p><strong>Address:</strong> ${panipurirestaurant.address}</p>
      <p><strong>Phone:</strong> ${panipurirestaurant.phone}</p>
      <div id="menubtn"><a href="${panipurirestaurant.menu}" target="_blank">View Menu</a></div>
      <div id="locatebtn"><a href="${panipurirestaurant.location}" target="_blank">Locate on map</a></div>
      <div id="tablereserve"><a href="#">Reserve Table</a></div>
   </div>
   <div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipN5tVqd4S6wvYomvD8lkteJlA87BsjSVqWqW3YT=s680-w680-h510" alt="Aayush Pani Puri Center">
    <h3>Aayush Pani Puri Center</h3>
    <p>Famous for serving India's biggest 'Volcano' Pani Puri.</p>
    <p><strong>Address:</strong> Udhna Udhyog Nagar, Surat, Gujarat</p>
    <p><strong>Phone:</strong> +91 98765 43210</p>
    <div id="menubtn"><a href="https://curlytales.com/the-biggest-panipuri-in-india-at-this-surat-shop-is-tantalising-our-taste-buds/" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/xyz123" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipP4rKEcPF80XiZTfbalHaVTE3UxeE8hEA_u-1i2=s680-w680-h510" alt="Goswami Pani Puri">
    <h3>Goswami Pani Puri</h3>
    <p>Renowned for its authentic taste and quality ingredients.</p>
    <p><strong>Address:</strong> City Light Town, Athwa, Surat, Gujarat 395007</p>
    <p><strong>Phone:</strong> +91 261 123 4567</p>
    <div id="menubtn"><a href="https://restaurant-guru.in/Goswami-Panipuri-Surat" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/abc456" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipOgvDyBXpioGP8uTPkwgbepUAzbbUZpiI1vGS12=s1360-w1360-h1020" alt="Krishna Pani Puri Stall">
    <h3>Krishna Pani Puri Stall</h3>
    <p>Popular spot offering a variety of Pani Puri flavors.</p>
    <p><strong>Address:</strong> Katargam, Surat, Gujarat</p>
    <p><strong>Phone:</strong> +91 261 234 5678</p>
    <div id="menubtn"><a href="https://www.zomato.com/surat/krishna-pani-puri-stall-katargam" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/def789" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipNrbsTkIvuhKnY-z2OQg8VygKvmo9O6irazRY0f=s1360-w1360-h1020" alt="Water Bomb Pani Puri Shop">
    <h3>Water Bomb Pani Puri Shop</h3>
    <p>Known for its spicy and tangy Pani Puri offerings.</p>
    <p><strong>Address:</strong> Surat, Gujarat</p>
    <p><strong>Phone:</strong> +91 261 345 6789</p>
    <div id="menubtn"><a href="https://restaurant-guru.in/Water-bomb-pani-puri-shop-Surat" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/ghi012" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPuKMA78xke_YuZm_vwbXCE7qbn4xk9KxlbHo4X=s1360-w1360-h1020" alt="Gangour">
    <h3>Gangour</h3>
    <p>Offers a range of street food, with Pani Puri being a highlight.</p>
    <p><strong>Address:</strong> Ground Floor Royal Palace, L1, Ghod Dod Rd, Athwa, Surat, Gujarat 395007</p>
    <p><strong>Phone:</strong> +91 261 456 7890</p>
    <div id="menubtn"><a href="https://themealdeals.com/2021/03/10/popular-street-food-in-surat/" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/jkl345" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh5.googleusercontent.com/p/AF1QipMEylVyK2TbxD6IlCdMLQ0X08DXsjUm79OJpOjH=w455-h306-n-k-no" alt="Kailash Sweets & Snacks">
    <h3>Kailash Sweets & Snacks</h3>
    <p>Known for its variety of snacks, including delicious Pani Puri.</p>
    <p><strong>Address:</strong> Surat, Gujarat</p>
    <p><strong>Phone:</strong> +91 261 567 8901</p>
    <div id="menubtn"><a href="https://themealdeals.com/2021/03/10/popular-street-food-in-surat/" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://goo.gl/maps/mno678" target="_blank">Locate on Map</a></div>
    <div id="tablereserve"><a href="#">Reserve Table</a></div>
</div>

<div class="restaurant-card">
    <img src="https://lh3.googleusercontent.com/p/AF1QipN0z8kgu3gdkzrhUObDYdhGcmw6b8BH-qZ6naig=s1360-w1360-h1020" alt="Janta Ice Cream">
    <h3>S. K. Test Panipuri</h3>
    <p>While famous for ice creams, it also serves tasty Pani Puri.</p>
    <p><strong>Address:</strong> Surat, Gujarat</p>
    <p><strong>Phone:</strong> +91 261 678 9012</p>
     <div id="menubtn"><a href="https://www.google.com/maps/uv?pb=!1s0x3be04e557a5afa83:0x103c34fbfadb59cd!15zQ2dJWUlRPT0&viewerState=lb&cr=lm_1e&sa=X&ved=2ahUKEwjDlKC2oeWJAxXSUWwGHXc6En4QzeMEegQIAxAA" target="_blank">View Menu</a></div>
    <div id="locatebtn"><a href="https://www.google.co.in/maps?sca_esv=280a44b9c274f648&lqi=Ch1wYW5pIHB1cmkgcmVzdGF1cmFudCBpbiBzdXJhdEiXi8SplZaAgAhaMRAAEAEQAhgAGAEYBCIdcGFuaSBwdXJpIHJlc3RhdXJhbnQgaW4gc3VyYXQqBAgDEAKSAQ1wYW5pcHVyaV9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU50YUhRM2NGcEJFQUWqAWsKCS9tLzA0dmR2bRABKhgiFHBhbmkgcHVyaSByZXN0YXVyYW50KAAyHxABIhuTHEjygOXuAVc9cyqwDuBmUvhTeufnmp11ewIyIRACIh1wYW5pIHB1cmkgcmVzdGF1cmFudCBpbiBzdXJhdLoBCwoJcGFuaSBwdXJp&phdesc=sZNKBFLlroM&vet=12ahUKEwjsseq0oeWJAxUL1TQHHdlSD2oQ8UF6BAgHEFQ..i&lei=nd86Z6zvJIuq0-kP2aW90AY&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYP6WnpVTuA7Mc1Z2_r7NDwQ&daddr=Sop+no.-5,+Parshwadeep+Apartment,+London+Shool+Ni+Same,+Lambe+Hanuman+Rd,+Trikamnagar-1,+Umarwada,+Surat,+Gujarat+395006" target="_blank">Locate on Map</a></div>
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