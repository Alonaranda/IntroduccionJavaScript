

var auto = function(){


    auto.color = "rojo"
    auto.dueno = "Manolo"
    auto.marca = "ferrari"
    this.saludo = function(){

			  document.write(  this.dueno +  " tiene un " + this.marca  + " color " + this.color )
			
    }
    
}

 
auto.saludo()
 