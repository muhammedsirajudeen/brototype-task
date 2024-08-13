const assert = require('node:assert');

try {
  assert.equal(1, 2);
  console.log('Assertion passed.');
} catch (err) {
  console.log('Assertion failed:', err.message);
}