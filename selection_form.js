const form = document.getElementById('foodSelectionForm');
const foodItemSelect = document.getElementById('foodItem');

form.addEventListener('submit', function(event) {
     event.preventDefault(); 

     
     const selectedFood = foodItemSelect.value;

     
     if (selectedFood) {
         switch (selectedFood) {
             case 'pizza':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/restaurant_form.html'; 
                 break;
             case 'burger':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/burger_restaurant.html'; 
                 break;
             case 'panipuri':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/panipuri_restaurant.html'; 
                 break;
             case 'chaat':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/chat_restaurant.html'; 
                 break;
             case 'chinese':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/chinese_restaurant.html'; 
                 break;
             case 'jalebi':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/jalebi_restaurant.html'; 
                 break;
             case 'paneertikka':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/panipuri_restaurant.html'; 
                 break;
             case 'dosa':
                 window.location.href = 'file:///C:/Users/krish/OneDrive/Desktop/PPSU%20Project/Final%20Project/Main/dosa_restaurant.html';
                 break;
             default:
                 alert('Please select a valid food item!');
         }
     } else {
         alert('Please select a food item.');
     }
 });