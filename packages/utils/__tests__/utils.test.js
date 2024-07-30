var utils = require("../dist/utils");

test("ConvertAsHeading", function () {
  expect(utils.ConvertAsHeading("hi-welcome")).toEqual("Hi Welcome");
});
