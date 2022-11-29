let palindrom = (word) =>{
    for (let i =0; i< word.length/2; i++) {
        if (word.at(i) !== word.at(-1 - i))
            return false;
    }
    return true;
}
console.log(palindrom("kajak"))