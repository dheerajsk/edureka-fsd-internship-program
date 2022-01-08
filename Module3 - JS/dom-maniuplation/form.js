
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
    // Validate Email
    // 1. Check if "@" (t@t.in)
    const indexOfAt = email.indexOf("@");
    const valid = email.length > (indexOfAt+4);
    if(indexOfAt<1 || !valid || !email.endsWith(".com")){
        alert("Please enter a valid email");
    }
    console.log(email);

    const txtbPassword = document.getElementById("txtbPassword");
    // 2. Get alue of element
    const password = txtbPassword.value;
    console.log(password);

    const inputDOB = document.getElementById("inputDOB");
    // 2. Get alue of element
    const dob = new Date(inputDOB.value);
    const yearOfSelectedDate = dob.getFullYear(); 
    const currentYear = new Date().getFullYear(); 
    if(yearOfSelectedDate>(currentYear-15)){
        alert("You should be atleast 15 years old");
    }

    console.log(dob);

    // Get elements by name
    const genderButtons = document.getElementsByName("gender");
    const isMale = genderButtons[0].checked;
    const isFemale = genderButtons[1].checked;
    console.log(isMale);
    console.log(isFemale);
    
    const lblResult = document.getElementById("lblResult");
    const result = `Name = ${fname} ${lname}, 
    Email: ${email}, Gender = ${isMale== true ? 'Male' : 'Female'}`;
    console.log(result);
    lblResult.style.display="inline";
    lblResult.innerText = result;
    lblResult.style.backgroundColor='yellow';
}

function handleNameInput(){
    const fnameResult = document.getElementById("fnameResult");
    const nameinput = document.getElementById("txtbFname");
    fnameResult.innerText = nameinput.value;
}