module.exports = {
  root: true,
  ignorePatterns: ['src/generated/**/*'],
  extends: ['@storybook/eslint-config-storybook', 'plugin:storybook/recommended'],
  rules: {
    'import/extensions': [
      'error',
      'never',
      { ignorePackages: true, md: 'always', svg: 'always', json: 'always', tag: 'always' },
    ],
    'no-use-before-define': 'off',
    'import/no-unresolved': ['error', { ignore: ['@storybook'] }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/return-await': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'react/display-name': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'storybook/hierarchy-separator': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'staticLifecycle',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(DerivedStateFromProps|SnapshotBeforeUpdate$)).+$/',
          'instance-methods',
          'instance-variables',
          'everything-else',
          'render',
        ],
        groups: {
          staticLifecycle: ['displayName', 'propTypes', 'defaultProps', 'getDerivedStateFromProps'],
        },
      },
    ],
    'max-classes-per-file': 'off',
  },
};
