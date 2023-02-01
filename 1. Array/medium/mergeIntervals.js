var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])

    let result = []

    for(let i=0; i<intervals.length-1;){
      current = intervals[i];
      next = intervals[i+1]
      if(current[1]>= next[0]){
        current[1] = Math.max(current[1], next[1])
        intervals.splice(i+1,1)
        continue
      }
      i++;
      
    }

       return intervals;

    
};