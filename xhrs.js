// making requests from the star wars api

const req = new XMLHttpRequest();
req.onload = (function() {
    console.log('loaded ok');
    const data = JSON.parse(this.responseText);
    console.log(`${data.name}`+' hair color is ' + `${data.hair_color}`);
    console.log(`${data.name}`+' height is ' + `${data.height}` + 'cm');
})
req.onerror = (function() {
    console.log('error');
    console.log(this);
})
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();