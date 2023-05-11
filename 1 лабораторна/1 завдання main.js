const valueInput = document.getElementById("value");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultP = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

//коефіцієнти 
const units = {
  kilometers: {
    kilometers:1,
    meters: 1000,
    centimeters: 100000,
    decimeters: 10000,
    millimeters: 1000000
  },
  meters: {
    kilometers: 0.001,
    meters:1,
    centimeters: 100,
    decimeters: 10,
    millimeters: 1000
  },
  centimeters: {
    kilometers: 0.00001,
    meters: 0.01,
    decimeters: 0.1,
    centimeters:1,
    millimeters: 10
  },
  decimeters: {
    kilometers: 0.0001,
    meters: 0.1,
    centimeters: 10,
    decimeters:1,
    millimeters: 100
  },
  millimeters: {
    millimeters:1,
    kilometers: 0.000001,
    meters: 0.001,
    centimeters: 0.1,
    decimeters: 0.01
  }
};

convertBtn.addEventListener("click", () => {
    const value = parseFloat(valueInput.value);
    const fromUnit = fromSelect.value; 
    const toUnit = toSelect.value; 
    
    const result = value * units[fromUnit][toUnit];

    resultP.textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
});

