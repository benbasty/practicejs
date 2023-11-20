const clickMe = document.querySelector('#clickme');
const doubleClickMe = document.querySelector('#doubleclick');

clickMe.addEventListener('click', function() {
    alert('you clicked me')
});

doubleClickMe.addEventListener('dblclick', function() {
    alert('you double clicked me')
});