const cl = console.log;

const studentContainer = document.getElementById("studentContainer");
const form = document.getElementById("form");
const course = document.getElementById("course");
const joiningDate = document.getElementById("joiningDate");

// Database

let jsonArr = localStorage.getItem("enrollmentArr");

let enrollmentArr = jsonArr ? JSON.parse(jsonArr) : [];

// Functions

// read

function showOnUI(arr) {
  let result = "";

  arr.forEach((ele, i) => {
    result += `
                                <tr id="${ele.id}">
                                    <td>${i + 1}</td>
                                    <td>${ele.course}</td>
                                    <td>${ele.skills}</td>
                                    <td>${ele.joiningDate}</td>
                                    <td>${ele.feeStatus}</td>
                                    <td class="d-flex justify-content-between">
                                        <button class="btn btn-sm btn-primary mr-2">Edit</button>
                                        <button class="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
    `;
  });
  studentContainer.innerHTML = result;
}

showOnUI(enrollmentArr);

// Create

function onStudentAdd(event) {
  event.preventDefault();

  let newStudent = {
    id: crypto.randomUUID(),
    course: course.value,
    skills: [...document.querySelectorAll(`input[name="skills"]:checked`)].map(
      (ele) => ele.value,
    ),
    joiningDate: joiningDate.value,
    feeStatus: document.querySelector(`input[name="feeStatus"]:checked`).value,
  };

  enrollmentArr.push(newStudent);
  localStorage.setItem("enrollmentArr", JSON.stringify(enrollmentArr));

  // UI

  let tr = document.createElement("tr");

  tr.id = newStudent.id;

  tr.innerHTML = `
                                  <td>${enrollmentArr.length}</td>
                                    <td>${newStudent.course}</td>
                                    <td>${newStudent.skills}</td>
                                    <td>${newStudent.joiningDate}</td>
                                    <td>${newStudent.feeStatus}</td>
                                    <td class="d-flex justify-content-between">
                                        <button class="btn btn-sm btn-primary mr-2">Edit</button>
                                        <button class="btn btn-sm btn-danger">Delete</button>
                                    </td>
  `;

  studentContainer.append(tr);
}

form.addEventListener("submit", onStudentAdd);
