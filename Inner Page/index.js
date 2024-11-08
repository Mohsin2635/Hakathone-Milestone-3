"use strict";
addEventListener("load", () => {
    let Name = localStorage.getItem("fullName");
    let number1 = localStorage.getItem("number");
    let Email = localStorage.getItem("email");
    let Address = localStorage.getItem("address");
    let Interest = localStorage.getItem("interest");
    let TextImage = localStorage.getItem("TextImage");
    let Name1 = document.getElementById("Name");
    Name1.innerHTML = Name;
    let phone = document.getElementById("phone");
    phone.innerHTML = number1;
    let gmail = document.getElementById("gmail");
    gmail.innerHTML = Email;
    let house = document.getElementById("house");
    house.innerHTML = Address;
    let interest1 = document.getElementById("interest1");
    interest1.innerHTML = Interest;
    let Image1 = document.getElementById("Image1");
    Image1.src = TextImage;
});
// skills
const skillOutput = document.getElementById("skillOutput");
let skilloutputHtml = `<button>SKills</button>`;
let storedskillNumber = localStorage.getItem("skillNumber");
if (storedskillNumber) {
    storedskillNumber = JSON.parse(storedskillNumber);
    storedskillNumber.forEach((skill) => {
        skilloutputHtml += `<ul><li>${skill}</li></ul>`;
    });
    skillOutput.innerHTML = skilloutputHtml;
}
// projects
const projectOutput = document.getElementById("projectOutput");
let projectoutputHtml = `<button>Projects</button>`;
let storedprojectNumber = localStorage.getItem("projectNumber");
if (storedprojectNumber) {
    storedprojectNumber = JSON.parse(storedprojectNumber);
    storedprojectNumber.forEach((project) => {
        projectoutputHtml += `<ul><li>${project}</li></ul>`;
    });
    projectOutput.innerHTML = projectoutputHtml;
}
//Education
const educationOutput = document.getElementById("educationOutput");
const storededucationData = {
    degree: localStorage.getItem("degreeNumber"),
    institute: localStorage.getItem("InstituteNumber"),
    passedYear: localStorage.getItem("passedYearNumber"),
};
const storedDegree = storededucationData.degree && JSON.parse(storededucationData.degree);
const storedInstitute = storededucationData.institute && JSON.parse(storededucationData.institute);
const storedPassedYear = storededucationData.passedYear && JSON.parse(storededucationData.passedYear);
storedDegree === null || storedDegree === void 0 ? void 0 : storedDegree.forEach((education, index) => {
    const educationDiv = document.createElement("div");
    educationDiv.innerHTML += `
    <h2><u>DEGREE:</u> ${education}</h2>
    <p><strong>INSTITUTE:</strong> ${storedInstitute[index]}</p>
    <p><strong>YEAR:</strong> ${storedPassedYear[index]}</p>
  `;
    educationOutput.appendChild(educationDiv);
});
//Experience
const experienceOutput = document.getElementById("experienceOutput");
const storedexperienceData = {
    company: localStorage.getItem("companyNumber"),
    field: localStorage.getItem("fieldNumber"),
    workYear: localStorage.getItem("workYearNumber"),
};
const storedcompany = storedexperienceData.company && JSON.parse(storedexperienceData.company);
const storedfield = storedexperienceData.field && JSON.parse(storedexperienceData.field);
const storedworkYear = storedexperienceData.workYear && JSON.parse(storedexperienceData.workYear);
storedcompany === null || storedcompany === void 0 ? void 0 : storedcompany.forEach((experience, index) => {
    const experienceDiv = document.createElement("div");
    experienceDiv.innerHTML += `
    <h2><u>COMPANY:</u> ${experience}</h2>
    <p><strong>Field:</strong> ${storedfield[index]}</p>
    <p><strong>YEAR:</strong> ${storedworkYear[index]}</p>
  `;
    experienceOutput.appendChild(experienceDiv);
});
let Print = document.getElementById("print");
Print.addEventListener("click", () => {
    window.print();
});
