const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const form = document.querySelector('form')

baseURL = "http://localhost:4000/api"

const positiveCallback = ({ data: positive }) => displayPositive(positive)
const errCallback = err => console.log(err)

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

    positiveCard.innerHTML = `<img alt='positive cover image' src=${positive.imageURL} class="positive-cover-image"/>
    <p class="quote">${positive.quote}</p>
    `


    positiveContainer.appendChild(positiveCard)
}

function displayPositive(arr) {
    positiveContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPositiveCard(arr[i])
    }
}








const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
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


complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

form.addEventListener('submit',createPositive)