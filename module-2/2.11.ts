{
    // utility types
    // pick
    type Person = {
        name: string
        age: number
        email?: string
        contactNo: string
    }

    type NameAge = Pick<Person, "name" | "age">

    // omit
    type ContactInfo = Omit<Person, "name"|"age">
    // Required
    type PersonRequired = Required<Person>
    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const Person1 : PersonReadonly = {
        name: "John",
        age: 12,
        contactNo: "2345"
    }

    // as it is readonly property we cannot change so the below line showing error
    Person1.name = "Mr. YZ"

    // Record
    /* type MyObj = {
        a: string,
        b: string
    }
 */

    type MyObj = Record<string, string>
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
    }

    const EmptyObj : Record<string, unknown> = {}
    // 
}