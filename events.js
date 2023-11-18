const chill = document.querySelector('#chill');
chill.onclick = function () {
    console.log('Just Chill');
    alert('Just Chiiiill');
}

function tooChill() {
    alert('way too chill bro');
}

const chillspace = document.querySelector('#chillspace');
chillspace.onmouseenter = tooChill;