
QUnit.test( "basics", function( assert ) {
  function testNumber(n, expected) {
    assert.equal(prettify(n), expected);
  }
  testNumber(1, '1');
  testNumber(1e3, '1000');
  testNumber(1e6, '1 million');
  testNumber(1e9, '1 billion');
  testNumber(1e12, '1 trillion');
  testNumber(1e15, '1 quadrillion');
  testNumber(1e18, '1 quintillion');
  testNumber(1e21, '1 sextillion');
  testNumber(1e24, '1 septillion');
  testNumber(1e27, '1 octillion');
  testNumber(1e30, '1 nonillion');
  testNumber(1e33, '1 decillion');
});

QUnit.test( "more digits", function( assert ) {
  function testNumber(n, expected) {
    assert.equal(prettify(n), expected);
  }
  testNumber(999, '999');
  testNumber(999999, '999999');
  testNumber(999e6, '999 million');
  testNumber(999e9, '999 billion');
  testNumber(999e12, '999 trillion');
  testNumber(999e15, '999 quadrillion');
  testNumber(999e18, '999 quintillion');
  testNumber(999e21, '999 sextillion');
  testNumber(999e24, '999 septillion');
  testNumber(999e27, '999 octillion');
  testNumber(999e30, '999 nonillion');
  testNumber(999e33, '999 decillion');
});

QUnit.test( "real numbers", function( assert ) {
  function testNumber(n, expected) {
    assert.equal(prettify(n), expected);
  }
  testNumber(0.0, '0');
  testNumber(0.0001, '0');
  testNumber(0.001, '0.001');
  testNumber(0.01, '0.010');
  testNumber(0.1, '0.100');
  testNumber(1.0e6, '1 million');
  testNumber(1.0001e6, '1 million');
  testNumber(1.001e6, '1.001 million');
  testNumber(1.01e6, '1.010 million');
  testNumber(1.1e6, '1.100 million');
  testNumber(1.1e9, '1.100 billion');
});
