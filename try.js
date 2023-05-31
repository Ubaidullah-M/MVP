let myArray = [1, 2, 4, 10, "A", 3, "D", 2, 22, 12, "E"];
console.log(myArray)
//
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray.reverse().join(""))
}
let people = [
    {firstName: "Ubaid", lastName: "Muhd", phone: 0802234},
    {firstName: "Idris", lastName: "Musa", phone: 0802455},
    {firstName: "Rabilu", lastName: "Haruna", phone: 0803400}
]
console.log(people.map(function(x){
    return x.firstName + " has a phone number, which is " + x.phone
}).sort().join("\n"))

