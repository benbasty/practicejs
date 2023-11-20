const button = document.querySelector('#bgColorChange');
button.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    const colorName = document.querySelector('h1');
    colorName.innerText = `rgb(${r}, ${g}, ${b})`;
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    const colorName = document.querySelector('h1');
    colorName.innerText = 'Welcome!';
    document.body.style.backgroundColor = 'white';
})