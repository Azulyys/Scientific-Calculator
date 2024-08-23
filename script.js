document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const buttons = Array.from(document.getElementsByClassName('btn'))
    let currentValue = "";

    function evaluateResult() {
        const convertedValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("log", "Math.log10")
            .replace("ln", "Math.log")
            .replace("π", "Math.PI")
            .replace("e", "Math.logE")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt")
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            console.log(button.innerText);
            const value = button.innerText;
            try {
                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;
                }
                else if (value == "=") {
                    evaluateResult();
                }
                else {
                    currentValue += value;
                    display.value = currentValue;
                }
            }
            catch (error) {
                console.error(error);
                currentValue = "ERROR"
                display.value = currentValue
            }
        })
    })
}); 
