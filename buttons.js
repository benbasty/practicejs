var buttons = new Array(100);
for (let i = 0; i < buttons.length; i++) {
    buttons[i] = generateButtonText(4);
}

for(var i = 0; i < buttons.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = buttons[i];
    document.querySelector('#container').appendChild(button);
}

function generateButtonText(length) {
    let text = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0; i < length; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
}


