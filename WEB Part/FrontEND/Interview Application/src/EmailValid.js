function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    error.username = "username should not be empty";
  } else {
    error.username = "";
  }
  if (values.firstName === "") {
    error.firstName = "Name should not be empty";
  } else {
    error.firstName = "";
  }
  if (values.lastName === "") {
    error.lastName = "Name should not be empty";
  } else {
    error.lastName = "";
  }
  if (values.phone === "") {
    error.phone = "phone should not be empty";
  } else {
    error.phone = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else {
    error.password = "";
  }
  return error;
}

export default validation;
