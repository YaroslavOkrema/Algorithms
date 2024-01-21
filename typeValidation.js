// 42, "number"   --> true
// "42", "number" --> false

function typeValidation(variable, type) {
    return typeof(variable) === type;
}
console.log(typeValidation("42", "number")); // true