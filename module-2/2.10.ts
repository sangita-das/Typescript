{
    // mapped types

    const arrOfNumber : number[] = [1, 2, 3, 4, 5]

    // const arrOfString : string[] = ['1', "2", "3", "4"]
    // or
    const arrOfString : string[] = arrOfNumber.map(number => number.toString());

    console.log(arrOfNumber)


    type AreaNumber = {
        height: string
        width: string
    }


    type Height = AreaNumber ["height"]  //look up type
    // type AreaString = {
    //     height: string
    //     width: string
    // }

// keyof AreaNumber => "height" | "width"
    type AreaString ={
        // [key in "height" | "width"] : string
        // the previous line and below line are same
        [key in keyof AreaNumber]: string
    }

    // new example

    // T => {height: string; width: number}
    // key => T["width"]    ...it's working like look up
    type ResultString<T> = {
        [key in keyof T] : T[key];
    };

    const result1: ResultString <{height: string; width: number}> = {
        height: "100",
        width: 50,
    }






    // 
}