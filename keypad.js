/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length){
        return []
    }

    const keypad = {
        "0": "",
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    const letterGroups = []
  
    for(let i = 0; i < digits.length; i++){
       letterGroups.push(keypad[digits[i]])    
    }

    if(letterGroups.length === 0){
        return letterGroups.split("")
    }

    const firstGroup = letterGroups.shift()
  const uniqueChars = []

  
  for(const group of letterGroups){
    
    for(let i = 0; i < firstGroup.length ; i++){
        let char = firstGroup[i]


            
            for(let j = 0; j < group.length; j ++){
                

                uniqueChars.push(char + group[j])

            }


        }
    }
    
    return uniqueChars
};

console.log(letterCombinations("234"))