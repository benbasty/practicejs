const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Coonection Timeout:(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
fakeRequestPromise('yahoo.com/api/box/page1')
    .then((data) => {
        console.log("page1 worked")
        console.log(data)
        return fakeRequestPromise('yahoo.com/api/box/page2')
    })
    .then((data) => {
        console.log("page2 worked")
        console.log(data)
        return fakeRequestPromise('yahoo.com/api/box/page3')
    })
    .then((data) => {
        console.log("page3 worked")
        console.log(data)
    })
    .catch(() => {
        console.log("Oh no, Request failed !!!")
    })