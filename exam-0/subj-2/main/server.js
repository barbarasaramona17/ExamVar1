const express = require("express")

const app = express()

app.locals.characters = [{
	id : 1,
	name : 'jim'
}, {
	id : 2,
	name : 'jane'
}]

app.get('/characters', (req, res) => {
	res.status(200).json(app.locals.characters)
})

app.post('/characters', (req, res) => {
	// TODO i should add a character to the list if an id and a name have been provided and return a code of 201 and a message of {'message' : 'created'}. Otherwise i should return a code of 400 and a message of {'message' : 'malformed request'}
})

app.listen(8080)

module.exports = app