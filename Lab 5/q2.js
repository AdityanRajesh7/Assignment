function fact(num){
    if (num<0) return "invalid input";
    let r =1;
    for(let i=2;i<=num;i++){
        r*=i;
    }
    return r;
}

let num = prompt('Enter a number for factorial: ');
let f = fact(parseInt(num));
console.log(`Factorial of ${num} is: ${f}`);
alert(`Factorial of ${num} is: ${f}`);