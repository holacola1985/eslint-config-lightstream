module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "commonjs": true
  },
  "ecmaFeatures": {
    "jsx": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": 1,
    "jsx-quotes": 1,
    "no-console": 0,
    "no-trailing-spaces": 1,
    "quotes": [2, "single"],
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 0,
    "semi": 1,
    "strict": 0
  }
};
