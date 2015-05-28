describe("base", function() {
  it("will return the given binary string as a decimal number", function() {
    expect(base("10011100010000")).to.equal(10000);
  });

  it("will return the given binary string as a decimal number", function() {
    expect(base("10000000011110")).to.equal(8222);
  });
});
