// module.exports = {
//   preset: 'ts-jest',
//   modulePaths: ['/shared/vendor/modules'],
//   moduleFileExtensions: ['js', 'jsx'],
//   moduleDirectories: ['node_modules', 'bower_components', 'shared'],

//   moduleNameMapper: {
//     '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
//     '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',

//     // '^react(.*)$': '<rootDir>/vendor/react-master$1',
//     '^config$': '<rootDir>/configs/app-config.js',
//   },
//   transform: {
//     '^.+\\.(ts|tsx)?$': 'ts-jest',
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
//   transformIgnorePatterns: [
//     '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$',
//     '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$',
//     '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$',
//   ],
// };

// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.{js,jsx}'],
//   coverageDirectory: 'coverage',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// };

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['client/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
