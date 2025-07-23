/**
 * This file will contain the course object section data and its methods that are used to enroll and drop students from the course.
 */
//Move the byuiCourse object in the course.mjs file
const byuiCourse = {
  code: "WDD231",
  name: "Web Frontend Development I",
  sections: [
    {
      sectionNumber: 1,
      enrolled: 88,
      instructor: "Brother Bingham",
    },
    {
      sectionNumber: 2,
      enrolled: 81,
      instructor: "Sister Shultz",
    },
    {
      sectionNumber: 3,
      enrolled: 95,
      instructor: "Sister Smith",
    },
  ],
  changeEnrollment: function (sectionNumber, add = true) {
    // Find the section with the given section number
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNumber == sectionNumber
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      /**
       * remove the renderSections(this.sections); line of code in the changeEnrollment method of the byuiCourse object. An run-time error will occur when an update is attempted given this function is no longer available to call within this new module file.
       */
    //   renderSections(this.sections);
    }
  },
};

//export the byuiCourse object
export default byuiCourse;