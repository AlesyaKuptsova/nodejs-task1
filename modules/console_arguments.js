const { program } = require("commander");

program
  .option("-s, --shift [number]", "a shift", parseInt)
  .option("-i, --input [string]", "an input file")
  .option("-o, --output [string]", "an output file")
  .option("-a, --action [string]", "an action encode/decode"); //TODO: check encode or decode

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