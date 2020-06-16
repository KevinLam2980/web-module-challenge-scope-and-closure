function createBase(base){
    return function(num){
        return base + num;
    }
}


var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


