{
    // type
 type PersonType =  {
    name: string,
    age: number | string,
    isActive: boolean,
    designation: string,
    company: string,
    salary? : number,
}

// interface

 interface IPersonType  {
    name: string,
    age: number | string,
    isActive: boolean,
    designation: string,
    company: string,
    salary? : number,
}

const person : IPersonType = {
    name: "Halima Begum",
    age: 25,
    isActive: true,
    designation: "Next Level Web Developer",
    company: "Programming Hero"
}

console.log(person)
    // 
}