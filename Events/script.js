
// const button = document.getElementById("sign-up");

// button.addEventListener("mouseover", () => {
//     alert("Data have been submited successfully. ")
// })

// // const handleClick = () => {
// //     alert("Data have been submitted successfully")    
// // }
// // button.addEventListener("click", handleClick);

// // document.addEventListener("keydown", e) => {
// //     alert("Key realesed", e.key)
// // }

const fullname = document.getElementById("Fullname");
const email = document.getElementById("email");
const course = document.getElementById("course");
const button = document.getElementById("submit-btn");

button.addEventListener("mouseover", ()=> {
    button.style.background = "green";
    button.style.transform = "scale(1.05)";
});
button.addEventListener("mouseout", ()=> {
    button.style.background = "#007BFF";
    button.style.transform = "scale(1)";

})
button.addEventListener("click", ()=> {
    button.textContent = "Processing...";
    setTimeout(() => button.textContent = "Submit button", 3000);

})

function addFocusEffect (input, helperId, helperText) {
    const helper = document.getElementById(helperId);

    input.addEventListener("focus", () => {
        input.style.border = "5px solid blue";   // blue border
        helper.textContent = helperText; // helper text
        helper.classList.remove("error"); 
    })
    
    input.addEventListener("blur", () => {
        input.style.border = ""; // remove blue border
        if (input.value.trim() === "") {
            helper.textContent = "This field is required.";
            helper.classList.add("error"); // red text
        } else {
            helper.textContent = ""; // clear helper/error
        }

    });
}

addFocusEffect(fullname, "nameHelper", "Enter your full names");
addFocusEffect(email, "emailHelper", "Enter a valid email address");
addFocusEffect(course, "courseHelper", "Enter your course name");

fullname.addEventListener("input", () => {
    const counter = document.getElementById("nameCounter");
    counter.textContent = `${fullname.value.length}/50 characters`;
  });
  
  const form = document.getElementById("studentForm");
  const message = document.getElementById("message");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload
  
    let valid = true;
  
    if (fullname.value.trim() === "") {
      document.getElementById("nameHelper").textContent = "Full Name is required.";
      document.getElementById("nameHelper").classList.add("error");
      valid = false;
    }
  
    if (email.value.trim() === "") {
      document.getElementById("emailHelper").textContent = "Email is required.";
      document.getElementById("emailHelper").classList.add("error");
      valid = false;
    }
  
    if (course.value.trim() === "") {
      document.getElementById("courseHelper").textContent = "Course is required.";
      document.getElementById("courseHelper").classList.add("error");
      valid = false;
    }
    if (valid) {
        message.textContent = "Registration Successful!";
        message.className = "success";
      } else {
        message.textContent = "Please fix the errors above.";
        message.className = "error";
      }
    
  
  });  