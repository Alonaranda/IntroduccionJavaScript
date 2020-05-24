

function moneda(){


    this.nombre
    this.tipoDeCambio
  

    this.convertir = function(monto){


        conversionResultado = monto * this.tipoDeCambio
        
        alert(conversionResultado)
        
    }

}

var yen = new moneda()
    yen.nombre = "Yenes"
    yen.tipoDeCambio = 99.5


function convertirMoneda(tipoDeMoneda){

    yen.convertir(100)

      
}

