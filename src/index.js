const { execSync } = require("child_process");
function bashEscape(str) {
  return `'${str.replace(/'/g, "'\\''")}'`;
}
function interpolate(strings, ...values) {
  let str = "";
  for (let i = 0; i < values.length; i++) {
    str += strings[i] + values[i];
  }
  str += strings[strings.length - 1];
  return str;
}

function shell(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8" });
  } catch (e) {
    return { ...e };
  }
}

module.exports = {
  $: function (strings, ...values) {
    const escapedValues = values.map(bashEscape);
    const str = interpolate(strings, ...escapedValues);

    return shell(str);
  },
};
