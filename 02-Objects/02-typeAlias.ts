type Coordinates = { x: number, y: number }

let cord: Coordinates = { x: 0, y: 0 }

function randomCoordinates(cord: Coordinates): Coordinates {
    cord.x = Math.random()
    cord.y = Math.random()

    return { x: cord.y, y: cord.y }
}

console.log(cord)

const newCoordinates = randomCoordinates(cord)
console.log(newCoordinates)