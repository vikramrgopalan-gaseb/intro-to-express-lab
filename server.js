//IMPORTS
const express = require('express')
const morgan = require('morgan')

//MIDDLEWARE
const app = express()

app.use(morgan('dev'))


/* 1. Be Polite, Greet the User
Task: Create a route that responds to URLs like /greetings/<username-parameter>.

Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.” */

app.get('/greetings/:username', (req, res)=>{

    res.send(`Greetings, ${req.params.username}! I hope you have a nice day!`)
})

/* 2. Rolling the Dice
Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

Examples: Matches routes like /roll/6 or /roll/20.

Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.” */

/* app.get('/roll/:number', (req, res)=>{
    const dicenumber = req.query.dicenumber
    if 
        res.send(`You must specify a number.`)
}) */

// 3. I Want THAT One!

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:indexparam', (req, res) => {
    const indexparam = Number(req.params.indexparam)
 if (indexparam === 0 || indexparam === 1 || indexparam === 2) {
    res.send(`So, you want the ${collectibles[indexparam].name}? For ${collectibles[indexparam].price}, it can be yours!`)
 }
 else
    res.send('This item is not yet in stock. Check back soon!')
});

// 4. SHOES

const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  app.get('/shoes', (req, res) => {
    const minPrice = Number(req.query["min-price"]);
    const maxPrice = Number(req.query["max-price"]);
    const type = req.query.type
    let shoeCopy = shoes.slice()

    if (minPrice) {
        shoeCopy = shoeCopy.filter(shoe => shoe.price >= minPrice)
    }
    
    if (maxPrice) {
        shoeCopy = shoeCopy.filter(shoe => shoe.price <= maxPrice)
    }
    
    if (type) {
        shoeCopy = shoeCopy.filter(shoe => shoe.type === type)
    }
    res.send(shoeCopy)
});

//SERVER LISTENER
app.listen(3000, ()=>{
    console.log('Listening on port 3000')
});