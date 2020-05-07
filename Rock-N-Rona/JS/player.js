let player;

function Player(classType, health, buffaloSquirt, runGood, bounceBack, speed, neckCrank, bodyBlows) {
    this.classType = classType;
    this.health = health;
    this.buffaloSquirt = buffaloSquirt;
    this.runGood = runGood;
    this.bounceBack = bounceBack;
    this.neckCrank = neckCrank;
    this.bodyBlows = bodyBlows;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        //Who will attack first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    
        //Player attacks!
    let playerAttack = function() {
        let calcBaseDamage;
        if (player.runGood > 0) {
            calBaseDamage = player.bodyBlows * player.speed / 10000 ;
        } else {
            calcBaseDamage = player.speed * player.bodyBlows / 10000 ;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        let numberOfHits = Math.floor((Math.random() * Math.floor(player.speed / 10) /2) + 1);
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
;
     //Enemy attacks!
     let enemyAttack = function() {
        let calcBaseDamage;
        if (enemy.runGood >= 0) {
            calcBaseDamage = enemy.whatDidYouSayZakk * enemy.runGood / 1000;
        } else {
            calcBaseDamage = enemy.screamReeder * enemy.stealAC / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        let numberOfHits = Math.floor((Math.random() * Math.floor(enemy.screamReeder / 10) /2) + 1);
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    //Get player and enemy health to change later!
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");    
    // Initiate Attacks!
    if (getPlayerSpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit with a power of " + playerAttackValues[0] + " damage! You hit for a total number of " + playerAttackValues[1] + " times!");
        if (enemy.health <= 0) {
            alert("You deafeated your mortal enemy! Refresh the browser to test your run-good another time!");
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        // Enemy attacks!
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("You were hit with a power of " + enemyAttackValues[0] + " damage! You were hit a total number of " + enemyAttackValues[1] + " times!");
        if (player.health <= 0) {
            alert("Looks like your run-good ran out.  Its like they say, The odds must be different at the Murraingay!");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("The enemy hit you with a power of " + enemyAttackValues[0] + " damage! They hit you " + enemyAttackValues[1] + " times!");
            if (player.health <= 0) {
                alert("Looks like your run-good ran out.  Its like they say, The odds must be different at the Murraingay!");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            // Player attacks!
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit the enemy with a power of " + playerAttackValues[0] + " damage!  You hit the enemy " + playerAttackValues[1] + " times!");
            if (enemy.health <= 0) {
                alert("You defeated your mortal enemy! Refresh the browser to test your run-good another time!");
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    }
}
