function convert() {
    // Get input values
    var inputValue = document.getElementById('inputValue').value;
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
  
    // Convert values
    var result;
    if (fromUnit === toUnit) {
      result = inputValue;
    } else if (fromUnit === 'meter' && toUnit === 'kilometer') {
      result = inputValue / 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
      result = inputValue * 1000;
    } else if (fromUnit === 'centimeter' && toUnit === 'meter') {
      result = inputValue / 100;
    } else if (fromUnit === 'meter' && toUnit === 'centimeter') {
      result = inputValue * 100;
    }
  

    document.getElementById('result').innerHTML = result;
  }