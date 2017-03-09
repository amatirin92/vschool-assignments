var shopper = {
    name: "Matilda", 
    age: 45, 
    vehicle: "Oldsmobile",
    children: ["Ben", "Joseph", "Carl"], 
    groceryCart: ["bread", "potatoes", "cheese"], 
    distance: 40,
    isMarried: true, 
    howManyPlates: function () {
        if (shopper.isMarried === true) {
            return (shopper.children.length + 1)
        } else {
            return shopper.children.length 
        }
    },
    needMoreFood: function(newFood) {
        shopper.groceryCart.push(newFood)
        return shopper.groceryCart
    }
} 
console.log(shopper.needMoreFood("bacon"));




var shopper = {
    name: "Terry"
    , age: 30
    , shoppingCart: ["apples", "batteries"]
    , isAllowedToBuyCigarettes: function (item) {
        if (this.age < 19) {
            return false
        }
    }
}