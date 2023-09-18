var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());
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
var AXplusB = /** @class */ (function () {
    function AXplusB(coefficient, intercept, inputUnitType, outputUnitType) {
        this.coefficient = coefficient;
        this.intercept = intercept;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    AXplusB.prototype.calculate = function (x) {
        return this.coefficient * x + this.intercept;
    };
    AXplusB.prototype.inputUnit = function () {
        return this.inputUnitType;
    };
    AXplusB.prototype.outputUnit = function () {
        return this.outputUnitType;
    };
    return AXplusB;
}());
var taxiFareCalculator = new AXplusB(2.5, 5, "km", "EUR");
var distanceKm = 10;
var fare = taxiFareCalculator.calculate(distanceKm);
console.log("Taxi fare for ".concat(distanceKm, " km: ").concat(fare, " EUR"));
var celsiusToFahrenheit = new AXplusB(9 / 5, 32, "°C", "°F");
var celsiusDegrees = 10;
var fahrenheitDegrees = celsiusToFahrenheit.calculate(celsiusDegrees);
console.log("".concat(celsiusDegrees, " \u00B0C is equivalent to ").concat(fahrenheitDegrees, " \u00B0F"));
var fahrenheitToCelsius = new AXplusB(5 / 9, -32 * (5 / 9), "°F", "°C");
var fahrenheitDegrees2 = 50;
var celsiusDegrees2 = fahrenheitToCelsius.calculate(fahrenheitDegrees2);
console.log("".concat(fahrenheitDegrees2, " \u00B0F is equivalent to ").concat(celsiusDegrees2, " \u00B0C"));
var OhmsLaw = /** @class */ (function () {
    function OhmsLaw(resistance) {
        this.resistance = resistance;
    }
    OhmsLaw.prototype.calculate = function (voltage) {
        return voltage / this.resistance;
    };
    OhmsLaw.prototype.inputUnit = function () {
        return "V";
    };
    OhmsLaw.prototype.outputUnit = function () {
        return "A";
    };
    OhmsLaw.prototype.setResistance = function (resistance) {
        this.resistance = resistance;
    };
    return OhmsLaw;
}());
var ohmsLawCalculator = new OhmsLaw(10);
var voltage = 12; // Pinge 12 volti
var current = ohmsLawCalculator.calculate(voltage);
console.log("Current: ".concat(current, " A"));
var updatedResistance = 20;
ohmsLawCalculator.setResistance(updatedResistance);
var current2 = ohmsLawCalculator.calculate(voltage);
console.log("Current with updated resistance: ".concat(current2, " A"));
var PowerCalculator = /** @class */ (function () {
    function PowerCalculator(resistance) {
        this.resistance = resistance;
    }
    PowerCalculator.prototype.calculate = function (voltage) {
        return (voltage * voltage) / this.resistance;
    };
    PowerCalculator.prototype.inputUnit = function () {
        return "V";
    };
    PowerCalculator.prototype.outputUnit = function () {
        return "W";
    };
    return PowerCalculator;
}());
var powerCalculator = new PowerCalculator(10);
var power = powerCalculator.calculate(voltage);
console.log("Power: ".concat(power, " W"));
