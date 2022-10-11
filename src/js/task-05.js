const refs = {
    inputValue: document.querySelector('#name-input'),
    buttonUserName: document.querySelector('#name-output'),
}

refs.inputValue.addEventListener("input", UserNameInsertion);


function UserNameInsertion(event) {
    if (event.currentTarget.value === '') {
        return refs.buttonUserName.textContent = 'Anonymous'
    }
        return refs.buttonUserName.textContent = event.currentTarget.value;
}