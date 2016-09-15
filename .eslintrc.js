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
        "import/no-extraneous-dependencies": ["warn", {"devDependencies": true}],
        "indent": ["error", 4],
        "react/prefer-stateless-function": "off",
        "class-methods-use-this": "off",
        "max-len": ["error", {"code": 120, "comments": 120}],
        "arrow-body-style": "off",
        "no-fallthrough": "off",
        "linebreak-style": "off"
    },
    "parserOptions": {
        "sourceType": "script"
    }
};
