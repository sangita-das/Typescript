{
    // conditional type

    // type a1 = null;
    type a1 = number
    type b1 = undefined;

    type x = a1 extends null ? true : false   // conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any 


    type Sheikh = {
        bike : string;
        car: string;
        ship: string;
    }

    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    type HasBike = CheckVehicle <"bike">

    // 
}