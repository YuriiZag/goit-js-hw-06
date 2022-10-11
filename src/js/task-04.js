const refs = {
    incrementBtn: document.querySelector('[data-action ="increment"]'),
    decrementBtn: document.querySelector('[data-action ="decrement"]'), 
    counterValue: document.querySelector('#value'),
};

console.log(refs.counterValue.textContent);
let counterValue = 0;

refs.incrementBtn.addEventListener('click', incrementClikRegister);
refs.decrementBtn.addEventListener('click', dencrementClikRegister);


function incrementClikRegister() {
    
    counterValue += 1;
    console.log(counterValue)
    return  refs.counterValue.textContent = counterValue;

}
function dencrementClikRegister() {
    console.log('click')
    counterValue -= 1;
    return  refs.counterValue.textContent = counterValue;
}