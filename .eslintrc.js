module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-unused-expressions": "error",        
        "react/jsx-closing-bracket-location": [
			"error",
			"tag-aligned"
		],
		"react/display-name": "warn",
		"react/jsx-indent": [
			2,
			"tab"
		],
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-undef": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/no-render-return-value": "error",
		"react/react-in-jsx-scope": "error",
		"react/style-prop-object": "error",
        "semi": [
            "error",
            "always"
        ]
    }
};