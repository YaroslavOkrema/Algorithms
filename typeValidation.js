// 42, "number"   --> true
// "42", "number" --> false

function typeValidation(variable, type) {
    let value = typeof(variable);
    return value === type;
}
console.log(typeValidation(42, "number")); // true