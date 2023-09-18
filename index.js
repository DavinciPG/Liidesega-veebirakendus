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
var SpeedConverter = /** @class */ (function () {
    function SpeedConverter(inputUnit, outputUnit, coefficient) {
        this.inputUnitStr = inputUnit;
        this.outputUnitStr = outputUnit;
        this.coefficient = coefficient;
    }
    SpeedConverter.prototype.calculate = function (value) {
        return value * this.coefficient;
    };
    SpeedConverter.prototype.inputUnit = function () {
        return this.inputUnitStr;
    };
    SpeedConverter.prototype.outputUnit = function () {
        return this.outputUnitStr;
    };
    return SpeedConverter;
}());
var inchesToCmConverter = new InchesToCm();
var inchesValue = 10;
var cmValue = inchesToCmConverter.calculate(inchesValue);
console.log("".concat(inchesValue, " ").concat(inchesToCmConverter.inputUnit(), " = ").concat(cmValue, " ").concat(inchesToCmConverter.outputUnit()));
var kmPerHourToMPerSecConverter = new SpeedConverter("km/h", "m/s", 1000 / 3600);
var kmPerHourValue = 60;
var mPerSecValue = kmPerHourToMPerSecConverter.calculate(kmPerHourValue);
console.log("".concat(kmPerHourValue, " ").concat(kmPerHourToMPerSecConverter.inputUnit(), " = ").concat(mPerSecValue, " ").concat(kmPerHourToMPerSecConverter.outputUnit()));
