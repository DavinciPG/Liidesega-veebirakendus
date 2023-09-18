var KilometersPerHourToMetersPerSecond = /** @class */ (function () {
    function KilometersPerHourToMetersPerSecond() {
    }
    KilometersPerHourToMetersPerSecond.prototype.calculate = function (kmPerHour) {
        return kmPerHour * (1000 / 3600);
    };
    KilometersPerHourToMetersPerSecond.prototype.inputUnit = function () {
        return "km/h";
    };
    KilometersPerHourToMetersPerSecond.prototype.outputUnit = function () {
        return "m/s";
    };
    return KilometersPerHourToMetersPerSecond;
}());
var ResistancePowerCalculator = /** @class */ (function () {
    function ResistancePowerCalculator(resistance) {
        this.resistance = resistance;
    }
    ResistancePowerCalculator.prototype.calculate = function (voltage) {
        var current = voltage / this.resistance;
        return voltage * current;
    };
    ResistancePowerCalculator.prototype.inputUnit = function () {
        return "V";
    };
    ResistancePowerCalculator.prototype.outputUnit = function () {
        return "W";
    };
    return ResistancePowerCalculator;
}());
var Figure = /** @class */ (function () {
    function Figure(calculator, g) {
        this.calculator = calculator;
        this.g = g;
        this.draw();
    }
    Figure.prototype.draw = function () {
        this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);
        for (var i = 0; i < 25; i++) {
            // Adjust the y-coordinate to draw from top to bottom
            var y = this.g.canvas.height - 10 * this.calculator.calculate(i);
            this.g.fillRect(10 * i, y, 3, 3);
        }
    };
    return Figure;
}());
document.addEventListener("DOMContentLoaded", function () {
    var kmPerHourToMPerSecCalculator = new KilometersPerHourToMetersPerSecond();
    var speedInKmPerHour = 60; // Replace with your desired speed in km/h
    var metersPerSecond = kmPerHourToMPerSecCalculator.calculate(speedInKmPerHour);
    var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext("2d");
    if (context1) {
        var figure1 = new Figure(kmPerHourToMPerSecCalculator, context1);
        figure1.draw(); // Draw the result on canvas1
    }
    else {
        console.error("Canvas rendering context is not available for canvas1.");
    }
    var resistancePowerCalculator = new ResistancePowerCalculator(100);
    var voltage = 12; // Replace with your desired voltage in volts
    var power = resistancePowerCalculator.calculate(voltage);
    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext("2d");
    if (context2) {
        var figure2 = new Figure(resistancePowerCalculator, context2);
        figure2.draw(); // Draw the result on canvas2
    }
    else {
        console.error("Canvas rendering context is not available for canvas2.");
    }
});
