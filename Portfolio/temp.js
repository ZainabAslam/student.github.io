function convertCelcius() {
    const fahrenheit = parseInt(document.getElementById("Fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").innerText = celsius;
  }
function convertKelvin(){
    const fahrenheit = parseInt(document.getElementById("Fahrenheit").value);
    const Kelvin = (fahrenheit - 32) * 0.5556 + 273.15;
    document.getElementById("Kelvin").innerText = Kelvin;
  }