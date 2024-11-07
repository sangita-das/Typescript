{
    // spread operator

    const rolls :number[] = [1,2,3,4,5,6,7,8,9,10]

const newRolls: number[] = [...rolls, 11,12,13,14]
console.log(newRolls)


// object adding using spread operator
 type PersonType =  {
    name: string,
    age: number | string,
    isActive: boolean,
    designation: string,
    company: string,
    salary? : number,
}
const person : PersonType = {
    name: "Halima Begum",
    age: 25,
    isActive: true,
    designation: "Next Level Web Developer",
    company: "Programming Hero"
}

const newPerson: PersonType = {
    ...person,
    salary: 10000
}

// rest operator
const [first, ...restElement] = [1, 2, 3, 4, 5, 6, 7]
console.log("first", first)
console.log("rest", restElement)


    // 
}