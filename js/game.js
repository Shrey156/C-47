class Game {
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        }) 
    }
    updateGameState(data){
        database.ref('/').update({
            gameState:data
        })
    }
    
async start(){
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            

            if(playerCountRef.exists){
            playerCount = playerCountRef.val();
            player.getPlayerCount();
            }

            form = new Form();
            form.display();

            
        }
        ant1 = createSprite(200,400,20,20);
        ant1.addImage(ant1Img);
        ant2 = createSprite(400,400,20,20);
        ant2.addImage(ant2Img);
        ants = [ant1,ant2];
    }
    play(){
        form.hide();
        text("Game Start",200,250);
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
           var index =0;
           var x =0;
           var y;

           for(var plr in allPlayers){
            index = index+1;
            x = x+200;
            y = displayHeight-allPlayers[plr].distance;
            ants[index-1].x=x;
            ants[index-1].y=y;

            if(index===player.index){
            camera.position.x = displayWidth/2;
            camera.position.y = ants[index-1].y;
            }
         }
        }
         if(keyWentDown(UP_ARROW) && (player.index!== null)){
            player.distance = player.distance + 20;
            player.updatePlayerName();
            }
        drawSprites();
    }

}