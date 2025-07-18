document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.getElementById("courseList");
    const totalCredits = document.getElementById("totalCredits");
    // Get buttons
    const buttons = document.querySelectorAll(".filter-buttons button");
    const allBtn = document.getElementById("allBtn");

    // Set default current class to allBtn
    allBtn.classList.add("current");

    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    ]

    const renderCourses = (filterFn) => {
        courseList.innerHTML = "";
        const filtered = courses.filter(filterFn);
        let total = 0;

        filtered.forEach(course => {
        const div = document.createElement("div");
        div.className = `course ${course.completed ? "completed":""}`;
        div.innerHTML = `<strong>${course.title}</strong><br>${course.subject} - ${course.number}<br><em>${course.credits} credit(s)</em><br>Completed: ${course.completed}`;
        courseList.appendChild(div);
        total += course.credits;

        
        });

        totalCredits.textContent = total;

        //Assign current class dynamically
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(btn => btn.classList.remove("current")); // Remove from all
                button.classList.add("current"); // Add to clicked one
            });
        });
    };

  // Initial render
  renderCourses(() => true);

  // Button listeners
  document.getElementById("allBtn").addEventListener("click", () => renderCourses(() => true));
  document.getElementById("wddBtn").addEventListener("click", () => renderCourses(c => c.subject === "WDD"));
  document.getElementById("cseBtn").addEventListener("click", () => renderCourses(c => c.subject === "CSE"));
});

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // request
  const data = await response.json(); // parse the JSON data
  console.log(data); // temp output test of data response 
}

getData();