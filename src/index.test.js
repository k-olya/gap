const { $ } = require("./index");

describe("gap", () => {
  //   test("interpolates values into strings", () => {
  //     const name = "Alice";
  //     const greeting = gap.$`Hello, ${name}!`;
  //     expect(greeting).toBe("Hello, Alice!");
  //   });
  //   test("handles multiple values", () => {
  //     const firstName = "Alice";
  //     const lastName = "Smith";
  //     const greeting = gap.$`Hello, ${firstName} ${lastName}!`;
  //     expect(greeting).toBe("Hello, Alice Smith!");
  //   });
  //   test("handles no values", () => {
  //     const greeting = gap.$`Hello, world!`;
  //     expect(greeting).toBe("Hello, world!");
  //   });
  test("executes shell commands", () => {
    const result = $`echo ${"hello"}`;
    expect(result).toBe("hello\n");
  });
  test("lists files in test directory", () => {
    const result = $`ls -1 src/`;
    const ls = ["index.js", "index.test.js"];
    expect(result).toBe(ls.join("\n") + "\n");
  });
  test("prevents command injection", () => {
    const result = $`echo '${'hello; echo "goodbye"'}'`;
    expect(result.stdout).toBe("hello\n");
    expect(result.stderr).toBeNull();
    expect(result.exitCode).toBe(0);
  });
});
