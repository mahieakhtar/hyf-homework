const class07Students = [];

function addStudentToClass(studentName) {
    //No of student in class should be 6
    if (getNumberOfStudents() < 6) {
        if(class07Students.includes(studentName)) {
            console.log(`Student ${studentName} is already in the class`);
        } else {
            class07Students.push(studentName);
            console.log("Student Name : " +class07Students);
        }
    } else if(studentName === "queen")  {
        class07Students.push(studentName);
        console.log("Student Name : " +class07Students);
    } else {
        console.log("Cannot add more students to class 07");
    }
}

function getNumberOfStudents() {
    console.log("Number of Students : " + (class07Students.length+1));
    return class07Students.length;
}

addStudentToClass("student1");
addStudentToClass("student2");
addStudentToClass("student3");
addStudentToClass("student4");
addStudentToClass("student5");
addStudentToClass("student3");
//addStudentToClass("queen");
//addStudentToClass("student3");

