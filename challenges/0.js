function check(a, b){
    if (a === b){
        return true;
    }
    else {return false}
}
// test cases
console.log("check(3, 5):", check(3, 5), "should be false");
console.log("check(5, 5):", check(5, 5), "should be true")
console.log("check(-3, -3):", check(-3, -3), "should be true")