const sumFunction = async (a, b) => a + b;
let sum = (array)=>{
    let suma=0;
    for(let i=0;i<array.length;i++)
        suma+=array[i];
    return suma
}
console.log(sum([2,3,5]))