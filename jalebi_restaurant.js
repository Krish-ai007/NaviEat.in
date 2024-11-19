const restaurantForm = document.getElementById('jalebirestaurantForm');

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

    
    const jalebirestaurant = {
      name,
      address,
      phone,
      image,
      description,
      menu,
      location,
    };

    try {
     
      let jalebirestaurants = localStorage.getItem('jalebirestaurants');
      if (jalebirestaurants) {
        jalebirestaurants = JSON.parse(jalebirestaurants);
      } else {
        jalebirestaurants = [];
      }
      jalebirestaurants.push(jalebirestaurant);
      localStorage.setItem('jalebirestaurants', JSON.stringify(jalebirestaurants));
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
