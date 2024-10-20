function letterCombinations(digits) {
    if (!digits) {
        return [];
    }
    
    // Mapping of digits to letters
    const phone = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result = [];
    
    function backtrack(index, path) {
        // If the current combination is complete
        if (index === digits.length) {
            result.push(path.join(''));
            return;
        }
        // Get the letters that the current digit can represent
        const possibleLetters = phone[digits[index]];
        for (let letter of possibleLetters) {
            // Add the letter to the current path
            path.push(letter);
            // Move on to the next digit
            backtrack(index + 1, path);
            // Backtrack by removing the letter before moving to the next
            path.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

// Example Usage:

// Example 1:
console.log(letterCombinations("235"));
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
console.log(letterCombinations(""));
// Output: []

// Example 3:
console.log(letterCombinations("2"));
// Output: ["a","b","c"]
