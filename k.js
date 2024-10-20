var topKFrequent = function(nums, k) {
    const map = new Map()
    
    for(const num of nums){
        let mapValue = map.get(num)
        if(mapValue){
            map.set(num,  mapValue + 1)
            continue
        }
        
        map.set(num, 1)
    }
    
    return Array.from(map).sort((a, b) => b[1] - a[1]  ).slice(0, k).map((ar) => ar[0])
};


topKFrequent([1,1,1,2,2,3], 2)