
  
  function calculate() {
    
    let diff = 273.15
    var celcius = document.getElementById("uno").value;
    TempKelvin = (celcius + diff)


    if (!isNaN(TempKelvin)) {
  
      document.getElementById("cinco").innerHTML = TempKelvin + " K ";
    }
  }

