# Caesar cipher CLI tool

This is tool that will encode and decode a text(English alphabet) by Caesar cipher. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

## How to install tool

1. Download tool from this repository (git clone 'git@github.com:AlesyaKuptsova/nodejs-task1.git').
2. Run the command line and go to the tool folder - nodejs-task1.
3. Switch to caesar-cipher branch (git checkout caesar-cipher).
4. Enter the command "npm install" or "npm i" and wait for the dependency installation process to complate.
5. Now you can use tool.

## How to work with tool

Caesar cipher CLI tool accept 4 options (short alias and full name):

    -s, --shift: a shift
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an action encode/decode
The **action** option take the value: **encode** or **decode** where **encode** means *encrypt* and **decode** means *decrypt*.

The **shift** option is a integer. It can be a positive or negative integer.
##### Important! When you use *shift* with negative integer you can use these construction **--shift=-integer** or **--shift -integer**.

**action** and **shift** options are required, if one of them missed you can see error message.

If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) you can see error message.
For encoding/decoding, please, use only the English alphabet, all other characters will be kept untouched.
If the text is entered from the console, then the program does not terminate after the encryption / decryption of the entered text is completed, you can enter more text.
To exit the tool press *ctrl+C* or *ctrl+D*.
### Examples:
1. _-a (--action)_ is **encode**

```bash
$ node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node caesar --action encode --shift 7 --input input.txt --output output.txt
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node caesar --action decode --shift 7 --input output.txt --output input.txt
```

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> input.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node caesar --action encode --shift=-1 --input input.txt --output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`

4. _Changing the order of arguments_

```bash
$ node caesar --input input.txt --output output.txt --action encode --shift 1
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`

5. _Input and/or output file is missed_

```bash
$ node caesar --output output.txt --action encode --shift 1
```
> console input:
> `This is secret. Message about "_" symbol!`

> output.txt
> `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`

```bash
$ node caesar --input input.txt --action encode --shift 1
```
> input.txt
> `This is secret. Message about "_" symbol!`

> console output:
> `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`

```bash
$ node caesar --action encode --shift 1
```
> console input:
> `AaBbZz`
> console output:
> `BbCcAa`

6. _Input and/or output file does not exist or is not accessable, or not a file_

```bash
$ node caesar --input plain.txt --output output.txt --action encode --shift -1
```
> console output:
> `ENOENT: no such file or directory, open 'plain.txt'`

```bash
$ node caesar --input input.txt --output encoded.txt --action encode --shift -1
```
> console output:
> `ENOENT: no such file or directory, open 'encoded.txt'`

```bash
$ node caesar --input test --output output.txt --action encode --shift -1
```

> console output:
> `ENOENT: no such file or directory, open 'test'`

7. _Action (encode/decode) or/and the shift is missed_

```bash
$ node caesar -s 7 -i "./input.txt" -o "./output.txt"
```
> console output:
> `error: required option '-a, --action <string>' not specified`

```bash
$ node caesar -s 7 --action -i "./input.txt" -o "./output.txt"
```
> console output:
> `error: option '-a, --action <string>' argument '-i' is invalid. action should be only "encode" or "decode"`

```bash
$ node caesar -a encode -i "./input.txt" -o "./output.txt"
```
> console output:
> `error: required option '-s, --shift <number>' not specified`

```bash
$ node caesar -a encode -s -i "./input.txt" -o "./output.txt"
```
> console output:
> `error: option '-s, --shift <number>' argument '-i' is invalid. Not a number`

```bash
$ node caesar -i "./input.txt" -o "./output.txt"
```
> console output:
> `error: required option '-s, --shift <number>' not specified`

8. _The shift can more than 26_`

```bash
$ node caesar --action encode --shift 52 --input input.txt --output output.txt
```
> console input:
> `This is secret. Message about "_" symbol ТесТ первый!`

> output.txt
> `This is secret. Message about "_" symbol ТесТ первый!`

9. _The shift is not a number_

```bash
$ node caesar --action encode --shift number --input input.txt --output output.txt
```
> console output:
> `error: option '-s, --shift <number>' argument 'number' is invalid. Not a number`

```bash
$ node caesar --action encode --shift NaN --input input.txt --output output.txt
```
> console output:
> `error: option '-s, --shift <number>' argument 'NaN' is invalid. Not a number`

```bash
$ node caesar --action encode --shift undefined --input input.txt --output output.txt
```
> console output:
>`error: option '-s, --shift <number>' argument 'undefined' is invalid. Not a number`

```bash
$ node caesar --action encode --shift Infinity --input input.txt --output output.txt
```
> console output:
>`error: option '-s, --shift <number>' argument 'Infinity' is invalid. Not a number`

```bash
$ node caesar --action encode --shift a1a --input input.txt --output output.txt
```
> console output:
>`error: option '-s, --shift <number>' argument 'a1a' is invalid. Not a number`

```bash
$ node caesar --action encode --shift 1a --input input.txt --output output.txt
```
> console output:
>`error: option '-s, --shift <number>' argument '1a' is invalid. Not a number`


