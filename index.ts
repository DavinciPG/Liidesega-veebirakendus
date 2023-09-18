
interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class InchesToCm implements CalculatingFunction {
    calculate(inches: number): number {
        return inches * 2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string {
        return "cm";
    }
}

class Figure {
    protected calculator: CalculatingFunction;

    constructor(calculator: CalculatingFunction, protected g: CanvasRenderingContext2D) {
        this.calculator = calculator;
    }

    // Create a method to update the calculator
    setCalculator(calculator: CalculatingFunction) {
        this.calculator = calculator;
    }

    draw() {
        this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);

        this.g.beginPath();
        this.g.moveTo(0, this.g.canvas.height);
        this.g.lineTo(this.g.canvas.width, this.g.canvas.height);
        this.g.moveTo(0, 0);
        this.g.lineTo(0, this.g.canvas.height);
        this.g.stroke();

        for (let i = 0; i <= 20; i += 2) {
            const x = 10 * i;
            const y = this.g.canvas.height;

            this.g.beginPath();
            this.g.moveTo(x, y);
            this.g.lineTo(x, y - 5);
            this.g.stroke();

            this.g.fillText(i + "", x, y + 15);

            const value = this.calculator.calculate(i);
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
        for (let i = 0; i <= 20; i += 2) {
            const x = 10 * i;
            const y = this.g.canvas.height - 3 * this.calculator.calculate(i);
            this.g.lineTo(x, y);
            this.g.fillRect(x - 2, y - 2, 4, 4);
        }
        this.g.stroke();
    }
}

const inchesToCmCalculator = new InchesToCm();
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");

if (context) {
    const figure = new Figure(inchesToCmCalculator, context);
    figure.draw(); // Draw the initial chart

    // Add a dropdown menu to switch calculators
    const calculatorDropdown = document.getElementById("calculatorDropdown") as HTMLSelectElement;
    calculatorDropdown.addEventListener("change", () => {
        if (calculatorDropdown.value === "inchesToCm") {
            const inchesToCmCalculator = new InchesToCm();
            figure.setCalculator(inchesToCmCalculator);
            figure.draw();
        }
    });
} else {
    console.error("Canvas rendering context is not available.");
}
