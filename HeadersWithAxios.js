// specifying accept headers in order to get a jSON back
// because there might be a lot of information in the code
// so we must specify accepting headers
// so we must specify that we only want application/json as headers
// to only have json infos we can work with

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJokes();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}


const getDadJokes = async () => {
    try {
        const config = {
            headers : { Accept : 'application/json' }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return ("No jokes Availavle! Check soon");
    }
}
button.addEventListener('click', addNewJoke);