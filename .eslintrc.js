module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "react/require-extension": "off",
        "strict": ["warn", "global"],
        "no-console": "off",
        "import/no-extraneous-dependencies": ["warn", { "devDependencies": true }],
        "indent": ["error", 4]
    },
    "parserOptions": {
        "sourceType": "script"
    }
};
