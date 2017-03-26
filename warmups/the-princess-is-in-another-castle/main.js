var player = {
    name: "",
    totalCoins: 0,
    status: "Small",
    isStarActive: false,
    gameActive: true,
    setName: function(namePicked) {
        this.name = namePicked;
    },
    gotHit: function gotHit(status) {
        //status is set from the first one to the last in order
        if (this.status === "Powered Up"){
            this.status = "Big";
        }
        else if(this.status === "Big"){
            this.status = "Small";
        }
        else if(this.status === "Small"){
            this.status =  "Dead";
            this.isGameActive = false;
        }
    },
    
    gotPoweredUp: function gotPoweredUp(){
        //sets status to Powered up
          if (this.status === "Small"){
            this.status = "Big";
        }
        else if(this.status === "Big"){
            this.status = "Powered Up";
        }
    },
    isGameActive: true,
    addCoin: function(){
        this.totalCoins ++;
    },
    printStats: function(){
        var starMessage = "Don't have a star";
        if (this.isStarActive) starMessage = "do have a star";
        
        console.log(`The character name is ${this.name}, and you have ${this.totalCoins} coins and are ${this.status}, and you ${starMessage}`)
}
},
    
    function randRange(min, max) {
    var rand = Math.floor(Math.random * (max - min) + min);
    return rand;
}

function action(){
    var random = randRange(0, 3);
    
    if (random === 0){
        player.gotHit();
    }
    else if (randRange === 1){
        player.gotPoweredUp();
    }
    else if (random === 2){
        player.addCoin();
    }
}

player.printStats();

for(var i = 0; i < 3; i++){
    
}