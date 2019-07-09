const IsNumberValid = require('../main');
const createMultiplyTable = require('../main');
const IsSmallOrEqual = require('../main');
const createTest = require('../main');
it ('should return false when call a IsNumberValid', () => {
expect(IsNumberValid(-1, 1003)).toBe(False);
});
it ('should return false when call a IsNumberValid', () => {
expect(IsNumberValid(1, 1003)).toBe(False);
});
it ('should return true when call a IsNumberValid', () => {
expect(IsNumberValid(1, 10)).toBe(True);
});
it ('should return false when call a IsNumberValid', () => {
expect(IsNumberValid(-1, 3)).toBe(False);
});
it ('should return false when call a IsNumberValid', () => {
expect(IsNumberValid(1, 1003)).toBe(False);
});
it ('should return false when call a IsSmallOrEqual', () => {
expect(IsSmallOrEqual(11, 10)).toBe(True);
});
it ('should return MultiplyTable when call a createMultiplyTable', () => {
expect(createMultiplyTable (1, 2, true, true)).toBe(
'1*1=1'+
'2*1=2'+" "+' 2*2=4'
);
});
it ('should return false when call a createTest', () => {
expect(createTest(1, 2)).toBe(
'1*1=1'+
'2*1=2'+" "+' 2*2=4' 
);
});