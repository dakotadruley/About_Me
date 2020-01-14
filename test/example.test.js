// IMPORT MODULES under test here:
// import example from '../src/example.js';
import example from '../is-yes.js';

const test = QUnit.test;

test('does sting yes return true', isYes(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'Yes' || 'yes' || 'YES';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
