// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'red';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'black';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'orange';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'green';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'purple';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'blue';
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('yellow', 1000, () => {
    delayedColorChange('red', 1000, () => {
        delayedColorChange('black', 1000, () => {
            delayedColorChange('orange', 1000, () => {
                delayedColorChange('green', 1000, () => {
                    delayedColorChange('purple', 1000, () => {
                        delayedColorChange('blue', 1000, () => {
                            delayedColorChange('cyan', 1000, () => {
        
                            })
                        })
                    })
                })
            })
        })
    })
})

// javascript does one thing at a time, 
// thats why we have to use callbacks. 
// but callbacks can be messy when we have 
// a lot of tasks same as the code we did just now
// thats why we have async and promises