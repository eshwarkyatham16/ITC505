document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    let isValid = true;

    document.querySelectorAll(".error-message").forEach(function (el) {
      el.textContent = "";
    });
    document.querySelectorAll("input").forEach(function (el) {
      el.classList.remove("error");
    });

    if (!firstName) {
      isValid = false;
      document.getElementById("firstNameError").textContent =
        "First name is required.";
      document.getElementById("firstName").classList.add("error");
    }
    if (!lastName) {
      isValid = false;
      document.getElementById("lastNameError").textContent =
        "Last name is required.";
      document.getElementById("lastName").classList.add("error");
    }
    if (!email) {
      isValid = false;
      document.getElementById("emailError").textContent =
        "Email Id is required.";
      document.getElementById("email").classList.add("error");
    } else {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent =
          "Please enter a valid email address.";
        document.getElementById("email").classList.add("error");
      }
    }
    if (!password) {
      isValid = false;
      document.getElementById("passwordError").textContent =
        "Password is required.";
      document.getElementById("password").classList.add("error");
    }
    if (!confirmPassword) {
      isValid = false;
      document.getElementById("confirmPasswordError").textContent =
        "Confirm password is required.";
      document.getElementById("confirmPassword").classList.add("error");
    } else if (password !== confirmPassword) {
      isValid = false;
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      document.getElementById("confirmPassword").classList.add("error");
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
