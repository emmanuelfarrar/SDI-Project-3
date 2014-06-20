//alert("JavaScript works!");
/* Emmanuel Farrar
Date: 19JUN2014
SDI Project 3
*/

//GLOBAL VARIABLES
var jobName = ["Paladin", "Warrior", "Dragoon", "Monk", "Ninja", "Summoner", "Black Mage", "White Mage", "Scholar"];
var weaponArray = ["Novus","Animus", "Relic", "Animus", "Novus","Novus", "Relic", "Animus", "Relic"];
var loopCounter;
var numReturn;
var strReturn;
var booReturn;


//FUNCTIONS

//procedure to just show the array
var myProcedure = function (jobArray) 
{
	console.log(jobArray);  //list the elements of the array
	console.log("The array length is currently at: " + jobArray.length);	
};

//string function to identify weapon type and if coil turn has been done before.
var myStrFunction = function (job, theArray)
{
var wepLength = theArray.length;
for (var i = 0; i < jobName.length; i++)
	{
	for (var i = 0; i < theArray.length; i++) 
{
	console.log("The " + jobName[i] +" weapon type is a " + theArray[i]);
}
	return theArray;
	}
};


//boolean function
var myBooFunction = function (youbard, weapon)
{
//make this the nested conditional function
 if(youbard === true && weapon === "Novus")
{
	var myConfirm = confirm("If you are a bard are you okay with kiting the adds?");
	
} else{
	console.log("It is ashame maybe we can use the Summoner to kite then.");
	}
if (weapon != "Novus")
	{
	console.log("Well we may have to carry this player doesn't have a very strong weapon.");
	} else {
	console.log("You shouldn't slack on DPS since you have your " + weapon +".");
	}
	return myConfirm;

	
};

//number function
var myNumFunction = function (coilattempts, coilkills)
{
var attempts = coilattempts;
var confirmKill = coilkills;

console.log("The team has attempted this coil turn " +attempts 
+ " and have killed the boss " + confirmKill +" times.");

	if (coilattempts < 5)
	{
	attempts = 10 - coilattempts;
	console.log("We need to have " + attempts +" more attempts to really get the hang of this turn.");
	} else {
	console.log("We should have the hang of this by now");
	
	};
	return attempts;
};





//json Function
var getJson = function (json) {
		for (var i = 0; i < json.players.length; i++) {
			var player = json.players[i];
			console.log(player.name + "; Coil Drop: " + player.coilDrop);
		};
	};






//MAIN CODE

console.log("The initial array is...");
//procedure call
myProcedure(jobName);   // to test procedure

console.log("Now we need to compare what weapon type each job has");
//myStrFunction call
strReturn = myStrFunction(jobName, weaponArray);

//myBooFunction call
booReturn = myBooFunction(true, "Novus"); 
console.log("The team has been working hard and running this coil instance several times.");
//myNumFunction call
numReturn = myNumFunction(3,2);

console.log("Lets see what the array will look like is we add a Bard to the party.");
//using the push method
jobName.push ("Bard");     //add Bard via push method
console.log(jobName);
console.log("The new array length is currently at: " + jobName.length);

console.log("Now we need to track the players and loot request that have been made so far.");
console.log("Here is a table of the players that have made a request for drops in the turn and what drops they want.")
//call getJson
getJson(json);



