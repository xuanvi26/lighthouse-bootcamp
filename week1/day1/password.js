let args = process.argv;

const obfuscate = (password) => {
    let newPassword = '';
    for (i = 0; i < password.length; i++) {
        if (password.charAt(i) === "a") {
            newPassword += '4'; 
            continue;
        }
        if (password.charAt(i) === "e") {
            newPassword += '3'; 
            continue;
        }
        if (password.charAt(i) === "o") {
            newPassword += '0'; 
            continue;
        }
        if (password.charAt(i) === "l") {
            newPassword += '1'; 
            continue;
        }
        newPassword += password.charAt(i);
    }
    console.log(newPassword);
}

obfuscate(args[2]);