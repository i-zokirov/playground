/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const dictionary = [
        {
            symbol: "M",
            value: 1000
        },
         {
            symbol: "D",
            value: 500
        },
        
        {
            symbol: "CD",
            value: 400
        },
        {
            symbol: "C",
            value: 100
        },
        {
            symbol: "XC",
            value: 90
        },

        {
            symbol: "L",
            value: 50
        },
        {
            symbol: "XL",
            value: 40
        },
        {
            symbol: "X",
            value: 10
        },
        {
            symbol: "IX",
            value: 9
        },
        {
            symbol: "V",
            value: 5
        },
        {
            symbol:"IV",
            value: 4
        },
        {
            symbol: "I",
            value: 1
        },
    ]

    let result = ""
    let remainder = num
    for(const group of dictionary) {
        while(group.value <= remainder ){
            result += group.symbol
            remainder = remainder - group.value
        }
    }

    return result
};


console.log(intToRoman(58))