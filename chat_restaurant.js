const restaurantForm = document.getElementById('chatrestaurantForm');

if (restaurantForm) {
  restaurantForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    
    const name = document.getElementById('restaurantName').value;
    const address = document.getElementById('restaurantAddress').value;
    const phone = document.getElementById('restaurantPhone').value;
    const image = document.getElementById('restaurantImage').value;
    const description = document.getElementById('restaurantDescription').value;
    const menu = document.getElementById('restaurantmenu').value;
    const location = document.getElementById('restaurantlocation').value;

    
    const chatrestaurant = {
      name,
      address,
      phone,
      image,
      description,
      menu,
      location,
    };

    try {
     
      let chatrestaurants = localStorage.getItem('chatrestaurants');
      if (chatrestaurants) {
        chatrestaurants = JSON.parse(chatrestaurants);
      } else {
        chatrestaurants = [];
      }
      chatrestaurants.push(chatrestaurant);
      localStorage.setItem('chatrestaurants', JSON.stringify(chatrestaurants));
      alert('Restaurant submitted successfully!');
      restaurantForm.reset();
} catch (error) {
      console.error('Error interacting with localStorage:', error);

      alert('There was an error submitting the restaurant information. Please try again.');
    }
  });
} else {
  console.error('Form not found: Make sure the form element with id "burgerrestaurantForm" exists.');
}
