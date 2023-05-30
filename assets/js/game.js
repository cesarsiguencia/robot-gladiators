alert("Welcome to Robot Gladiators!");

var fightOrSkip = function(){
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();
  
  if (promptFight === "skip"){
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip){
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      return true;
    }
  }
  return false;
}

  var fight = function(enemy){
    var isPlayerTurn = true;

    // randomly change turn order
    var headsTails = Math.random();
    console.log(headsTails);
    if (headsTails > 0.5){
      isPlayerTurn = false;
    }
    console.log(isPlayerTurn)

    while(playerInfo.health > 0 && enemy.health > 0){
      
      
      if (fightOrSkip()){
        // if true, leave fight by breaking loop
        break;
      }
      
      //ENEMY GETS ATTACKED FIRST
      if (isPlayerTurn === true){
        //ask player if they'd like to fight or skip using fightOrSkip
        
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        console.log(playerInfo.name + " has attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.")
          
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
          playerInfo.money = playerInfo.money + 20;
          break; // to leave while () loop since enemy died
        }
        else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(enemy.name + " has attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.")
    
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          break;
        }
        else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
      // PLAYER GETS ATTACKED FIRST
      } else {
        
        var damage = randomNumber(enemy.attack - 3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(enemy.name + " has attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.")
    
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          break;
        }
        else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }

        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        console.log(playerInfo.name + " has attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.")
          
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
          playerInfo.money = playerInfo.money + 20;
          break; // to leave while () loop since enemy died
        }
        else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
      } // if(isPlayerTurn)
      //switch tun order for next round
      isPlayerTurn = !isPlayerTurn;
      console.log(isPlayerTurn);
    } //WHILE 
  } //fight()
      

var startGame = function(){
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++){

    if (playerInfo.health > 0){
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];
      console.log(pickedEnemyObj)
      pickedEnemyObj.health = randomNumber(40,60);
      fight(pickedEnemyObj);

      // AFTER FIGHT CALL RIGHT ABOUT, WE GO TO THE FIGHT FUNCTION WITH THE ENEMY INFO IN PICKEDENEMYOBJ AND WE GO TO THE WHILE LOOP, ONCE WE BREAK OUT OF THE LOOP WITH A CONFIRMED SKIP, THE STARTGAME FUNCTION WILL INITIATE AGAIN WHERE WE LAST LEFT OFF, WHICH IS RIGHT HERE, SO THE STORE CONFIRMATION WILL COME NEXT INSTEAD OF THE STARTGAME FUNCTION FROM SCRATCH.

        //if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1){
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          if (storeConfirm){
            shop();
          }
          
        }
    }
    else {
      window.alert("You have lose your robot in the battle! Game Over!");
      
      break;
    }
  }  // FOR
  endGame();
 
}


var endGame = function (){





  

  if (playerInfo.health > 0){
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else  {
    window.alert("You've lost your robot in battle");
  }

  var highScore = localStorage.getItem("highscore");

    //check localStorage for high score
  if (highScore === null){
    highScore = 0;
  }

  //if player had more money than the high score, player has new high score!
  if (playerInfo.money > highScore){
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  } 
  else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!")
  }


  var playAgainConfirm = window.confirm("Would you like to play again?");

  if(playAgainConfirm){
    startGame();
  }
  else{
    window.alert("Thank you for playing Robot Gladiators! Come back soon!")
  }
}

var shop = function(){
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL (1) your health, UPGRADE (2) your attack, or LEAVE (3) the store? Please enter one to make a choice.")

  shopOptionPrompt = parseInt(shopOptionPrompt);

  switch (shopOptionPrompt){
    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.upgradeAttack();
      break;

    case 3:
      window.alert("Leaving the store.");
      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
}

var randomNumber = function(min, max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

var getPlayerName = function(){
  var name = "";

  while (name === "" || name === null){
    name = prompt("What is your robot's name?")
  }

  console.log ("Your robot'sname is " + name)
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 20,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

  refillHealth: function(){
    if (this.money >= 7){
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money +=7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
   
  },
  upgradeAttack: function(){
    if (this.money >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars");
      this.attack += 6;
      this.money += 7;
    }
 
  }
}

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

startGame();

