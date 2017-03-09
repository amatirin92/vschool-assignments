
var newFoodieFriend = {
    name: "Ann",
    age: 19,
    favoriteDesserts: [{
        food: "cookies",
        isDelicious: true,
        averagePreparationTime: "24 minutes",
        type: {
            chocolateChip: true
        }
    }],
    lovesOrganic: false,
    foodieFriends: [{
        name: "Leah",
        age: 24,
        favoriteDesserts: [{
            food: "cake",
            isDelicious: true,
            averagePreparationTime: "1 hour",
            type: {
                vanillaCake: true
            }
        }]
    }, {
        name: "Sean",
        age: 42,
        favoriteDesserts: [{
            food: "ice cream",
            isDelicious: true,
            averagePreparationTime: "12 minutes",
            type: {
                vanillaFlavor: true
            },
            share: function() {
                console.log("I really love!");
            }

        }]
    }],
};