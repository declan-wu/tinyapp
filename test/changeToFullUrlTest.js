const { assert } = require("chai");
const { changeToFullUrl } = require("../helper");

describe("changeToFullUrl", function() {
  it("should return http://www.google.com input is www.google.com", function() {
    const url = changeToFullUrl("www.google.com");
    const expectedOutput = "http://www.google.com";
    assert(url === expectedOutput);
  });
  it("should return http://www.google.com input is http://www.google.com", function() {
    const url = changeToFullUrl("http://www.google.com");
    const expectedOutput = "http://www.google.com";
    assert(url === expectedOutput);
  });
});
