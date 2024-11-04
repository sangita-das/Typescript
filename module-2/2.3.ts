{
    // 

    // type genericArray = Array<boolean>;
    type genericArray<T> = Array<T>;

    // const rollNumbers : number[] =[3, 6, 8]   //this line & below line are same
    // const rollNumbers : Array<number> =[3, 6, 8]
    const rollNumbers : genericArray<number> =[3, 6, 8]

    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z", "Mr. p"]
    const mentors: genericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z", "Mr. p"]
    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: genericArray = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: genericArray<boolean> = [true, false, true]
    


    const add = (x: number, y : number) => x + y

    add(30, 20)

    const user : genericArray<{name : string, age: number}> = [
        { 
            name: 'Sangita',
            age: 100
        },
        { 
            name: "Eshita",
            age: 50
        },
       
    ]

    //  generic tuple

    type GenericTuple<X, Y> = [X, Y]
    const manush : GenericTuple<string , string> = ["Mr.X", "Mr. Y"]

    const UserWithId : GenericTuple<number, {name: string, email: string}> = [1234, {name: 'Sangita', email: 'sangita@gmail.com'}]
}