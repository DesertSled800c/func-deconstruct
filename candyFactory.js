const buyChocolate = () => {
    choc = {type: "Milk Chocolate"}
    return choc
}

const candy = () => {
    yummy = {type: "pbj"}
    return yummy
}


const addFlavoring = (obj) => {
    obj.flavor = "Mint"
}

const makeBarkMix = (obj) => {
    if (obj.flavor === "Mint") {
       obj.mixed = true
    } else {
        obj.mixed = false
    }
}

const bakeCandy = (obj) => {
    if(obj.mixed === true) {
        obj.baked = true
    } else {
        obj.baked = false
    }
}

const breakBark = (obj) => {
    if(obj.baked === true) {
        const arr = [
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece"]
        return arr
    }
}

// let chocolate = buyChocolate()


// addFlavoring(chocolate)

// makeBarkMix(chocolate)

// bakeCandy(chocolate)

// let arr = breakBark(chocolate)
// console.log(arr)
// console.log(chocolate)

let snikers = candy()

addFlavoring(snikers)
console.log(snikers)