//Var that holds health and damage info for each player
  	var jedi = {
	    luke: {
	      health: 185,
	      damage: 18
	    },
	    sidious: {
	      health: 160,
	      damage: 22
	    },
	    maul: {
	      health: 120,
	      damage: 26
	    },
	    vader: {
	      health: 180,
	      damage: 32
	    }           
	}

//variables to hold damage
var lukeIncrementer, sidiousIncrementer, maulIncrementer, vaderIncrementer, theirDamage, yourDamage;


var count = 0, health = 0, someoneIsAlive = true;

//Once the window loads, it hides the Fight Arena and the Restart button
function setTheGameUp(){
	$("#fightArena").hide();
	$("#restart").hide();
}

//Once called, it'll hide the attack button and show the restart button
function tearDown(){
	$("#attack").fadeOut(1000);
	$("#restart").fadeTo(2000, 1.0);
}

//This function will take your two selections and inject/append them into the Fight Arena
//as well as make your two selections bigger and print the health for each player to the
//scoreboard for the initial score, and sets the incrementer for the damage and that 
//players health as well as the damage itself.
//
//
//Sidenote: I know this function could have been done a little better and modularized a tad 
//			more but it's late and I need to get this turned in.
function appendToFightersRow(altValue, count){
	$("#" + altValue).detach().appendTo("#fightersRow");	
	$("#" + altValue).removeClass("col-md-3");
	$("#" + altValue).addClass("col-md-6");

	console.log("What is the count? " + count);

	if(altValue==="luke"){
		console.log(jedi.luke.health);
		health = jedi.luke.health;
		lukeIncrementer = jedi.luke.damage;
		if(count===0){
			yourDamage = lukeIncrementer
			incrementer = lukeIncrementer;
		}else if(count===1){
			theirDamage = lukeIncrementer;
		}
	}

	if(altValue==="sidious"){
		console.log(jedi.sidious.health);
		health = jedi.sidious.health;
		sidiousIncrementer = jedi.sidious.damage;
		if(count===0){
			yourDamage = sidiousIncrementer;
			incrementer = sidiousIncrementer;
		}else if(count===1){
			theirDamage = sidiousIncrementer;
		}
	}

	if(altValue==="maul"){
		console.log(jedi.maul.health);
		health = jedi.maul.health;
		maulIncrementer = jedi.maul.damage;
		if(count===0){
			yourDamage = maulIncrementer;
			incrementer = maulIncrementer;
		}else if(count===1){
			theirDamage = maulIncrementer;
		}		
	}

	if(altValue==="vader"){
		console.log(jedi.vader.health);
		health = jedi.vader.health;
		vaderIncrementer = jedi.vader.damage;
		if(count===0){
			yourDamage = vaderIncrementer;
			incrementer = vaderIncrementer;
		}else if(count===1){
			theirDamage = vaderIncrementer;
		}		
	}

	if(count===0){
		yourHealth = health;
	}else if(count ===1){
		enemyHealth = health;
	}

	document.querySelector(".Health" + count).innerHTML = "Health: " + this.health;
}

//This will hide the initial screen to choose the players and reveal the Fight Arena
function showFightArenaTheFirstTime(){
    $("#initialPlayersArea").hide();
	$("#fightArena").fadeTo(4000, 1.0);	
}


$(document).ready(function(){
        
        //Clicks on any of the fighters with the class aFighter and then
        //gets their alt value and uses that to throw the fighter into the
        //fight arena for an epic battle
        //
        //
        //Also, I removed them as just aFighter and added that they were now
        //fighting because I was going to use this for when it iterated through
        //the remaining enemies to fight
        $(".aFighter").on("click", function(e){

            console.log(e.target);
            console.log(e.target.alt);

            var altValue = e.target.alt;

            if(count<2){            
	            if($(e.target).hasClass("aFighter")){
	            	$(e.target).addClass("fighting");
	            	$(e.target).removeClass("aFighter");
	            	console.log(e.target);
	            	appendToFightersRow(altValue, count);
	            }
        	}


        	if (count===1) {
				console.log("inside count===1");
				showFightArenaTheFirstTime();
        	}
        	count++;        	        	
        });	

        //Once the attack button is revealed, you click it over and over
        //and the health updates below each player until one dies a horrible
        //and painful death
        $("#attack").on("click", function(e){
        	console.log("ATTACK");

	        if(someoneIsAlive){
	        	var enemyDamage = theirDamage;
				yourHealth = yourHealth - enemyDamage;

				console.log("The incrementer: " + incrementer);
				yourDamage = yourDamage + incrementer;

	        	console.log("Your Damage: " + yourDamage);
	        	console.log("Enemy Damage: " + enemyDamage);

	        	$(".Health0").html("Health: " + yourHealth);
				$(".Health1").html("Health: " + (enemyHealth - yourDamage));

				if(yourHealth<1){
					someoneIsAlive = false;
					alert("Player 2 Wins!");
					tearDown();
				}
				if((enemyHealth - yourDamage)<1){
					someoneIsAlive = false;
					alert("Player 1 Wins!");
					tearDown();
				}				
        	}
        });

        $("#restart").on("click", function(e){
			location.reload();
        });

});

/**********************	
		This is my pseudocode that I was modularizing above. The only part I didn't do was reiterate
		through remaining enemies
**********************/
// //Choose first two fighters
// 	$("#luke").appendTo("#fightersRow");
// 	$("#maul").appendTo("#fightersRow");

// //Make the Initial Players Area disappear, and then make the Fight Area appear
// 	$("initialPlayersArea").hide();
// 	$("#fightArena").show();


// //Whoever loses, hide them, the Fight Arena, and then reveal Remaining Players left in Initial Players Area
// 	// $("#maul").hide();
// 	$("#fightArena").hide();
// 	$("#maul").hide();
// 	$("initialPlayersArea").show();


// //Choose another challenger
//     $("#sidious").appendTo("#fightersRow");
//     $("#initialPlayersArea").hide();
//     $("#fightArena").show();


// //Whoever loses, hide them, the Fight Arena, and then reveal Remaining Players left in Initial Players Area

// 	$("#fightArena").hide();
// 	$("#sidious").hide();
// 	$("initialPlayersArea").show();

// //Choose a final challenger
//     $("#vader").appendTo("#fightersRow");
//     $("#initialPlayersArea").hide();
//     $("#fightArena").show();

function init(){
	setTheGameUp();
}

window.onload = init;
