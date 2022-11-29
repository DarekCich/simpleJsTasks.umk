function isOdd(x){
    console.log(typeof x)
    if(typeof x ==="number" )
        return x%2===1;
}
const isEven = x => x%2===0;

console.log(isOdd(null));
console.log(isEven(2));