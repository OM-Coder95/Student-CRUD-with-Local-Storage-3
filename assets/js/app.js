const cl = console.log;

const studentContainer = document.getElementById("studentContainer");
const form = document.getElementById("form");
const course = document.getElementById("course");
const joiningDate = document.getElementById("joiningDate");
const updateBtn = document.getElementById("updateBtn");
const submitBtn = document.getElementById("submitBtn");

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
                                        <button onclick="editStudent(this)" class="btn btn-sm btn-primary mr-2">Edit</button>
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
                                        <button onclick="editStudent(this)" class="btn btn-sm btn-primary mr-2">Edit</button>
                                        <button class="btn btn-sm btn-danger">Delete</button>
                                    </td>
  `;

  studentContainer.append(tr);

  form.reset();
}

// edit

function editStudent(ele) {
  let editId = ele.closest("tr").id;
  localStorage.setItem("editId", editId);

  let editObj = enrollmentArr.find((ele) => ele.id === editId);

  course.value = editObj.course;

  [...document.querySelectorAll(`input[name="skills"]`)].forEach(
    (skill) => (skill.checked = editObj.skills.includes(skill.value)),
  );

  joiningDate.value = editObj.joiningDate;

  document.querySelector(
    `input[name="feeStatus"][value="${editObj.feeStatus}"]`,
  ).checked = true;

  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}

form.addEventListener("submit", onStudentAdd);
