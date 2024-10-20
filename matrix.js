var setZeroes = function(matrix) {
    const rowIndexes = new Set()
    const columnIndexes = new Set()
    
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i].includes(0)){
            for(let j = 0; j < matrix[i].length; j ++){
                if(matrix[i][j] === 0){
                    columnIndexes.add(j)
                }
            }
            matrix[i].fill(0, 0, matrix[i].length)
            rowIndexes.add(i)
        }
    }
    
    for(i = 0; i < matrix.length; i++ ){
        if(rowIndexes.has(i)){
            continue
        }
      
        for(const index of columnIndexes){
            matrix[i][index] = 0
        }
    }

};

const matrix = [[1,1,1],[1,0,1],[1,1,1]]

setZeroes(matrix)
console.log(matrix)