const range=(a ,b )=>{
    let tab= [];
    while (a<=b){
        tab.push(a)
        a++;
    }
    return tab;
}
console.log(range(1,5));