let fibonnaci = (x)=>{
    if(x==1)
        return [0];
    if(x>=2){
        let array = [0,1];
        for(let i = 0;i<x-2;i++ )
        {
            array.push(array.at(-1)+array.at(-2));
        }
        return array;
    }
}
let fibonnaciRek= (x)=>{
    if(x ==1)
        return 1;
    if (x==2 )
        return 1;
    return fibonnaciRek(x-1)+fibonnaciRek(x-2);

}
console.log(fibonnaciRek(50));
