let namevalidtion = true;
let emailvalidation = true;
let contactvalidation = true;
let passwordValidation = true;
let name = "";

function validationName(str) {
  namevalidtion = true;
  name = str.toLowerCase().trim();
  let span = document.getElementById("nmsg");

  if (name.length === 0) {
    namevalidtion = false;
    span.innerHTML = "❌ Name cannot be empty";
    span.style.color = "red";
  } else {
    for (let i = 0; i < name.length; i++) {
      let ch = name.charCodeAt(i);
      if (!((ch >= 97 && ch <= 122) || name.charAt(i) === ' ')) {
        namevalidtion = false;
        break;
      }
    }

    if (namevalidtion) {
      span.innerHTML = "";
    } else {
      span.innerHTML = "❌ Invalid name (only letters allowed)";
      span.style.color = "red";
    }
  }
}

function validateEmail(str) {
  emailvalidation = true;
  let span = document.getElementById("emsg");
  str = str.trim();
  let atIndex = str.indexOf("@");
  let lastDot = str.lastIndexOf(".");

  if (
    str.length < 5 ||
    atIndex <= 0 ||
    str.indexOf("@", atIndex + 1) !== -1 ||
    lastDot <= atIndex + 1 ||
    lastDot >= str.length - 2
  ) {
    emailvalidation = false;
    span.innerHTML = "❌ Invalid email format";
    span.style.color = "red";
  } else {
    span.innerHTML = "";
  }
}

function validateContact(str) {
  contactvalidation = true;
  let span = document.getElementById("cmsg");

  if (str.length !== 10) {
    contactvalidation = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
        contactvalidation = false;
        break;
      }
    }
  }

  if (!contactvalidation) {
    span.innerHTML = "❌ Contact must be exactly 10 digits";
    span.style.color = "red";
  } else {
    span.innerHTML = "";
  }
}

function validatePassword(str) {
  passwordValidation = true;
  let span = document.getElementById("pmsg");
  let trimmed = str.trim();

  if (trimmed.length === 0) {
    passwordValidation = false;
    span.innerHTML = "❌ Password cannot be empty";
    span.style.color = "red";
  } else if (trimmed.length < 3) {
    passwordValidation = false;
    span.innerHTML = "❌ Password must be at least 4 characters";
    span.style.color = "red";
  } else {
    span.innerHTML = "";
  }
}

function submitForm() {
  if (name.length === 0) {
    namevalidtion = false;
  }

  let passwordValue = document.getElementById("password").value;
  validatePassword(passwordValue);

  if (namevalidtion && emailvalidation && contactvalidation && passwordValidation) {
    return true;
  } else {
    document.getElementById("h").innerHTML = "❌ Form cannot be submitted. Please fix errors.";
    document.getElementById("h").style.color = "red";
    return false;
  }
}

function loginForm() {
  if (name.length === 0) {
    namevalidtion = false;
  }

  let passwordValue = document.getElementById("password").value;
  validatePassword(passwordValue);

  if (namevalidtion && passwordValidation) {
    return true;
  } else {
    let span = document.getElementById("h");
    if (span) {
      span.innerHTML = "❌ Form cannot be submitted. Please fix errors.";
      span.style.color = "red";
    }
    return false;
  }
}