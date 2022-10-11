
const regForm = document.querySelector('.login-form');
  
regForm.addEventListener('submit', validation);

function validation(event) {
    event.preventDefault();
    const regData = { };
    if (event.currentTarget.elements[0].value === '' || event.currentTarget.elements[1].value === '') {
        return alert('Всі поля форми є обов`язкові для заповнення');
    } else {

        regData[event.currentTarget.elements[1].name] = event.currentTarget.elements[0].value;
        regData[event.currentTarget.elements[0].name] = event.currentTarget.elements[1].value;
        regForm.reset();
        console.log(regData);
        return regData;
    }
}