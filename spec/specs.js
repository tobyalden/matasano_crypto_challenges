describe("binaryConverter", function() {
  it("will return the given binary string as a decimal number", function() {
    expect(binaryConverter("10011100010000")).to.equal(10000);
  });

  it("will return the given binary string as a decimal number", function() {
    expect(binaryConverter("10000000011110")).to.equal(8222);
  });
});

describe("trinaryConverter", function() {
  it("will return the given trinary string as a decimal number", function() {
    expect(trinaryConverter("1001")).to.equal(28);
  });

  it("will return the given trinary string as a decimal number", function() {
    expect(trinaryConverter("20112")).to.equal(176);
  });
});

describe("hexadecimalConverter", function() {
  it("will return the given hexadecimal string as a decimal number", function() {
    expect(hexadecimalConverter("73f")).to.equal(1855);
  });
});

describe("baseConverter", function() {
  it("will return the given string and base as a decimal number", function() {
    expect(baseConverter("0117", 8)).to.equal(79);
    expect(baseConverter("CF", 16)).to.equal(207);
    expect(baseConverter("21222", 3)).to.equal(215);
    expect(baseConverter("12A", 12)).to.equal(178);
    expect(baseConverter("292", 10)).to.equal(292);
  });
});
