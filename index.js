function isPalindrome(word) {
  // Write your algorithm here
  //iterate over the word from start to middle
  for (let i=0; i<word.length/2; i++){
     //check each letter to the corresponding letter from the end
    const j = word.length -1 - i
    let firstLett = word[i]
    let lastLett = word[j]
    //if any of the characters don't match, return false
    if (firstLett !== lastLett){
      return false
    }
    return true
  }
}

/* 
  Add your pseudocode here
  iterate over the word from start to middle
   check each letter to the correspondig letter to the end
    if any lettr doesn't match
     return false
      else
       return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
