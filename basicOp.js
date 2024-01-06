/* Ваша задача - создать функцию, которая выполняет четыре базовые математические операции.

Функция должна принимать три аргумента - operation(string/char), value1(number), value2(number).
После применения выбранной операции функция должна возвращать результат в виде числа.

Примеры(Оператор, значение1, значение2) --> вывод */

function basicOp(operation, value1, value2)
{
   switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}
console.log(basicOp('*', 10, 10)); //100