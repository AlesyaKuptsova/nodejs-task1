const fs = require("fs");
const { pipeline, Transform } = require("stream");
const { encrypt } = require("./caesar_cipher");

function encryptStream(inputStream, outputStream, shift) {
  const encodeTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(encrypt(chunk.toString(), shift));
      callback();
    }
  });
  pipeline(inputStream, encodeTransform, outputStream, (err) => {
    if (err) {
      process.stderr.write(err.message + "\n");
      process.exit(2);
    }
  });
}

module.exports = {
  encryptStream,
};
