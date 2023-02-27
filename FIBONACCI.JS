var x = 0
var y = 1
var z = 0

console.log("Números seguintes de acordo com Fibonacci:" )

for (var i = 0; i < 11; i++) {
    console.log(x)
    z = x
    x += y
    y = z
}