function isStrongPassword(passwordStr) {
   
    const minLength = passwordStr.length >= 12;
    const hasUppercase = /[A-Z]/.test(passwordStr);
    const hasLowercase = /[a-z]/.test(passwordStr);
    const hasNumber = /[0-9]/.test(passwordStr);
    const hasSpecialChar = /[!@#$%^&*()_+{}|[\]/<>?]/.test(passwordStr);
    const notContainsPassword = !/password/i.test(passwordStr);

   
    if (minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar && notContainsPassword) {
        console.log("Strong Password");
        return true;
    } else {
        console.log("Weak Password");
        return false;
    }
}


const password = prompt("Enter a password:");


isStrongPassword(password);