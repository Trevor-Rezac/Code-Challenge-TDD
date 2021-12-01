// IMPORT MODULES under test here:
import { 
    addExclamationPoints, 
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    makeLuckyGreeting,
    returnAsAString,
    getSecondItem,
    getLastItem,
    getRandomNumber,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points', (expect) => {
    
    const expected = 'puppy!!!';
    const actual = addExclamationPoints('puppy');
    expect.equal(actual, expected, 'should return the word puppy with !!!');

    const expected2 = 'guppy!!!';
    const actual2 = addExclamationPoints('guppy');
    expect.equal(actual2, expected2, 'should return the word guppy with !!!');

    const expected3 = 'sloppy!!!';
    const actual3 = addExclamationPoints('sloppy');
    expect.equal(actual3, expected3, 'should return the word sloppy with !!!');
});


test('multiplyBySeven should take in one number and multiply it by 7', (expect) => {
    
    const expected = 28;
    const actual = multiplyBySeven(4);
    expect.equal(actual, expected, 'this test should return the product of 4 and 7');

    const expected2 = 42;
    const actual2 = multiplyBySeven(6);
    expect.equal(actual2, expected2, 'this test should return the product 6 and 7');

    const expected3 = 35;
    const actual3 = multiplyBySeven(5);
    expect.equal(actual3, expected3, 'this test should return the product 5 and 7');
});

test('multiplyBy12ThenHalve should take in a number and multiply it by 12 then cut the result in half', (expect) => {
    
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);
    expect.equal(actual, expected, 'this test should return the product of 4 and 12 divided in half');

    const expected2 = 30;
    const actual2 = multiplyBy12ThenHalve(5);
    expect.equal(actual2, expected2, 'this test should return the product of 5 and 12 divided in half');

    const expected3 = 36;
    const actual3 = multiplyBy12ThenHalve(6);
    expect.equal(actual3, expected3, 'this test should return the product of 6 and 12 divided in half');
});

test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    
    const expected = 3;
    const actual = divideThenMultiply(2, 4, 6);
    expect.equal(actual, expected, 'this test should divide 2 by 4 then multiply by 6');
    
    const expected2 = 3;
    const actual2 = divideThenMultiply(6, 4, 2);
    expect.equal(actual2, expected2, 'this test should divide 6 by 4 then multiply by 2');
    
    const expected3 = 4;
    const actual3 = divideThenMultiply(10, 5, 2);
    expect.equal(actual3, expected3, 'this test should divide 10 by 5 then multiply by 2');
});

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    
    const expected = [2, 4, 6];
    const actual = returnAsAnArray(2, 4, 6);
    expect.deepEqual(actual, expected, 'this test should return 2 4 6 as an array');

    const expected2 = [6, 4, 2];
    const actual2 = returnAsAnArray(6, 4, 2);
    expect.deepEqual(actual2, expected2, 'this test should return 6 4 2 as an array');

    const expected3 = [10, 5, 2];
    const actual3 = returnAsAnArray(10, 5, 2);
    expect.deepEqual(actual3, expected3, 'this test should return 10 5 2 as an array');
});

test('returnAsString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    
    const expected = '123';
    const actual = returnAsAString(1, 2, 3);
    expect.equal(actual, expected, 'this test should return 1 2 and 3 together as a string');

    const expected2 = '321';
    const actual2 = returnAsAString(3, 2, 1);
    expect.equal(actual2, expected2, 'this test should return 3 2 and 1 together as a string');

    const expected3 = '654';
    const actual3 = returnAsAString(6, 5, 4);
    expect.equal(actual3, expected3, 'this test should return 6 5 and 4 together as a string');
});

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those two numbers is todays lucky number', (expect) => {

    const expected = 'Hello! Your lucky number for the day is 6.';
    const actual = makeLuckyGreeting(2, 4);
    expect.equal(actual, expected, 'this test should return a string with the sum of 2 and 4');

    const expected2 = 'Hello! Your lucky number for the day is 8.';
    const actual2 = makeLuckyGreeting(4, 4);
    expect.equal(actual2, expected2, 'this test should return a string with the sum of 4 and 4');

    const expected3 = 'Hello! Your lucky number for the day is 10.';
    const actual3 = makeLuckyGreeting(6, 4);
    expect.equal(actual3, expected3, 'this test should return a string with the sum of 6 and 4');
});

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    
    const expected = 'apple';
    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.equal(actual, expected, 'this test should return the string apple');

    const expected2 = 'kiwi';
    const actual2 = getSecondItem(['apple', 'kiwi', 'orange', 'plum']);
    expect.equal(actual2, expected2, 'this test should return the string kiwi');

    const expected3 = 'orange';
    const actual3 = getSecondItem(['kiwi', 'orange', 'apple', 'plum']);
    expect.equal(actual3, expected3, 'this test should return the string orange');
});

test('getLastItem should take an array and return the LAST item in the array, no matter the array\'s length', (expect) => {

    const expected = 'plum';
    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.equal(actual, expected, 'this test should return plum');

    const expected2 = 'orange';
    const actual2 = getLastItem(['kiwi', 'apple', 'plum', 'orange']);
    expect.equal(actual2, expected2, 'this test should return orange');

    const expected3 = 'apple';
    const actual3 = getLastItem(['kiwi', 'orange', 'plum', 'apple']);
    expect.equal(actual3, expected3, 'this test should return apple');
});

test('getRandomNumber should make a random number between 0 and 5', (expect) => {
    const expected = `${'number'}`;
    const actual = getRandomNumber();
    expect.actual(actual, expected, 'this test should return a random number between 0 and 5');
});