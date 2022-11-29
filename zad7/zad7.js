let isHappyNumber = (number)=>{
    let suma = number;
    for(let i =0;i<100;i++){
        number = suma.toString();
        suma = 0;
        for(let j =0; j<number.length;j++)
        {
            suma+= number.at(j)*number.at(j)
        }
        if(suma <10)
        {
            return suma===1
        }
    }
    return 0;



}
console.log(isHappyNumber(20));