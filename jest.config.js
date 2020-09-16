module.exports = {
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "setupFilesAfterEnv": [ "jest-extended", "@testing-library/jest-dom" ],
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
}
