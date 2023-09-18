var calculationCount = {
    inchesToCm: 0,
    cmToInches: 0,
    kmPerHourToMPerSec: 0,
    mPerSecToKmPerHour: 0
};
var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    return InchesToCm;
}());
var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    return CmToInches;
}());
function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var converterSelect = document.getElementById("converterSelect");
    var selectedConverter = converterSelect.value;
    var result = 0;
    switch (selectedConverter) {
        case "inchesToCm":
            result = new InchesToCm().calculate(inputValue);
            calculationCount.inchesToCm++;
            break;
        case "cmToInches":
            result = new CmToInches().calculate(inputValue);
            calculationCount.cmToInches++;
            break;
        case "kmPerHourToMPerSec":
            result = inputValue * (1000 / 3600);
            calculationCount.kmPerHourToMPerSec++;
            break;
        case "mPerSecToKmPerHour":
            result = inputValue * (3600 / 1000);
            calculationCount.mPerSecToKmPerHour++;
            break;
        default:
            alert("Invalid converter selection.");
            break;
    }
    document.getElementById("result").textContent = result.toFixed(2);
    updateCalculationCount();
}
function updateCalculationCount() {
    var calculationCountElement = document.getElementById("calculationCount");
    calculationCountElement.textContent = Object.keys(calculationCount).map(function (key) { return "".concat(key, ": ").concat(calculationCount[key]); }).join(', ');
}
var convertButton = document.getElementById("convertButton");
if (convertButton) {
    convertButton.addEventListener("click", convert);
}
