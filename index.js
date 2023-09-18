var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
var Figure = /** @class */ (function () {
    function Figure(calculator, g) {
        this.g = g;
        this.calculator = calculator;
    }
    // Create a method to update the calculator
    Figure.prototype.setCalculator = function (calculator) {
        this.calculator = calculator;
    };
    Figure.prototype.draw = function () {
        this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);
        this.g.beginPath();
        this.g.moveTo(0, this.g.canvas.height);
        this.g.lineTo(this.g.canvas.width, this.g.canvas.height);
        this.g.moveTo(0, 0);
        this.g.lineTo(0, this.g.canvas.height);
        this.g.stroke();
        for (var i = 0; i <= 20; i += 2) {
            var x = 10 * i;
            var y = this.g.canvas.height;
            this.g.beginPath();
            this.g.moveTo(x, y);
            this.g.lineTo(x, y - 5);
            this.g.stroke();
            this.g.fillText(i + "", x, y + 15);
            var value = this.calculator.calculate(i);
            this.g.fillText(value.toFixed(1), x - 15, y - 3 * value);
            this.g.beginPath();
            this.g.moveTo(x, y);
            this.g.lineTo(x + 5, y);
            this.g.stroke();
        }
        this.g.fillText("X-axis (" + this.calculator.inputUnit() + ")", this.g.canvas.width - 40, this.g.canvas.height + 20);
        this.g.save();
        this.g.translate(-50, this.g.canvas.height / 2);
        this.g.rotate(-Math.PI / 2);
        this.g.fillText("Y-axis (" + this.calculator.outputUnit() + ")", 0, 0);
        this.g.restore();
        this.g.beginPath();
        for (var i = 0; i <= 20; i += 2) {
            var x = 10 * i;
            var y = this.g.canvas.height - 3 * this.calculator.calculate(i);
            this.g.lineTo(x, y);
            this.g.fillRect(x - 2, y - 2, 4, 4);
        }
        this.g.stroke();
    };
    return Figure;
}());
var inchesToCmCalculator = new InchesToCm();
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
if (context) {
    var figure_1 = new Figure(inchesToCmCalculator, context);
    figure_1.draw(); // Draw the initial chart
    // Add a dropdown menu to switch calculators
    var calculatorDropdown_1 = document.getElementById("calculatorDropdown");
    calculatorDropdown_1.addEventListener("change", function () {
        if (calculatorDropdown_1.value === "inchesToCm") {
            var inchesToCmCalculator_1 = new InchesToCm();
            figure_1.setCalculator(inchesToCmCalculator_1);
            figure_1.draw();
        }
    });
}
else {
    console.error("Canvas rendering context is not available.");
}
