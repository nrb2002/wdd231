//Declare a variable to be assigned the modal dialog element
const courseDetails = document.getElementById('course-details'); 

//Course container
const courseDiv = document.querySelector('.course');

/**
 * Write a function to display the modal.
 * Add the following content to the modal display:
 * button that will close the modal.
 * event listener to close the modal when the user clicks outside of the 
 * modal.
 * subject and number
 * title
 * credits
 * description
 * certificate
 * technology stack
 *  */ 
function displayCourseDetails(course){
  courseDetails.innerHTML =''; //Initialize the modal dialog

  const button = document.createElement('button');
  button.id = 'closeModal';


  //Pull the individual course info from the courses render function. 
  //Place the course.js file before the modal.js in the index file. 
  courseDetails.innerHTML = `    
    <button id="closeModal">❌</button>
    courseDetails.appendChild(button);
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

/** 
 * Add a 'click' event listener to the course container build (inside the loop building each course container). This trigger will call the new display function, passing the current course's information.
 * */ 
courseDiv.addEventListener('click', () => {
  displayCourseDetails(course);
});