interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class KilometersPerHourToMetersPerSecond implements CalculatingFunction {
    calculate(kmPerHour: number): number {
        return kmPerHour * (1000 / 3600);
    }
    inputUnit(): string {
        return "km/h";
    }
    outputUnit(): string {
        return "m/s";
    }
}

class ResistancePowerCalculator implements CalculatingFunction {
    constructor(private resistance: number) {}

    calculate(voltage: number): number {
        const current = voltage / this.resistance;
        return voltage * current;
    }

    inputUnit(): string {
        return "V";
    }

    outputUnit(): string {
        return "W";
    }
}

class Figure {
    constructor(protected calculator: CalculatingFunction, protected g: CanvasRenderingContext2D) {
        this.draw();
    }
    draw() {
        this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);

        for (let i = 0; i < 25; i++) {
            // Adjust the y-coordinate to draw from top to bottom
            const y = this.g.canvas.height - 10 * this.calculator.calculate(i);
            this.g.fillRect(10 * i, y, 3, 3);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const kmPerHourToMPerSecCalculator = new KilometersPerHourToMetersPerSecond();
    const speedInKmPerHour = 60; // Replace with your desired speed in km/h
    const metersPerSecond = kmPerHourToMPerSecCalculator.calculate(speedInKmPerHour);

    const canvas1 = document.getElementById("canvas1") as HTMLCanvasElement;
    const context1 = canvas1.getContext("2d");

    if (context1) {
        const figure1 = new Figure(kmPerHourToMPerSecCalculator, context1);
        figure1.draw(); // Draw the result on canvas1
    } else {
        console.error("Canvas rendering context is not available for canvas1.");
    }


    const resistancePowerCalculator = new ResistancePowerCalculator(100);
    const voltage = 12; // Replace with your desired voltage in volts
    const power = resistancePowerCalculator.calculate(voltage);

    const canvas2 = document.getElementById("canvas2") as HTMLCanvasElement;
    const context2 = canvas2.getContext("2d");

    if (context2) {
        const figure2 = new Figure(resistancePowerCalculator, context2);
        figure2.draw(); // Draw the result on canvas2
    } else {
        console.error("Canvas rendering context is not available for canvas2.");
    }
});
