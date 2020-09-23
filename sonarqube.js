const scanner = require('sonarqube-scanner')

scanner(
	{
		serverUrl: 'http://localhost:9000',
		token: "2767e1ce5fb772f9c04f041a64124eadb99bb71f",
	},
	() => process.exit()
)