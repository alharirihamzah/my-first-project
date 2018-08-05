'use strict'

const path = require('path')
const express = require('express')

const app = express()
const http = require('http').Server(app)

const port = (process.env.PORT || 5000)

console.log('First Name: ', process.env.FIRST_NAME)
console.log('Last Name: ', process.env.LAST_NAME)

app.use(express.static(path.join(__dirname,'../build')))

app.get('*', (request, response) => {
	response.sendFile('index.html', {
		root: `${__dirname}/../build`
	})
})

http.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})