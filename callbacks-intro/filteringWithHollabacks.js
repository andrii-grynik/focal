const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35]
const passingGrades = grades.filter((grade) => {
  return (grade >= 70)
})
console.log('Passing Grades List:', passingGrades)

// list of all grades will need to be trimmed to passing grade only for 70 and above
// filter function for 70 and up, and called it.