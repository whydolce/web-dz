
let students = [
    { name: "Ali", grade: 80 },
    { name: "Anna", grade: 90 },
    { name: "John", grade: 75 },
    { name: "David", grade: 85 }
];
let Students2 = students.map((element, index, array) => {
    return {
        name: element.name,
        grade: element.grade + 5
    };
});

console.log("starye:");
console.log(students);
console.log("novye:");
console.log(Students2);