class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = db.ref("gameState");
        // sometimes the name of functoin remains anonymous like here.
        /* the line bellow reffers to to getting the value of the gameState forom the data base and 
           storing it on our local variable myGameState.
        */
        gameStateRef.on("value", function(data){
        // .val() function gets the value of the database coloumn that is being reffed using .ref().
            myGameState = data.val();
        });
    }

    update(state){
        // "/" reffers to root folder of the database. 
        db.ref("/").update({
            gameState: state,
        });
    }
    
    start(){
        if(myGameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start!!", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_pos = 130;
            for(var plr in allPlayers){
                display_pos += 20;
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_pos)
            }
        }
    }
}