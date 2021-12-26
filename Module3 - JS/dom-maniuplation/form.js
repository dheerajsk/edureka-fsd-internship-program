
// 1. On click of button get values from elements.

// Best Practices [Name of function should indicate action(verb)]

function handleSubmit(){
    // 1. Get FirstName element
    const txtbFname = document.getElementById("txtbFname");
    // 2. Get alue of element
    const fname = txtbFname.value;
    console.log(fname);

    const txtbLname = document.getElementById("txtbLname");
    // 2. Get alue of element
    const lname = txtbLname.value;
    console.log(lname);

    const txtbEmail = document.getElementById("txtbEmail");
    // 2. Get alue of element
    const email = txtbEmail.value;
    console.log(email);

    const txtbPassword = document.getElementById("txtbPassword");
    // 2. Get alue of element
    const password = txtbPassword.value;
    console.log(password);

    const inputDOB = document.getElementById("inputDOB");
    // 2. Get alue of element
    const dob = inputDOB.value;
    console.log(dob);

    // Get elements by name
    const genderButtons = document.getElementsByName("gender");
    const isMale = genderButtons[0].checked;
    const isFemale = genderButtons[1].checked;
    console.log(isMale);
    console.log(isFemale);
    
}