
  
  function calculate() {
    
    var celcius = document.getElementById("uno").value;
    TempKelvin = celcius + 273.15


    document.getElementById("cinco").innerHTML = TempKelvin + " K ";
  }