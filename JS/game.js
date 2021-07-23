class Game{
    constructor(){}

    
    gameState(){
       database.ref('gameState').on("value" ,(data)=>{
           gState = data.val();
       })
    }

    updateState(state){
     
        database.ref('/').update({
            gameState:state

        } )
    }

    start(){

        if(gState === 0){
            form = new Form()
            form.display()
         
            player = new Player();
            player.getPlayerCount();


        }

        player1 = createSprite(300,200,100,100);
        player1.addImage(player1Image);
        player1.scale = 0.09;

        player2 = createSprite(300,320,100,100);
        player2.addImage(player2Image);
        player2.scale = 0.09;

        player3 = createSprite(300,444,100,100);
        player3.addImage(player3Image);
        player3.scale = 0.09;

       

    }

    play(){

        form.hide()

        //Player.getPlayerInfo();

        //if(allPlayers !== undefined){
            
            image(bgImg , 0,-100, displayWidth*5,displayHeight+200);
        //}
        

        drawSprites();
    }
   

    
}



