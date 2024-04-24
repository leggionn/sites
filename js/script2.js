/*const age = 18;
if (age > 18) {
    console.log("major")
}
else if (age === 18) {
    console.log("egal cu 18")
}
else {
    console.log("minor")
}
*/
/*const name = "Artiom"
switch (name) {
    case "Ana": console.log("Nume - Ana")
        break
    case "Mihai": console.log("Nume - Mihai")
        break
    case "Artiom": console.log("Nume - Artiom")
        break
    default:
        console.log("Nume neconuscut")
}*/
/*let number = 1;
while (number <= 10) {
    console.log(number)
    number++
}*/
/*let number = 20;
do {
    console.log(numer)
    number++
}while(number <= 10)*/
/*for (let i = 1; i <= 10; i++) {
    console.log(i)
}*/
/*let arr = ["ana", "mihai", "alex"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
for (let i = arr.length; i > 0; i--) {
    console.log(arr[i])
    if (arr[i] === 'mihai') {
        break
    }
}*/
/*function add(a, b) {
    return a + b
}
let fn = 4;
let sn = 8;
let res = add(fn, sn)
console.log(res)*/
/*let sum = function (a, b) {
    return a+b
}
console.log(sum(4, 10))
sum = function (a, b) {
    return a*b
}
console.log(sum(4, 10))
sum = (a, b) => a + b
console.log(sum(4,10))*/
/*function func() {
    console.log("start")
    try {
        console.log(value)
    } catch (error) {
        console.error("error: " + error.message)
    }
    finally {
        console.log("always")
    }
    console.log("final")
}
funct()
*/
/*let person1 = {
    fn: "Artiom"
    sn: "Stancenco"
    age: 18
    sayhello: function () {
        console.log("Nm: " + this.fn + " pr: " + this.sn + " age: " + this.age)
    }
}
let person2 = {
    fn: "Mihai"
    sn: "Ionescu"
    age: 50
    sayhello: function () {
        console.log("Nm: " + this.fn + " pr: " + this.sn + " age: " + this.age)
    }
}*/
class Person {
    fn
    sn
    age
    constructor(fn, sn, age) {
        this.fn = fn;
        this.sn = sn;
        this.age = age
    }
    sayhello () {
    console.log("Nm: " + this.fn + " pr: " + this.sn + " age: " + this.age)
}
}