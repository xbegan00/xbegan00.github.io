const leftPanelButton = document.getElementById('leftPanelButton');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const body = document.body;

leftPanelButton.addEventListener('click', () => {
    // Handle left panel button click
    alert('Button in the left panel clicked!');
  });

// Add event listeners for input changes
input1.addEventListener('input', () => {
    console.log('Frekvence value:', input1.value);
  });
  
  input2.addEventListener('input', () => {
    console.log('Cas value:', input2.value);
  });
  
  input3.addEventListener('input', () => {
    console.log('Rychlost value:', input3.value);
  });