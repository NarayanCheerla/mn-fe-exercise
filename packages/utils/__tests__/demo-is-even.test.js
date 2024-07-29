const { ConvertAsHeading } = require("../dist/utils");

test("isEven", () => {
  expect(ConvertAsHeading("hi-welcome")).toEqual("Hi Welcome");
});
