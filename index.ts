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

class SpeedConverter implements CalculatingFunction {
    private inputUnitStr: string;
    private outputUnitStr: string;
    private coefficient: number;

    constructor(inputUnit: string, outputUnit: string, coefficient: number) {
        this.inputUnitStr = inputUnit;
        this.outputUnitStr = outputUnit;
        this.coefficient = coefficient;
    }

    calculate(value: number): number {
        return value * this.coefficient;
    }

    inputUnit(): string {
        return this.inputUnitStr;
    }

    outputUnit(): string {
        return this.outputUnitStr;
    }
}

const inchesToCmConverter = new InchesToCm();
const inchesValue = 10;
const cmValue = inchesToCmConverter.calculate(inchesValue);
console.log(`${inchesValue} ${inchesToCmConverter.inputUnit()} = ${cmValue} ${inchesToCmConverter.outputUnit()}`);

const kmPerHourToMPerSecConverter = new SpeedConverter("km/h", "m/s", 1000 / 3600);
const kmPerHourValue = 60;
const mPerSecValue = kmPerHourToMPerSecConverter.calculate(kmPerHourValue);
console.log(`${kmPerHourValue} ${kmPerHourToMPerSecConverter.inputUnit()} = ${mPerSecValue} ${kmPerHourToMPerSecConverter.outputUnit()}`);
