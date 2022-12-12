const add = (num1, num2) => {
    const sum = num1 + num2
    return sum
}
const sub = (num1, num2) => {
    const difference = num1 - num2
    return difference
}
const multiply = (num1, num2) => {
    const product = num1 * num2
    return product
}
const devide = (num1, num2) => {
    const quotient = num1 / num2
    return quotient
}
const square = (num1) => {
    const sum = num1 * num1
    return sum
}

let result = add(5,5);
console.log(result);

let subtract = sub(5,5);
console.log(subtract);

let multiplication = multiply(5,5);
console.log(multiplication);

let divident = devide(5,5);
console.log(divident);

result = square(5);
console.log(result);