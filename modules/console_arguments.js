const { program } = require("commander");

program
  .requiredOption("-s, --shift <number>", "a shift", parseInt)
  .requiredOption("-a, --action <string>", "an action encode/decode") //TODO: check encode or decode
  .option("-i, --input [string]", "an input file")
  .option("-o, --output [string]", "an output file");

function parseArguments() {
  program.parse();
  const options = program.opts();
  return {
    'inputFile': options.input,
    'outputFile': options.output,
    'action': options.action,
    'shift': options.shift,
  }
}

module.exports = {
  parseArguments,
};