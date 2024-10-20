var dictionaryObject = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };
var romanToInt = function(romanString) {
     let int = 0
    for(let i = 0; i < romanString.length; i++){
        switch(romanString[i]){
            case "C":
                if(romanString[i+1] === "M"){
                    int += dictionaryObject["CM"]
                    i++
                } else if(romanString[i+1] === "D"){
                    int += dictionaryObject["CD"]
                    i++
                } else {
                    int += dictionaryObject["C"]
                }
                continue
            case "X":
                if(romanString[i + 1 ] === "C"){
                    int += dictionaryObject["XC"]
                    i++
                } else if (romanString[i + 1] === "L"){
                    int += dictionaryObject["XL"]
                    i++
                } else {
                    int += dictionaryObject["X"]
                }
                continue
            case "I":
                if(romanString[i + 1] === "X"){
                    int += dictionaryObject["IX"]
                    i++
                } else if (romanString[i+1] === "V"){
                    int += dictionaryObject["IV"]
                    i++
                } else {
                    int += dictionaryObject["I"]
                }
                continue
            default:
                int += dictionaryObject[romanString[i]]
                continue
        }
    }

    return int
};

console.log(romanToInt("MCMXCIV"))