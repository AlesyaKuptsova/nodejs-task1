const fs = require("fs");
const consoleArguments = require("./src/console_arguments");
const caesarStream = require("./src/caesar_stream");
const { decriptionShift, normalizeShift } = require("./src/caesar_cipher");

const args = consoleArguments.parseArguments();

let source;
if (args.inputFile) {
  source = fs.createReadStream(args.inputFile);
} else {
  source = process.stdin;
}

let target;
if (args.outputFile) {
  target = fs.createWriteStream(args.outputFile, {
    flags: fs.constants.O_APPEND | fs.constants.O_RDWR,
  });
} else {
  target = process.stdout;
}

let shift = normalizeShift(args.shift);
if (args.action == "decode") {
  shift = decriptionShift(shift);
}

caesarStream.encryptStream(source, target, shift);
