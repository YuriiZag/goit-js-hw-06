const buttonRef = document.querySelector('.change-color');
const buttonContainerRef = document.querySelector('.widget');
const textContainerRef = document.querySelector('.color');
const bodyRef = document.querySelector('body')

buttonRef = addEventListener('click', backgroundColorChanger);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


function backgroundColorChanger() {

  
  bodyRef.style.backgroundColor = getRandomHexColor(); 
  textContainerRef.textContent = buttonContainerRef.style.backgroundColor; 
}