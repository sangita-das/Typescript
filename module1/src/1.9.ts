{
    // Type Alias


    type Student = {
          name: string;
        age: number;
        contactNo? : string;
        gender:string;
        address: string;
    }
    const student1: Student = {
        name: 'Sangita',
        age: 50,
        gender: 'female',
        contactNo: '012345678',
        address: 'ctg',
    };


    const student2: Student = 
    /* 
    {
        name: string;
        age: number;
        gender:string;
        address: string;
    } = */
    {
        name: 'Mir',
        age: 40,
        gender: 'male',
        address: 'dhk',
    };


    type UserName = string
    type IsAdmin = boolean
    const userName : UserName = 'Persian'
    const isAdmin : IsAdmin = true;


    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2;



    // 
}