// destructuring

const user = {
    id: 345,
    name: {
        firstName: 'Sangita',
        middleName: 'Das',
        lastName: 'Shormi'
    },
    contactNo: '01456789',
    address: "Uganda",
};

const { 
    contactNo : phoneNum, 
    name: {middleName : midName},
 } = user;



//  arrray destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe']
// const [a,b,c] = myFriends
// or the below line means 1st and 2nd value skipped
const [,, bestFriend , ...rest] = myFriends