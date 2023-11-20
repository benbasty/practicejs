const form = document.querySelector('form');
const input = document.querySelector('#catNames');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const groceriesList = document.querySelector('#groceries');
    const newGrocery = document.createElement('li');
    groceriesList.appendChild(newGrocery).innerText = input.value;
    input.value = '';
});

