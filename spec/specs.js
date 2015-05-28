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

describe("upToBaseTenConverter", function() {
  it("will return the given string in any base under 11 as a decimal number", function() {
    expect(upToBaseTenConverter("1322", 4)).to.equal(122);
  })
});

describe("hexadecimalConverter", function() {
  it("will return the given hexadecimal string as a decimal number", function() {
    expect(hexadecimalConverter("73f")).to.equal(1855);
  })
});
