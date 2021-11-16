let argument = process.argv.slice(2)

const pi = 3.14

function areaCircle(radius)
{
    console.log(radius**2*pi)
}

areaCircle(argument[0]*1)
