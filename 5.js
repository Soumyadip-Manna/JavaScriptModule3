// Calculate area of circle
let radius = 7;
let areaOfCircle = (radius) => {
    let calculation = Math.ceil(Math.PI * Math.pow(radius , 2));
    return calculation;
}
console.log(`Area Of Circle Is `,areaOfCircle(radius));