const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const insultBtn = document.getElementById("insultButton")
const addPositiveBtn = document.getElementById('add-positive-btn')
const getPositiveBtn = document.getElementById('get-positive-btn')

baseURL = "http://localhost:4000/api"

const positiveCallback = ({ data: randomAffirmation }) => displayPositive(randomAffirmation)
const errCallback = err => console.log(err)


const getAPositive = () => axios.get(`${baseURL}/positive`).then(positiveCallback).catch(errCallback)
const createPositive = body => axios.post(baseURL, body).then(positiveCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

let imageURL = document.querySelector('#img')
let quote = document.querySelector('#quote')

let bodyObj = {

    quote: quote.value,
    imageURL: imageURL.value
}

createPositive(bodyObj)

quote.value = ''
imageURL.value = ''

}

function createPositiveCard(positive) {
    const positiveCard = document.createElement('div')
    positiveCard.classList.add('positive-card')

    positiveCard.innerHTML = `<img alt='positive cover image' src=${randomAffirmation.imageURL} class="positive-cover-image"/>
    <p class="quote">${randomAffirmation.quote}</p>
    `


    positiveContainer.appendChild(positiveCard)
}

function displayPositive(arr) {
    positiveContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPositiveCard(arr[i])
        console.log('image and quote inserted')
    }
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getInsults = () => {
    axios.get("http://localhost:4000/api/insults/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune =() => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getPositive = () => {
    axios.get("http://localhost:4000/api/positive")
    .then(res => {
        const data = res.data;
    })

}



complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

insultBtn.addEventListener('click', getInsults)

addPositiveBtn.addEventListener('click',createPositive)

