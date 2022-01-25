var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

//you can also log muliple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

//console.log(enemyNames);
//console.log(enemyNames[0]);


var fight = function fight(enemyNames){

  while(playerHealth > 0 && enemyHealth > 0){

 // window.alert("Welcome to Robot Gladiators!");


  var promptFight = window.prompt("Would you like to FIGHT or SKIP this this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// IF PLAYER CHOOSES TO FIGHT OR fight


  if (promptFight === "fight" || promptFight === "FIGHT"){
      // remove enemy's health by subtracting the amount set in the playerAttack variable

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.

    console.log(playerName + " has attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.")

        // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        break;
      }
      else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
      }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.

    console.log(enemyNames[i] + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")


        // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      }
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

    //IF PLAYER CHOOSES TO SKIP
  } //curly bracket from the conditional promptFight
  else if (promptFight === "skip" || promptFight === "SKIP"){
    window.alert(playerName + " has chosen to skip the fight!");
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");

    playerMoney = playerMoney - 10;

    console.log(playerName + " now has " + playerMoney + " points left");
    break;

    } 
    else {
      fight();
    }
  }
    // if no (false), ask question again by running fight () again
  else {
    window.alert("You need to choose a valid option. Try again!");
  }
  }  // one of these if for the WHILE command
}


var startGame = function(){
  // reset player stats
  playerAttack = 10;
  playerMoney = 10;
  playerHealth = 100;

  for (var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      debugger;
      fight(pickedEnemyName);
      }

    else {
      window.alert("You have lose your robot in the battle! Game Over!");
      break;
    }
  
  }
  EndGame();
};

startGame();

var endGame = function (){
  window.alert("The game has now ended. Let's see how you did!")

  //if player is still alive, player wins!
  if (playerHealth > 0){
    window.alert("Great job, you've survivede the game! You now have a score of " + playerMoney + ".");
  }
  else  {
    window.alert("You've lost your robot in battle");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
      startGame();
    }
    else{
      window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}



//fight();
 //function code finishes here!




// Game States
// "WIN" - Player robot has defeated all enemy-robots
// "LOSE" - Player robot's health is zero or less

