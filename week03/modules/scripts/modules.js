//import the byuiCourse object from the course module.
import byuiCourse from 'course.mjs';

//import the setSectionSelection function from the sections module
import {setSectionSelection} from '//sections.mjs';

//import the named function exports from the output file
import { setTitle, renderSections } from './output.mjs';


//Move the byuiCourse object in the course.mjs file
// const byuiCourse = {
//   code: "WDD231",
//   name: "Web Frontend Development I",
//   sections: [
//     {
//       sectionNumber: 1,
//       enrolled: 88,
//       instructor: "Brother Bingham",
//     },
//     {
//       sectionNumber: 2,
//       enrolled: 81,
//       instructor: "Sister Shultz",
//     },
//     {
//       sectionNumber: 3,
//       enrolled: 95,
//       instructor: "Sister Smith",
//     },
//   ],
//   changeEnrollment: function (sectionNumber, add = true) {
//     // Find the section with the given section number
//     const sectionIndex = this.sections.findIndex(
//       (section) => section.sectionNumber == sectionNumber
//     );
//     if (sectionIndex >= 0) {
//       if (add) {
//         this.sections[sectionIndex].enrolled++;
//       } else {
//         this.sections[sectionIndex].enrolled--;
//       }
//       /**
//        * remove the renderSections(this.sections); line of code in the changeEnrollment method of the byuiCourse object. An run-time error will occur when an update is attempted given this function is no longer available to call within this new module file.
//        */
//     //   renderSections(this.sections);
//     }
//   },
// };

//Move the setSectionSelection function from the modules file into the section.mjs file.
// function setSectionSelection() {
//   const sectionSelect = document.querySelector("#sectionNumber");
//   byuiCourse.sections.forEach((section) => {
//     const option = document.createElement("option");
//     option.value = section.sectionNumber;
//     option.textContent = `${section.sectionNumber}`;
//     sectionSelect.appendChild(option);
//   });
// }

//Move the setTitle and renderSections functions into the output file.
// function setTitle(course) {
//   document.querySelector("#courseName").textContent = course.name;
//   document.querySelector("#courseCode").textContent = course.code;
// }

// function renderSections(sections) {
//   const html = sections.map(
//     (section) => `<tr>
//     <td>${section.sectionNumber}</td>
//     <td>${section.enrolled}</td>
//     <td>${section.instructor}</td></tr>`
//   );
//   document.querySelector("#sections").innerHTML = html.join("");
// }

//Add renderSections(this.sections); to both event listeners in order to update the output after the enroll or drop button is clicked.

//Populate the sections select element
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(this.sections);

});

//Populate the sections select element's values
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(this.sections);
});


setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);