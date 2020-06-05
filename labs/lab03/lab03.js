import fs from 'fs';
import zlib from 'zlib';

class lab03 {

  syncFileRead(filename) {
    /* Implement function here */
    var fs = require("fs");
    var contents = fs.readFileSync(filename, 'UTF8');

    return contents.toString();
  }

  asyncFileRead(filename, callbackfunc) {
    /* Implement function here */
    var fs = require("fs");
    let contents;
    fs.readFile('sample.txt', 'UTF8', function(err, contents) {
       if (err) return console.error(err);
          callbackfunc(contents);
    });
  }

  compressFileStream(inputfile, outputfile) {
    /* Implement function here */
    var fs = require("fs");
    var outputStream = fs.createReadStream(inputfile)
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream(outputfile));
    return outputStream;
  }

  decompressFileStream(inputfile, outputfile) {
    /* Implement function here */
    var fs = require("fs");
    var outputStream = fs.createReadStream(inputfile)
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream(outputfile));
    return outputStream;
  }

  listDirectoryContents(dirname, callbackfunc) {
      /* Implement function here */
    var fs = require("fs");
    fs.readdir(dirname, function(err, data) {
      if(err) {
        return console.error(err);
      }
      return callbackfunc(data);
    });
  }
}

export {lab03};
