function multiply(num1 : number, num2 : number) : number {
    const result : number = num1 * num2;
    return result;
}

const multiplyResult = multiply(3,4)
console.log(multiplyResult)

const numOfTwo = (a:number, b:number) : number => {
    return a + b;
}

const add = numOfTwo(2,4)
console.log(add)