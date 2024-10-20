
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

var isPalindrome = function(s) {
    const filtered = s.split("").filter((char) => isCharacterALetter(char)).map(char => char.toLowerCase())
    const original = filtered.join("")
    return original === filtered.reverse().join("")
};

isPalindrome("A man, a plan, a canal: Panama")