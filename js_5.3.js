function validation1(pass) {
    if (pass > 7) {
        return "Strong";
    } else {
        return "Weak"
    }

}

const validation2 = pass > 7 ? "Strong" : "Weak";

function validation3(pass) {
    if (pass.length > 7 && pass != pass.toLowerCase()) {
        return "Very Strong";
    } else {
        return "Weak"
    }

}


console.log(`${validation1(6)}`);
console.log(`${validation2(8)}`);
console.log(`${validation3("jasdlkasjdlkD")}`);