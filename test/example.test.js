// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../is-yes.js';

const test = QUnit.test;

test('does sting yes return true', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'Yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
test('does sting yes return true', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
test('does sting yes return true', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'YES';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
test('does sting yes return false', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'No';
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
test('does sting yes return false', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'no';
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
test('does sting yes return false', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'NO';
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
import compareNumbers from '../function.js';

const test = QUnit.test;

test('is the number too high', assert => {
    //Arrange
    // Set up your parameters and expectations
    const guess = 9;
    const correctNumber = 8; 
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('is the number too low', assert => {
    //Arrange
    // Set up your parameters and expectations
    const guess = 5;
    const correctNumber = 8; 
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('is the number correct', assert => {
    //Arrange
    // Set up your parameters and expectations
    const guess = 8;
    const correctNumber = 8; 
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

