const fs = require("fs");
const consoleArguments = require("./modules/console_arguments");
const caesarStream = require("./modules/caesar_stream");
const { decriptionShift } = require("./modules/caesar_cipher");

const args = consoleArguments.parseArguments();

let source;
if (args.inputFile) {
   source = fs.createReadStream(args.inutFile);
} else {
  source = process.stdin;
}

let target;
if (args.outputFile) {
   target = fs.createWriteStream(args.outputFile, { flags: "a" });
 } else {
   target = process.stdout;
 }

 let shift = args.shift;
 if (args.action == "decode") {
    shift = decriptionShift(shift);
 }

caesarStream.encryptStream(source, target, shift);