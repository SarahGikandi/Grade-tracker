const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

let students = [];

students = JSON.parse(localStorage.getItem('students')) || [];
displayStudents();

form.addEventListener("submit", function( e) {
    e.preventDefault(); // Prevent default form submission behavior

    //get values from the input fields

    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;

    // check for duplicate regno
    const exists = students.some(student => student.regno === regno);

    if (exists) {
        alert("Registration number already exists!");
        return; // stop execution
    }

    const cat1 = parseFloat(document.getElementById("cat1").value);
    const cat2 = parseFloat(document.getElementById("cat2").value);
    const exam = parseFloat(document.getElementById("exam").value);

    if(cat1 <0 || cat1> 30  || cat2 <0 || cat2> 30 || exam > 70) 
        return alert("Invalid input values..");
        
    const averageCat = (cat1 + cat2) /2;
    const finalmark = averageCat + exam;


    // grade logic
    let grade = '';
    if(finalmark >= 70) grade = 'A';
    else if(finalmark >= 60) grade = 'B';
    else if(finalmark >= 50) grade = 'C';
    else if(finalmark >= 40) grade = 'D';
    else grade = 'Fail';

    // create student object
    const student = {
        name,
        regno,
        cat1,
        cat2,
        exam,
        averageCat,
        finalmark,
        grade,
    }

    // push the student to the array
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    displayStudents();
    form.reset();

});

// function to display students in the table
// function displayStudents() {
// tableBody.innerHTML = ''; // initially the tbody is empty
// // loop through students array
// students.forEach((student) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${student.name}</td>
//         <td>${student.regno}</td>
//         <td>${student.cat1}</td>
//         <td>${student.cat2}</td>
//         <td>${student.exam}</td>
//         <td>${student.averageCat.toFixed(2)}</td>
//         <td>${student.finalmark.toFixed(2)}</td>
//         <td>${student.grade}</td>

//     `;
//     tableBody.appendChild(row);
// });

// }

function displayStudents() {
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.regno}</td>
        <td>${student.cat1}</td>
        <td>${student.cat2}</td>
        <td>${student.exam}</td>
        <td>${student.averageCat.toFixed(2)}</td>
        <td>${student.finalmark.toFixed(2)}</td>
        <td>${student.grade}</td>
        <td>
        <button class = "edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class = "delete-btn" onclick="deleteStudent(${index})">Delete</button>
        </td>
        `;

        

        if (student.grade === "Fail") {
            row.style.backgroundColor = "#ffe0e0";
            row.style.color = "red";
            row.style.fontWeight = "bold";
        }

        tableBody.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1); // remove 1 item at position index

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents(); // refresh table
}
function editStudent(index) {
    let student = students[index];

    document.querySelector("#name").value = student.name;
    document.querySelector("#regno").value = student.regno;
    document.querySelector("#cat1").value = student.cat1;
    document.querySelector("#cat2").value = student.cat2;
    document.querySelector("#exam").value = student.exam;

    students.splice(index, 1); // remove old version
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

const analyse = () => {
    
}