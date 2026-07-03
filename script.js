// Student Registration Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let course = document.getElementById("course").value;

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "") {
                alert("Please enter your email.");
                return;
            }

            if (phone === "") {
                alert("Please enter your phone number.");
                return;
            }

            alert(
                "Registration Successful!\n\n" +
                "Name: " + name +
                "\nCourse: " + course
            );

            form.reset();

        });

    }

});