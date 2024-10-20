var longestCommonPrefix = function(strs) {
    let result = ""
    if(strs.length === 0){
        return result
    }

    if(strs.length === 1){
        return strs[0]
    }

    strs.sort((a, b) => a.length - b.length)  

    const firstString = strs.shift()
    for(let i = 0; i < firstString.length; i++){
        for(let j = 0; j < strs.length; j++){
            if(!strs[j][i] || strs[j][i] !== firstString[i]){
                return result
            }
        }
        result = result + firstString[i]
    }  
    return result
  };

  console.log(longestCommonPrefix(["flower","flow","flight"]))
  console.log(longestCommonPrefix(["a"]))