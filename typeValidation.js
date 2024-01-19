// 42, "number"   --> true
// "42", "number" --> false

function typeValidation(variable, type) {
    let value = typeof(variable);
    if(value === type) {
      return true;
    } else {
      return false;
    }
}
console.log(typeValidation(42, "number")); // true