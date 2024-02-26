// 42, "number"   --> true
// "42", "number" --> false

const typeValidation = (variable, type) => typeof(variable) === type;
console.log(typeValidation("42", "number")); // false