{
    // interface

    type User1 ={
        name: string;
        age:number;
    }

    interface User2 {
        name: string;
        age:number;
    }

    type UserWithRole1 = User1 & {role: string};

    interface UserWithRole2 extends User2 {
        role: string;
    }

     const user1 : UserWithRole1 = {
        name: 'sangita',
        age: 24,
        role: "manager"
    }
  

    type rollNumber = number

    

    // js --> object, array-> object function -> object

    type Roll1 = number[];

    const rollNumber : Roll1 = [1, 2, 3]
   
    interface Roll2 {
        [index : number] : number
    }


    /*  */

    type Add1 = (num1 : number, num2 : number) => number
     
    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    const add: Add2 = (num1, num2) => num1 + num2 
    
    // 
}