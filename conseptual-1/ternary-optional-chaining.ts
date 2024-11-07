{
    // ternary operator
const isAdmin = true;
const message : string | number = isAdmin ?  "welcome Admin" : 12345;
console.log(message);


//  optional chaining
    const data = {
        name: "Hasib",
        address: "Dhaka, Bangladesh"
    }
    console.log(data?.name?.toUpperCase())

    // 
}