const refs = {
  boxesQuantity: document.querySelector('input'),
  boxContainer: document.querySelector('#boxes'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
}

refs.createButton.addEventListener('click', createBoxes);

refs.destroyButton.addEventListener('click', destroyBoxes);


let memoryCell = 30

function createBoxes() {
  
  const boxesArray = [];  
 
  for (let i = memoryCell; i < refs.boxesQuantity.value * 10 + memoryCell; i += 10) {
    let box = document.createElement('div');
    
    box.style.width = i + 'px';
    box.style.height = i + 'px';
    

    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box)
  }
  refs.boxContainer.append(...boxesArray);
  memoryCell = memoryCell + refs.boxesQuantity.value * 10
}

  





function destroyBoxes() {
  refs.boxContainer.innerHTML = '';
  memoryCell = 30

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
