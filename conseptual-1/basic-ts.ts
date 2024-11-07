// basic data types

const age:number = 25;
const yourName: string = 'sangita'
const isActive: boolean = true;

// array
const number : number [] = [1, 2, 3, 4, 5]  //array
const info: [string, number, number, null] = ["rahim", 24, 67, null]  //tuple

// object
 type PersonType =  {
    name: string,
    age: number | string,
    isActive: boolean,
    designation: string,
    company: string
}
const person : PersonType = {
    name: "Halima Begum",
    age: 25,
    isActive: true,
    designation: "Next Level Web Developer",
    company: "Programming Hero"
}
