document.querySelector('button').addEventListener('click', function(e){
    console.log(e);
});
const input = document.querySelector('input');

// input.addEventListener('keydown', function() {
//     alert("You pressed a key down")
// });
input.addEventListener('keyup', function(e) {
    console.log(e);
    const letterPressed = document.querySelector('#letterPressed');
    letterPressed.innerText = e.key;
    // alert(`You pressed the keyboard ${e.key}`);
});