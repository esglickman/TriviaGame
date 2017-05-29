//Make an array of questions
var questionArray = [
"What is the Boltons sigil?", 
"Who killed Tywin Lannister?", 
"Who is the 'Mother of Dragons'?",
"What date does seasons 7 start?",
"Who is the commander of the Unsullied?",
"What was Rob Starks nickname?",
"Whose face was half burned off by Sir Gregor Clegane?"
];
//make an array of answers
var answerArray = [
["A Dragon", "The Flayed Man", "The Stag", "The Wolf"],
["Ned Stark", "Daario Naharis", "Rob Stark", "Tyrion Lannister"],
["Daenerys Targaryen", "Arya Stark", "Brienne of Tarth", "Margaery Tyrell"],
["June 17th, 2017", "July 17th, 2017", "June 16th, 2017", "July 16th, 2017" ],
["Ygritte", "Commander Mormont", "Grey Worm", "Samuel Tarley"],
["King of the North", "Young Wolf", "Both 1 and 2", "None of the above"],
["King Goeffrey", "Jora Mormont", "Sandor Clegane", "Jon Snow"]
];

//make array of correct answers

var correctArray = [
"The Flayed Man",
"Tyrion Lannister",
"Daenerys Targaryen",
"July 16th, 2017",
"Grey Worm",
"Both 1 and 2",
"Sandor Clegane"
];
//set a setTimeout to execute a function
var myInterval;
myInterval = setInterval(questionTimer,1000);

var myCount;
myCount = 0;

var currentQuestion;
currentQuestion = 0;

//The function should have: 30 sec timer display, display a question and 4 possible answers,
//and when the 30 sec is up it will switch to a screen that gives answers for 7 seconds.

function questionTimer(){

	$("#myTimer").html(myCount);
	
	if(myCount > 30){
		clearInterval(myInterval);
		correctAnswer();
		myInterval = setInterval(answerTimer,1000);
		myCount = 0;
		
		answerTimer();

		

	}else {
		myCount++;

	}
}

function answerTimer(){

	$("#myTimer").html(myCount);

	if(myCount > 7){
		//stop timer
		
		clearInterval(myInterval);
		//show next question
		//retart long timer

		myInterval = setInterval(questionTimer,1000);
		myCount = 0;
		currentQuestion++;
		questions();
		questionTimer();
		//run next question
		
		
	} else {
		myCount++;
	}
}

function questions() {
	
	$("#questionHolder").html(questionArray[currentQuestion]);

	$(".answerSpace").each(function(i) {
		$(this).html(answerArray[currentQuestion][i]);
	});
	
	$("#correctAnswer").empty();
}	

questions();

function correctAnswer() {

	$("#correctAnswer").text("Correct Answer: " + correctArray[currentQuestion]);
	//$("#answerSpace").html();


}

//in the function: make if else statements (for the timer and for the answers clicked) AND
//a screen that, if you choose the wrong answer it will tell you the correct one for 7 seconds

//create function that keeps track of how many correct and incorrect answers are chose
//display them at the end

//make button that restarts the entire game without refreshing it.(Only display this when all questionsa are up.)