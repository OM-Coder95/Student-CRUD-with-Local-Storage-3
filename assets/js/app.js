const cl = console.log;

const studentContainer = document.getElementById("studentContainer");
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
