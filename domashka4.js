let students = [
    { name: 'Aibek', grade: 92 },
    { name: 'Mirbek', grade: 76 },
    { name: 'Alif', grade: 85 },
    { name: 'Azamat', grade: 99 },
    { name: 'Bekzat', grade: 65 },
    { name: 'Nursultan', grade: 88 },
    { name: 'Adilet', grade: 73 },
    { name: 'Islam', grade: 55 },
    { name: 'Emir', grade: 81 },
    { name: 'Daniyar', grade: 60 }
]

for (let student of students) {
    if (student.grade >= 98) {
        student.grade = 'A'
    } else if (student.grade >= 80) {
        student.grade = 'B'
    } else if (student.grade >= 70) {
        student.grade = 'C'
    } else if (student.grade >= 60) {
        student.grade = 'D'
    } else {
        student.grade = 'F'
    }
}

console.log(students)