
  
  function calculate() {
    
    var celcius = document.getElementById("uno").value;
    TempKelvin = (celcius + 273.15)


    if (!isNaN(TempKelvin)) {
  
      document.getElementById("cinco").innerHTML = TempKelvin + " K ";
    }
  }

