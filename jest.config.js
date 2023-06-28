/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/support/setupTests.js"
 ],
};

module.exports = config;