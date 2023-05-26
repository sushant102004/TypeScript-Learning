type Circle = {
    radius: number
}

type Color = {
    color: string
}

type ColorfulCircle = Circle & Color

const myCircle : ColorfulCircle = {
    radius: 1,
    color: 'Blue'
}

type ColoredCircleWithBorder = Circle & Color & {
    border: number
}

const myNewCircle : ColoredCircleWithBorder = {
    radius: 4,
    border: 2,
    color: 'Red'
}

console.log(myCircle)
console.log(myNewCircle)