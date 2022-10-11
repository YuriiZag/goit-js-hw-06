const inputValueRef = document.querySelector('#validation-input')


inputValueRef.addEventListener('blur', (event) => {

    if (inputValueRef.getAttribute('data-length') == event.currentTarget.value.length) {
        inputValueRef.classList.remove('invalid');
        return inputValueRef.classList.add('valid');
        
    } else {
        inputValueRef.classList.remove('valid');
        return inputValueRef.classList.add('invalid');
        
    }
})