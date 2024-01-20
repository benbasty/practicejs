const findStarWarsPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/1/');
    const data = await res.json();
    console.log(`The main character here is ${data.name}`);

    const res2 = await fetch('https://swapi.dev/api/people/2/');
    const data2 = await res2.json();
    console.log(`The second character here is ${data2.name}`);
}
findStarWarsPeople();