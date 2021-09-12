// Mit einer eigenständigen jest-config ist es nun auch möglich die tests zu debuggen (in intellij)

module.exports={
  setupFilesAfterEnv:["../../node_modules/@stencil/core/testing/jest-setuptestframework.js"],
  testEnvironment:"../../node_modules/@stencil/core/testing/jest-environment.js",
  testRegex:'(/__tests__/.*|\\.?(test|spec))\\.(ts|tsx)$',
  transform: {'^.+\\.(ts|tsx|css)$': './../../node_modules/@stencil/core/testing/jest-preprocessor.js'}
}
