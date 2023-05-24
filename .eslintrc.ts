module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'max-len': ['error', 2000],
        'prefer-const': [
            'error',
            {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': false
            }
        ]
    },
    'globals': {
        'process': true
    }
};
