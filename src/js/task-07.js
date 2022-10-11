const inputValueRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputValueRef.addEventListener('input', (event) => {
    spanRef.style.fontSize = event.currentTarget.value + 'px';
    
})