{
    // 
    type ArrayType <P> = Array<P>
    const numArray: ArrayType<number> = [1,2,3,4,5,6,7,8,9];
    const stringArray: ArrayType<string> = ["Apu", "Raji", "Sumi", "Jidan", "Taj"];
    const boolArray: ArrayType<boolean> = [true, false, false, true, true]

    // interface with generic
     interface IPersonType <T, B, U>  {  // T= string, B= boolean, U= string
    name: T,   //string
    age: number | string,
    isActive: B,   //boolean
    designation: string,
    company: string,
    salary? : number,
    id: U   //string
}

const person : IPersonType <string, boolean, string > = {
    name: "Halima Begum",
    age: 25,
    isActive: true,
    designation: "Next Level Web Developer",
    company: "Programming Hero",
    id: "abc123"
}



// function with generic
const showMessage = <msgType1, msgType2, T>
(message1 : msgType1,
     message2 : msgType2, 
     messageInfo : T) => {
    return {message1, message2, messageInfo};
}
console.log(showMessage <string, number, IPersonType <string, boolean, string >>("Hello ,Please read the message!",
     12345, 
    {
    name: "Halima Begum",
    age: 25,
    isActive: true,
    designation: "Next Level Web Developer",
    company: "Programming Hero",
    id: "abc123"
}
))


    // 
}