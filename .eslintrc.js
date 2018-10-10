module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "plugins": ["react", "babel", "jsx-a11y"],

  "extends": "airbnb",

  "parserOptions": {
        "sourceType": "module",
    },

  "rules": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true,
    "jsx": true,
    "no-undef": "warn",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "warn",
    "react/forbid-prop-types": "warn",
    "react/no-deprecated": "warn",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "react/jsx-filename-extension": "warn",
    "no-unused-vars": "warn",
  },
}
