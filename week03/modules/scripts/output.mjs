/**
 * This file will contain the functions that are used to render the course title and sections to the page.
 */
//Move the setTitle and renderSections functions into the output file.
function setTitle(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

//export the setTitle and renderSections functions as named exports.
export function setTitle;
export function renderSections;