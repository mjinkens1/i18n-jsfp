module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js'],
  modulePathIgnorePatterns: [
    '/benchamrk',
    '/build',
    '/example',
    '/lib_exp',
    '/node_modules',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
