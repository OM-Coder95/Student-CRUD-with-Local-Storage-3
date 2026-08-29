const cl = console.log;

// Database

let enrollmentArr = [
  {
    id: "EN101",
    course: "Angular",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    joiningDate: "2026-08-10",
    feeStatus: "Paid",
  },

  {
    id: "EN102",
    course: "React",
    skills: ["HTML", "CSS", "JavaScript"],
    joiningDate: "2026-08-12",
    feeStatus: "Pending",
  },

  {
    id: "EN103",
    course: "Java",
    skills: ["JavaScript", "Bootstrap"],
    joiningDate: "2026-08-15",
    feeStatus: "Paid",
  },
];

localStorage.setItem("enrollmentArr", JSON.stringify(enrollmentArr))


