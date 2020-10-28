do {
    var result;

    var a = parseInt(prompt('Please input a number.'));
    var b = parseInt(prompt('Please input another number.'));
    var sign = prompt('Please input a sign (+ - * /).');
    switch (sign) {
        case '+':
            result = a + b;
          break;
          case '-':
            result = a - b;
          break;
          case '*':
            result = a * b;
          break;
          case '/':
            result = a / b;
          break;
      }
    console.log(`Result = ${result}`);
    var question = confirm("Do you want to continue?");
} while (question == true)