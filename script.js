const lusername = document.getElementById("label1");
const lemail = document.getElementById("label2");
const lpassword = document.getElementById("label3");
const lPhone_no = document.getElementById("label4");
const lbday = document.getElementById("label5");
const ldp = document.getElementById("label6");
const username = document.getElementById("Username");
const email = document.getElementById("Emailin");
const password = document.getElementById("passwordin");
const Phone_no = document.getElementById("phno");
const bday = document.getElementById("DOB");
const dp = document.getElementById("vpp");
const form = document.getElementById("loginform");
const logbutton = document.getElementById("login-in");
const verifybutton = document.getElementById("verify-btn");
let allin = [false, false, false, false, false, false];
let incount = 0;
const logo = document.getElementsByClassName("heading");
const jsConfetti = new JSConfetti();
const audio = new Audio(
  "https://dl.dropbox.com/scl/fi/3o9by8n36og7r2239sv7a/party-popper.mp3?rlkey=vrpgzbipvk8j7cq9waoesc9iw&dl=0"
);
function validateForm() {
  // check if the user name is empty or not
  let uname = username.value;
  if (uname != "") {
    username.classList.add("vtin");
    username.classList.remove("tin");
    lusername.classList.add("vlabel");
    allin[0] = true;
  } else {
    username.classList.remove("vtin");
    username.classList.add("tin");
    lusername.classList.remove("vlabel");
    allin[0] = false;
  }
  let mail = email.value;
  if (mail != "") {
    email.classList.add("vtin");
    email.classList.remove("tin");
    lemail.classList.add("vlabel");
    allin[1] = true;
  } else {
    email.classList.remove("vtin");
    email.classList.add("tin");
    lemail.classList.remove("vlabel");
    allin[1] = false;
  }
  let pass = password.value;
  if (pass != "") {
    password.classList.add("vtin");
    password.classList.remove("tin");
    lpassword.classList.add("vlabel");
    allin[2] = true;
  } else {
    password.classList.remove("vtin");
    password.classList.add("tin");
    lpassword.classList.remove("vlabel");
    allin[2] = false;
  }
  let phno = Phone_no.value;
  if (phno != "") {
    Phone_no.classList.add("vtin");
    Phone_no.classList.remove("tin");
    lPhone_no.classList.add("vlabel");
    allin[3] = true;
  } else {
    Phone_no.classList.remove("vtin");
    Phone_no.classList.add("tin");
    lPhone_no.classList.remove("vlabel");
    allin[3] = false;
  }
  let birthday = bday.value;
  if (birthday != "") {
    bday.classList.add("vtin");
    bday.classList.remove("tin");
    lbday.classList.add("vlabel");
    allin[4] = true;
  } else {
    bday.classList.remove("vtin");
    bday.classList.add("tin");
    lbday.classList.remove("vlabel");
    allin[4] = false;
  }
  let vpp = dp.value;
  if (vpp != "") {
    dp.classList.add("vtin");
    dp.classList.remove("tin");
    ldp.classList.add("vlabel");
    allin[5] = true;
  } else {
    dp.classList.remove("vtin");
    dp.classList.add("tin");
    ldp.classList.remove("vlabel");
    allin[5] = false;
  }
  if (allin[0] && allin[1] && allin[2] && allin[3] && allin[4] && allin[5]) {
    form.classList.add("vlogform");
  } else {
    form.classList.remove("vlogform");
  }
}

setInterval(validateForm, 100);
function validateForm2() {
  let validate = false;
  let validatecount = 0;
  const max = 4;
  if (password.value.length < 8) {
    alert("Password should be 8 or more  letters");
  } else {
    validatecount++;
  }
  if (Phone_no.value.length != 10) {
    alert("Phone should be of 10 digits");
  } else {
    validatecount++;
  }
  let DOB = bday.value;
  let DOB2 = new Date(DOB);
  let year = DOB2.getFullYear();
  let month = DOB2.getMonth() + 1;
  let date = DOB2.getDate();
  console.log(`${date}/${month}/${year}`);
  if (dp.value == "") {
    alert("Please Select and Upload your Profile photo for verification!");
  } else {
    validatecount++;
  }
  if (year > 2024) {
    alert("You have entered a future date in date of birth");
  } else if (year == 2024 && month > 1) {
    alert("You have entered a future date in date of birth");
  } else if (year == 2024 && month == 1 && date > 24) {
    alert("You have entered a future date in date of birth");
  } else if (bday.value == "") {
    alert("Please enter your Date of Birth");
  } else {
    validatecount++;
  }
  if (validatecount == max) {
    validate = true;
  } else {
    validate = false;
  }
  return validate;
}
// setInterval(validateForm2, 10000);
// let a = "password";
// console.log(`${a} cfgtr hy567tdfgrv.onsists of ${a.length} letters`);
// setInterval(validateForm2, 1000);
verifybutton.addEventListener("click", () => {
  let validation = validateForm2();
  if (validation == true){
      audio.play().then(() => {
        jsConfetti.addConfetti({
          confettiRadius: 4,
          confettiNumber: 2000,
          confettiSpeed: 200,
          // emojis:['🎂','🎉','💖'],
          // emojiSize: 10,
        });
    });
    verifybutton.disabled = true;
    logbutton.disabled = false;
  } else {
    verifybutton.disabled = false;
    logbutton.disabled = true;
  }
});

// confirm("Autofill?");
