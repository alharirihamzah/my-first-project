module.exports = {
	"plugins": [
		"react"
	],
	"env": {
		"es6": true,
		"browser": true,
		"commonjs": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},
	"rules": {
		"indent": [
			2,
			'tab',
			{
				"SwitchCase": 1
			}
		],
		"no-console": 0,
		"no-case-declarations": 0,
		"react/jsx-uses-vars": [2],
		"react/jsx-uses-react": [2]
	}
}