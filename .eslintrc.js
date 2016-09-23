module.exports = {
    "parser": "babel-eslint",
    "compilerOptions": {
        "target": "es6",
        "module": "es6",
        "experimentalDecorators": true
    },
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [
            2,
            "never"
        ],
        "comma-dangle": 0,
        "react/prefer-es6-class": 0,
        "object-shorthand": 0,
        "no-underscore-dangle": 0,
        "func-names": 0,
        "space-before-function-paren": ["error", "never"]
    }
};