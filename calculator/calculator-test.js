
it('should calculate the monthly rate correctly', function () {
  //...
  const values = {
    amount:100,
    years: 100,
    rate:1.004
  }
  expect(calculateMonthlyPayment(values)).toEqual('0.13')
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 222222222,
    years: 22222222222222222,
    rate: 2333333333333333
  };
  expect(calculateMonthlyPayment(values)).toEqual('432098764999999946752.00');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
