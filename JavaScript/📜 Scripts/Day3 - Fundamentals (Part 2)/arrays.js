const riyaz = [23, "hosalli", 2021-1998, "UI developer"];

console.log(riyaz);



console.log("-------------------- Calculating Ag --------------------");


const calcAge = function(birthYear){
    return 2021 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

years.forEach(element => {
    console.log(`Age is ${calcAge(element)}`);
});

console.log("-------------------- Array Functions --------------------");

function println(element){
    console.log(element);
    console.log(" ");
}

function print(elem){
    console.log(elem);
}

const friends = ['Amo', 'Mosin', 'Sarfaraz', 'Tousif', 'Riyaz'];
println(friends);


print(`push(element) => Inserts element "Furkan" at last in the friends list`);
friends.push("Furkan");

println(friends);

print(`pop() => Deletes last element "Furkan" in friends list`);
friends.pop();

println(friends);

print(`unshift(element) => Adding Element "Furkan" at the beginning in friends list`);
friends.unshift("Furkan");

println(friends);

print(`shift() => Deletes Element "Furkan" at the beginning in friends list`);
friends.shift();

println(friends);

print(`indexOf(element) => Return the index value of the passed element "Riyaz" (counting from 0) from the friends list`);
println(friends.indexOf("Riyaz"));

print(`includes(element); => Return the true of false of the passed element "Riyaz" from the friends list`);
println(friends.includes("Riyaz"));

println("----------");

println(`includes(); => Checks strict equality, meaning it checks the data type also of the passed element`);
println(friends);

println(`if(friends.includes("Riyaz")){
    print("Riyaz is your friend!😉");
}
else print("Riyaz is Not your friend!😟");
`);

if(friends.includes("Riyaz")){
    print(`OutPut ➡️ Riyaz is your friend!😉`);
}
else print(`OutPut ➡️ Riyaz is Not your friend!😟`);
println("");

friends.push(88);
friends.push(74);
friends.push(36);
println(friends);

println("----------");

println(`if(friends.includes(Riyaz)){
    print("Riyaz is your friend!😉");
}
else print("Riyaz is Not your friend!😟");
`);

if(friends.includes(83)){
    print(`OutPut ➡️ Riyaz is your friend!😉`);
}
else print(`OutPut ➡️ Riyaz is Not your friend!😟`);




