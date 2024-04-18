const sumAll = function(start,end) {
    let output = 0;
    if(start < 0 || end < 0 || !Number.isInteger(start)|| !Number.isInteger(end)){
        output = "ERROR";
    }else if(start > end){
        const temp = start;
        start = end;
        end = temp;
        outputSum();
    }else{
        outputSum();
    }
    function outputSum(){
        for (let i = start; i <= end; i++) {
            output += i;
        }
    }
        
    
    
    // sum
    return output;

};

// Do not edit below this line
module.exports = sumAll;
