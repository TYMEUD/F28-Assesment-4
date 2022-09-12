let affirmations = require('./db.json')
globalID = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["The gas station sushi will affect your future karma", "Help i'm being held prisoner in a fortune cookie factory, they have my family hostage","You will have a terrible day","Life is change, growth is optional","Your loneliness will never subside"]

        //Choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getInsults: (req, res) => {
     const insults = ["Gee, you're awful at html", "idk how you're gonna pass this assessment", "Ya mommma"];
   
     // choose random insult
     let randomIndex = Math.floor(Math.random() * insults.length);
     let randomInsult = insults[randomIndex];
   
     res.status(200).send(randomInsult);
    },

    createUplift: (req, res) => {
        const {quote,imageURL} = req.body;
        let newPositive = {
            id: globalID,
            quote,
            imageURL
        }
        positive.push(newPositive)
        globalID++;
        res.status(200).send(positive)
    },

    getPositive: (req, res) => {
        let randomIndex = Math.floor(Math.random() * affirmations.length);
        let randomAffirmation = affirmations[randomIndex];
        res.status(200).send(randomAffirmation)
    }
}