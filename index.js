document.addEventListener("DOMContentLoaded", function () {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const keys = document.querySelector('.calculator-keys');

    
    // checking for function
    keys.addEventListener('click', function (event) {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) {
            return;
        }

        //selecting operator
        switch (value) {
            case 'sin':
                calculatorScreen.value = Math.sin(toRadians(parseFloat(calculatorScreen.value)));
                break;
            case 'cos':
                calculatorScreen.value = Math.cos(toRadians(parseFloat(calculatorScreen.value)));
                break;
            case 'tan':
                calculatorScreen.value = Math.tan(toRadians(parseFloat(calculatorScreen.value)));
                break;
            case 'log':
                calculatorScreen.value = Math.log10(parseFloat(calculatorScreen.value));
                break;
            case '^':
                calculatorScreen.value += '^';
                break;
            case 'sqrt':
                calculatorScreen.value = Math.sqrt(parseFloat(calculatorScreen.value));
                break;
            case 'π':
                calculatorScreen.value += Math.PI;
                break;
            case 'e':
                calculatorScreen.value += Math.E;
                break;
            case '=':
                try {
                    calculatorScreen.value = evaluateExpression(calculatorScreen.value);
                } catch (e) {
                    calculatorScreen.value = 'Error';
                }
                break;
            case 'all-clear':
                calculatorScreen.value = '';
                break;
            default:
                calculatorScreen.value += value;
        }
    });

    function evaluateExpression(expression) {
        let powerRegex = /(\d+(\.\d+)?)(\^)(\d+(\.\d+)?)/;

        while (powerRegex.test(expression)) {
            expression = expression.replace(powerRegex, (_, base, _1, _2, exp) => Math.pow(parseFloat(base), parseFloat(exp)));
        }

        return eval(expression);
    }

    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
});
