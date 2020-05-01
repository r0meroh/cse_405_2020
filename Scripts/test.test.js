//test written to send a value '9' to the Math.sqrt function and compare it
//to the expected value of ''3'

test('Math.sqrt', () => {
    expect(Math.sqrt(9)).toBe(3);
});