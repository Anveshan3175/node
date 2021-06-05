define(['calculator'], function(c) {

    console.log('in cube');   
    
    return function(a){
        var sq = c.multiply(a,a);
        return (c.multiply(a,sq));
    }    
});