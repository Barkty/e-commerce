//Get the increase button and listen to event
document.getElementById('increase').addEventListener('click', function(e) {
  // Get the quantity element
  let increase = document.querySelector("#quantity");
  // Set counter to the initial value of the button
  let counter = e.target.value;
  // Increase counter;
  counter++;
  //Update button value back to counter
  e.target.value = counter;
  //Display the new value
  increase.innerHTML = counter;
})


document.getElementById('decrease').addEventListener("click", function(e) {
  let plus = document.querySelector('#increase').value;
  let decrease = document.querySelector('#quantity');
  //Set counter to the increment button value
  let counter = plus;
  //Decrease button
  counter--;
  // Update decrement button value
  e.target.value = counter;
  //Display new value 
  decrease.innerHTML = counter;
  //Update increment button value
  document.getElementById('increase').value = counter;
})


//Get the increase button and listen to event
document.getElementById('increaseB').addEventListener('click', function(e) {
  // Get the quantity element
  let increase = document.querySelector("#quantityB");
  // Set counter to the initial value of the button
  let counter = e.target.value;
  // Increase counter;
  counter++;
  //Update button value back to counter
  e.target.value = counter;
  //Display the new value
  increase.innerHTML = counter;
})


document.getElementById('decreaseB').addEventListener("click", function(e) {
  let plus = document.querySelector('#increaseB').value;
  let decrease = document.querySelector('#quantityB');
  //Set counter to the increment button value
  let counter = plus;
  //Decrease button
  counter--;
  // Update decrement button value
  e.target.value = counter;
  //Display new value 
  decrease.innerHTML = counter;
  //Update increment button value
  document.getElementById('increaseB').value = counter;
})