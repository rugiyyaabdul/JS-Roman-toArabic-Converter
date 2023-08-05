const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100, 
    'D': 500, 
    'M': 1000
};

const convertRomanToArabic=()=> {
    let romanNumber = document.getElementById("romanInput").value.toUpperCase();
    let arabicNumber = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        let currentSymbolValue = romanNumbers[romanNumber[i]];
        let nextSymbolValue = romanNumbers[romanNumber[i + 1]];

        if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
            arabicNumber -= currentSymbolValue;
        } else {
            arabicNumber += currentSymbolValue;
        }
    }

    const resultLabel = document.getElementById("resultLabel");
    resultLabel.textContent = `The Arabic equivalent of ${romanNumber} is ${arabicNumber}`;
}



            
    


