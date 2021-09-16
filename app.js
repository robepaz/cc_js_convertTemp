// fijamos constante kelvin
const kelvin = 293

//convierte kelvin a celsius
let celsius = kelvin - 273

// convierte celsius a farenheit
let fahrenheit = celsius * (9 / 5) + 32

// quita decimales a f
fahrenheit = Math.floor(fahrenheit)
