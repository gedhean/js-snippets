const path = require("path");
const fs = require("fs");

//passsing directoryPath and callback function
function readDir(dirpath, output, pattern, recursive) {
  console.log('Reading dir:', dirpath);
  const files = fs.readdirSync(dirpath);
  //listing all files using forEach
  files.forEach(function (file) {
    const filePath = path.join(dirpath, file);
    if (recursive && fs.lstatSync(filePath).isDirectory()) {
      readDir(filePath, output, pattern);
    } else if (pattern.test(filePath)) {
      // const input = filePath.replace(__dirname + "/", "");
      // Do whatever you want to do with the file
      output.push(filePath);
      // console.log(input);
    }
  });
}

/**
 *
 * @param {Object} options.dirname directory name relative to script path (default: .)
 * @param {Object} options.pattern file pattern matching (default: .*)
 * @param {Object} options.recursive whether should lookup recursively or not (default: true)
 */

function readDirFiles({ dirname, pattern, recursive = true}) {
  const output = []
  const dirPath = path.join(__dirname, dirname);

  readDir(dirPath, output, pattern, recursive)
  return output
}

const output = readDirFiles({ dirname:  '.', pattern: /\.js$/});
console.log(output);
