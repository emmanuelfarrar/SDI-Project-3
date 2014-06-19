//alert("JavaScript works!");
/* Emmanuel Farrar
Date: 19JUN2014
SDI Project 3
*/

//GLOBAL VARIABLES
var jobName = ["Paladin", "Warrior", "Dragoon", "Monk", "Bard", "Ninja", "Summoner", "Black Mage", "White Mage", "Scholar"];


//FUNCTIONS

//procedure to just show the array
var myProcedure = function (jobArray) 
{
	console.log("The array is: " + jobArray);  //list the elements of the array
	//console.log(jobArray);
};

//string function to identify weapon type and if coil turn has been done before.
var myStrFunction = function (weapon, coil)
{
	//Need to declare local variable, return & use it in MAIN CODE
	
	if (weapon === "Novus")
	{
		console.log("You have a shiny weapon");
	}
	if (weapon === "Animus")
	{
		console.log("You still have some work to do.");
	}
	
};

//boolean function
var myBooFuncation = function (youbard)
{
//make this the nested conditional function
if (youbard === true)
{
	myConfirm = confirm("Since you are a bard are you okay with kiting the adds?");
}
	return myConfirm;
};

//number function
var myNumFunction

//MAIN CODE

//myProcedure(jobName);   // to test procedure
myStrFunction("Novus", "Yes");    // to test string function
myStrFunction("Animus", "Yes");   // to test string function
myBooFuncation(true);             // to test boolean function
console.log ("The bard is okay with kitting: " + myConfirm);  //to test return for boolean function
