const { add, sub } = require("../src");

QUnit.module("add", function () {
  QUnit.test("should add two numbers", function (assert) {
    assert.equal(add(1, 1), 2, "1 + 1 = 2");
  });
});

QUnit.module("sub", function () {
  QUnit.test("should subtract two numbers", function (assert) {
    assert.equal(sub(1, 1), 2, "1 - 1 = 0");
  });
});
