const { program, InvalidOptionArgumentError } = require("commander");

program
  .requiredOption("-s, --shift <number>", "a shift", parseIntFail)
  .requiredOption("-a, --action <string>", "an action encode/decode", parseAction)
  .option("-i, --input [string]", "an input file")
  .option("-o, --output [string]", "an output file");

function parseArguments() {
  program.parse();
  const options = program.opts();
  return {
    inputFile: options.input,
    outputFile: options.output,
    action: options.action,
    shift: options.shift,
  };
}

function filterInt(value) {
  if (/^[-+]?(\d+)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

function parseIntFail(value) {
  const parsedValue = filterInt(value);
  if (isNaN(parsedValue)) {
    throw new InvalidOptionArgumentError("Not a number");
  }
  return parsedValue;
}

function parseAction(value) {
  if (value !== "encode" && value !== "decode") {
    throw new InvalidOptionArgumentError(
      'action should be only "encode" or "decode"'
    );
  }
  return value;
}

module.exports = {
  parseArguments,
};
