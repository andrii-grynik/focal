const sumFileData = async function (filePath1, filePath2, callback) {
  // IMPLEMENT ME
  let num1 = 0;
  let num2 = 0;

  let filestream = fs.createReadStream(filePath1); // created a readstream
  let rl = readline.createInterface({
    // rl acts as interface for reading from readstream line-by-line
    input: filestream,
    crlfDelay: Infinity, // this means to treat \r \t same
  });
  for await (const line of rl) {
    // reading line by line from rl
    num1 = line.match(/[+-]?\d+(\.\d+)?/g); // this is regex function
    // It will match for any numerical value in the line and if match, will return array of
    // all matches else will return null
    if (num1 != null) break;
  }

  filestream = fs.createReadStream(filePath2); // reading from second file
  rl = readline.createInterface({
    input: filestream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    num2 = line.match(/[+-]?\d+(\.\d+)?/g);
    if (num2 != null) break;
  }

  //   console.log(`num1: ${num1}, num2: ${num2}`);

  // if both numbers are not null then call the callback
  // and pass the sum. For sum , first parse the nums into
  // float value (currently they are string) and then do addition
  if (num1 === null || num2 == null) callback(true, null);
  else callback(null, parseFloat(num1[0]) + parseFloat(num2[0]));
};

// Uncomment this function to test it
//
// sumFileData("file1.txt", "file2.txt", (err, data) => {
//   console.log(`${err} : ${data}`);
// });

// Don't change below:
module.exports = { sumFileData };
