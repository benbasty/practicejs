
const findStarWarsCharacters = async () => {
    const res = await axios.get('https://swapi.dev/api/people/1/');
    console.log(`We all know the first character is going to be ${res.data.name}`);
}
findStarWarsCharacters();