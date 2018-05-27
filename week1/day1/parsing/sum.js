let args = process.argv;

const sum = (firstVal, secondVal) => {
    console.log(Number(firstVal) + Number(secondVal));
};

sum(args[2], args[3]);