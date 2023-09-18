let calculationCount: { [key: string]: number } = {
    inchesToCm: 0,
    cmToInches: 0,
    kmPerHourToMPerSec: 0,
    mPerSecToKmPerHour: 0
};

class InchesToCm {
    calculate(inches: number): number {
        return inches * 2.54;
    }
}

class CmToInches {
    calculate(cm: number): number {
        return cm / 2.54;
    }
}

function convert() {
    const inputValue = parseFloat((document.getElementById("inputValue") as HTMLInputElement).value);
    const converterSelect = document.getElementById("converterSelect") as HTMLSelectElement;
    const selectedConverter = converterSelect.value;
    let result = 0;

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

    document.getElementById("result")!.textContent = result.toFixed(2);
    updateCalculationCount();
}

function updateCalculationCount() {
    const calculationCountElement = document.getElementById("calculationCount");
    calculationCountElement!.textContent = Object.keys(calculationCount).map(key => `${key}: ${calculationCount[key]}`).join(', ');
}

const convertButton = document.getElementById("convertButton");
if (convertButton) {
    convertButton.addEventListener("click", convert);
}