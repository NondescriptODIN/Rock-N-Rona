let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Thee Duck":
                player = new Player(classType, 700, 100, 0, 700, 500, 100, 500);
                break;

            case "The Buccalo":
                player = new Player(classType, 700, 999, 0, 700, 500, 100, 500);
                break;

            case "Duke":
                player = new Player(classType, 700, 100, 0, 700, 500, 100, 500);
                break;

            case "MaDuke":
                player = new Player(classType, 700, 100, 0, 700, 500, 100, 500);
                break;

            case "Hakk":
                player = new Player(classType, 700, 100, 0, 700, 500, 100, 500);
                break;
                
        }

       let getInterface = document.querySelector(".interface");
          getInterface.innerHTML = '<img src="/Users/nondescript/Desktop/Rock-N-Rona/Resources/Players/' + classType.toLowerCase() + '.png" class = "img-avatar"><div> <h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Buffalo Squirt: ' + player.buffaloSquirt + ' </p><p>Run Good: ' + player.runGood + '</p><p>Bounce Back: ' + player.bounceBack + '</p><p>Neck Crank: ' + player.neckCrank + '</p><p>Body Blows: ' + player.bodyBlows + '</p><p>Speed: ' + player.speed + '</p></div>';
         },

        setPreFight: function() {
            let getHeader = document.querySelector(".header");
            let getActions = document.querySelector(".actions");
            let getArena = document.querySelector(".arena");
            getHeader.innerHTML = '<p>Task: Prepare for Combat!</p>';
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Face your fears!  Your enemy approaches!</a>';
            getArena.style.visibility = "visible";
            
    
        },
    
    
        setFight: function() {
            let getHeader = document.querySelector(".header");
            let getActions = document.querySelector(".actions");
            let getEnemy = document.querySelector(".enemy");
            // Create enemy!
            let enemy00 = new Enemy("Mahl", 666, 50, 0, 200, 500, 200, 500, 500);
            let enemy01 = new Enemy("Time Bomb Timmy", 666, 200, 500, 50, 200, 400, 500, 500);
            let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

            console.log(chooseRandomEnemy);
            switch (chooseRandomEnemy) {
                case 0:
                    enemy = enemy00;
                    break;
                case 1:
                    enemy = enemy01;
                    break;
            
            }
     
            getHeader.innerHTML = '<p>Rock N Rona!</p>';
            getActions.innerHTML = '<a href= "#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Click Here to Attack! For the Buffalo Gods!</a>';
            getEnemy.innerHTML = '<img src="/Users/nondescript/Desktop/Rock-N-Rona/Resources/Enemies/' + enemy.enemyType.toLowerCase() + '.png" class = "img-avatar"><div> <h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Steal AC!: ' + enemy.stealAC + ' </p><p>Run Good: ' + enemy.runGood + '</p><p>Scream Reeder: ' + enemy.screamReeder + '</p><p>What did you say, Zakk!?: ' + enemy.whatDidYouSayZakk + '</p><p>Body Blows: ' + enemy.bodyBlows + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    
        },
        
}
