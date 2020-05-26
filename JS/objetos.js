var auto = {}

    auto.color = "Rojo"
    auto.dueño = "Chris"
    auto.marca = "bmw"
    auto.encender = function(){
        console.log("Auto encendido")
    }

console.log(auto)
console.log(`Mi coche es un ${auto.marca} y es de color ${auto.color} y se llama ${auto.dueño}`)
auto.encender()

