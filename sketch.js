
var database, player,game, form, gameState=0,playerCount,players;


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
    
}  

function draw(){
    if(playerCount===4){
        game.updateState(1)

    }
    if(gameState===1){
        clear()
        game.play()
    }
}

