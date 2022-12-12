const createChassis = () => {
	const newChassisObj = {	}
	return newChassisObj
}

const addBody = (obj) => {
	// Use dot notation to add a new property
	obj.body = "Fever"
    // Return the chassis that now has a body property on it
	return obj
}
const addWheels = (obj) => {
    obj.wheels = 4
    return obj
}
const addEngine = (obj) => {
    obj.engine = '4.8L'
    return obj
}
const addSteeringWheel = (obj) => {
    obj.steeringWheel = 'Tilting'
    return obj
}
const addDriveTrain = (obj) => {
    obj.driveTrain = "Four wheel drive"
    return obj
}


let chassis = createChassis()

let chassisWithBody = addBody(chassis)
 
let chassisWheels = addWheels(chassis)

let chassisEngine = addEngine(chassis)

let chassisSteeringWheel = addSteeringWheel(chassis)

let chassisDriveTrain = addDriveTrain(chassis)
console.log(chassis)