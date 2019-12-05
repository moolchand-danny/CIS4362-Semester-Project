function encryptMsg(plaintext, key) {
  //Initialize all basic variables for algorithm
  var ciphertext = "";
  var padChar = "X";
  var keyLen = key.length;

  //Pad the ciphertext up so that itll fit in the array
  while (plaintext.length % keyLen != 0) {
    plaintext += padChar;
  }

  //Record length of the plaintext
  var plaintextLen = plaintext.length;
  //   console.log("Plaintext len: " + plaintextLen);
  //   console.log("Key Len: " + keyLen);

  //Calculate the row and column lengths for the array
  var colLen = Math.floor(plaintextLen / keyLen);
  var rowLen = keyLen;
  //   console.log("Col Len " + colLen);
  //   console.log("Ro Len " + rowLen);

  //Creating the 2D Array b/c Javascript does not have that as a basic structure
  var cipherArray = new Array(rowLen);
  for (i = 0; i < colLen; i++) {
    cipherArray[i] = [];
  }

  //Fill cipherArray w/ pad character
  var iterator = 0;
  for (i = 0; i < colLen; i++) {
    for (j = 0; j < rowLen; j++) {
      cipherArray[i][j] = plaintext.charAt(iterator++);
    }
  }

  //Splitting the key into an array to use as reference
  var keyArrayUnfiltered = key.split("");

  //Filtering the key so there are no repeating chars
  var keyArray = [...new Set(keyArrayUnfiltered)];

  //Created the sorted key array to use as map
  var sortedKeyArray = Array.from(keyArray);
  sortedKeyArray.sort();
  //   console.log(keyArray);
  //   console.log(sortedKeyArray);
  //   console.log(cipherArray);

  //Go through the matrix and select the specific rows in
  //keyed order in order to create the ciphertext
  for (i = 0; i < sortedKeyArray.length; i++) {
    var letter = sortedKeyArray[i];
    // console.log(letter);
    var keyIndex = keyArray.indexOf(letter);
    // console.log(keyIndex);
    for (j = 0; j < colLen; j++) {
      //   console.log(cipherArray[j][keyIndex]);
      ciphertext += cipherArray[j][keyIndex];
    }
  }

  //Console log to show the cipher being sent to server
  console.log("Cipher going to server: " + ciphertext);
  return ciphertext;
}

function decryptMsg(ciphertext, key) {
  //Initialize the basic variables
  var plaintext = "";
  var padChar = "X";
  var keyLen = key.length;

  //Calculate the length of the ciphertext
  var ciphertextLen = ciphertext.length;
  //   console.log("Ciphertext len: " + ciphertextLen);
  //   console.log("Key Len: " + keyLen);

  //Calculate the lengths of the rows and column for the matrix
  var colLen = Math.floor(ciphertextLen / keyLen);
  var rowLen = keyLen;
  //   console.log("Col Len " + colLen);
  //   console.log("Ro Len " + rowLen);

  //Creating the 2D Array b/c Javascript does not have that as a basic structure
  var plainArray = new Array(rowLen);
  for (i = 0; i < colLen; i++) {
    plainArray[i] = [];
  }

  //Splitting the key into an array to use as reference
  var keyArrayUnfiltered = key.split("");

  //Filtering the key so there are no repeating chars
  var keyArray = [...new Set(keyArrayUnfiltered)];

  //Created the sorted key array to use as map
  var sortedKeyArray = Array.from(keyArray);
  sortedKeyArray.sort();
  //  console.log(keyArray);
  //  console.log(sortedKeyArray);

  //Iterate through the array and deconstruct the ciphertext
  //using the sortedKey and keyArrays as a map.
  var iterator = 0;
  for (i = 0; i < sortedKeyArray.length; i++) {
    var letter = sortedKeyArray[i];
    // console.log("Cur Key Letter: " + letter);
    var keyIndex = keyArray.indexOf(letter);
    // console.log("Curr Key Index: " + keyIndex);
    for (j = 0; j < colLen; j++) {
      //console.log(cipherArray[j][keyIndex]);
      plainArray[j][keyIndex] = ciphertext.charAt(iterator++);
    }
  }

  //Construct the plaintext string by iterating through the
  //matrix reading from top left to bottom right
  for (i = 0; i < colLen; i++) {
    for (j = 0; j < rowLen; j++) {
      plaintext += plainArray[i][j];
    }
  }
  // console.log("(plain): " + plaintext);

  //Finally, strip the appended pad characters so the message
  //shows up correctly to the user in the chat app
  for (n = plaintext.length - 1; n > 0; n--) {
    if (plaintext.charAt(n) == padChar) {
      plaintext = plaintext.substr(0, n);
    }
  }
  // console.log(plainArray);

  // console.log(plaintext);
  return plaintext;
}
