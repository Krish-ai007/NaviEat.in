const restaurantForm = document.getElementById('chineserestaurantForm');

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

    
    const chineserestaurant = {
      name,
      address,
      phone,
      image,
      description,
      menu,
      location,
    };

    try {
     
      let chineserestaurants = localStorage.getItem('chineserestaurants');
      if (chineserestaurants) {
        chineserestaurants = JSON.parse(chineserestaurants);
      } else {
        chineserestaurants = [];
      }
      chineserestaurants.push(chineserestaurant);
      localStorage.setItem('chineserestaurants', JSON.stringify(chineserestaurants));
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