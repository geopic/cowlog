const mockData = require('../mockData')
let runner = require('../lib/test-runner')()

let returnValue = runner.print(mockData.testFunction,
                               mockData.abcString,
                               mockData.threeText,
                               mockData.abcString)('return')

console.log(returnValue)
console.log(returnValue + 'z')
