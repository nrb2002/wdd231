/* ─────────────────────────────────────────────────────────
 *           services LIST
 * ───────────────────────────────────────────────────────── */
/** 
 * populate the Service Name options where the array's name field is used for the select option display and the array's id is used for the value field.
 * */ 
const services = [
  {
    name: "maintenance",
    desc: "Routine Maintenance"
  },
  {
    name: "diagnostics",
    desc: "Engine Diagnostics"
  },
  {
    name: "tuning",
    desc: "Performance Tuning"
  },
  {
    name: "brakes",
    desc: "Brake & Suspension"
  },
  {
    name: "other",
    desc: "Other"
  }
];

/* ─────────────────────────────────────────────────────────
 *           DYNAMIC SELECT  (Service Name)
 * ───────────────────────────────────────────────────────── */
const selectService = document.querySelector("#service");

services.forEach(service => {
  const option = document.createElement("option");
  option.value = service.name;          // value should be ID
  option.textContent = service.desc;  // visible text is name
  selectService.appendChild(option);
});
