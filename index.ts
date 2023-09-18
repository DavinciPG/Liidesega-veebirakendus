interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class CmToInches implements CalculatingFunction {
    calculate(cm: number): number {
        return cm / 2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string {
        return "in";
    }
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

class AXplusB implements CalculatingFunction {
    constructor(
        protected coefficient: number,
        protected intercept: number,
        protected inputUnitType: string,
        protected outputUnitType: string
    ) {}
    calculate(x: number): number {
        return this.coefficient * x + this.intercept;
    }
    inputUnit(): string {
        return this.inputUnitType;
    }
    outputUnit(): string {
        return this.outputUnitType;
    }
}

const taxiFareCalculator = new AXplusB(2.5, 5, "km", "EUR");
const distanceKm = 10;
const fare = taxiFareCalculator.calculate(distanceKm);
console.log(`Taxi fare for ${distanceKm} km: ${fare} EUR`);

const celsiusToFahrenheit = new AXplusB(9 / 5, 32, "°C", "°F");
const celsiusDegrees = 10;
const fahrenheitDegrees = celsiusToFahrenheit.calculate(celsiusDegrees);
console.log(`${celsiusDegrees} °C is equivalent to ${fahrenheitDegrees} °F`);

const fahrenheitToCelsius = new AXplusB(5 / 9, -32 * (5 / 9), "°F", "°C");
const fahrenheitDegrees2 = 50;
const celsiusDegrees2 = fahrenheitToCelsius.calculate(fahrenheitDegrees2);
console.log(`${fahrenheitDegrees2} °F is equivalent to ${celsiusDegrees2} °C`);

class OhmsLaw implements CalculatingFunction {
    constructor(protected resistance: number) {}
    calculate(voltage: number): number {
        return voltage / this.resistance;
    }
    inputUnit(): string {
        return "V";
    }
    outputUnit(): string {
        return "A";
    }
    setResistance(resistance: number): void {
        this.resistance = resistance;
    }
}

const ohmsLawCalculator = new OhmsLaw(10);
const voltage = 12; // Pinge 12 volti
const current = ohmsLawCalculator.calculate(voltage);
console.log(`Current: ${current} A`);

const updatedResistance = 20;
ohmsLawCalculator.setResistance(updatedResistance);
const current2 = ohmsLawCalculator.calculate(voltage);
console.log(`Current with updated resistance: ${current2} A`);

class PowerCalculator implements CalculatingFunction {
    constructor(protected resistance: number) {}
    calculate(voltage: number): number {
        return (voltage * voltage) / this.resistance;
    }
    inputUnit(): string {
        return "V";
    }
    outputUnit(): string {
        return "W";
    }
}

const powerCalculator = new PowerCalculator(10);
const power = powerCalculator.calculate(voltage);
console.log(`Power: ${power} W`);