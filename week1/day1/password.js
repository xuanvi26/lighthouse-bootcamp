let args = process.argv;

const obfuscate = (password) => {
    for (i = 0; i < password.length; i++) {
        if (password.charAt(i) === "a") password.charAt(i) = 4;
        if (password.charAt(i) === "e") password.charAt(i) = 3;
        if (password.charAt(i) === "0") password.charAt(i) = 0;
        if (password.charAt(i) === "l") password.charAt(i) = 1;
    }
    console.log(password);
}

obfuscate(args[2]);