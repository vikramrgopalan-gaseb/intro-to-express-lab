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
    const username = req.query.username
    
    res.send(`Greetings, ${req.params.username}! I hope you have a nice day!`)
})

//SERVER LISTENER
app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})