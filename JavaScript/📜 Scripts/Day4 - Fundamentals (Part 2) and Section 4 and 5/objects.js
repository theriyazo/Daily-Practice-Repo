

const riyaz = {
    firstname: 'Riyaz',
    lastname: 'Hosalli',
    birthYear: 1998,
    usn: '3PG17CS027',
    branch: 'Computer Science',
    college: 'PDIT',
    friends: ['Saif', 'Faraz', 'Furkaan'],

//  Function Expression with parameter
    calcAge1: function (birthYear){
        return 2021 - birthYear;
    },

//  Using This keyword
    calcAge2: function (){
        return 2021 - this.birthYear;
    },

//  Using This keyword to create another property in the object
    calcAge3: function (){
        this.age = 2021 - this.birthYear;
        return this.age;
    }
};

console.log(riyaz.calcAge3());
console.log(riyaz);

console.log(riyaz.calcAge2()); // since we're using this keyword we dont have to pass any birthyear
console.log(riyaz['calcAge2']());

console.log(riyaz.calcAge1(1998));
console.log(riyaz['calcAge1'](1998));

console.log(`${riyaz.firstname} has ${riyaz.friends.length} friends, and his best friend is called ${riyaz.friends[0]}`)

// const choice = prompt("What do you want to know about Riyaz? Choose firstname, lastname, usn, branch, college, friends");


// if (riyaz[choice]){
//     prompt(riyaz[choice]);
// }
// else{
//     prompt(`That data does not exists`);
// }

// ternery operator
console.log(`${false ? "Yes" : "No"}`);