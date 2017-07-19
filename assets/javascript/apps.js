var questions = [
{ 
	question: "Sequoia National Park is home to the largest living single-stem tree in the world - named:",
	answers: ["General Sherman", "Major Oak", "Hyperion"],
	correct: "General Sherman"
},
{ 
	question: "How many U.S. national parks are located north of the Artic Circle?",
	answers: ["Zero", "One", "Two"],
	correct: "Two"
},
{ 
	question: "Which is the largest U.S. national park?",
	answers: ["Wrangell-St. Elias", "Death Valley", "Yellowstone"],
	correct: "Wrangell-St. Elias"
},
{ 
	question: "About how many waterfalls are found in Yellowstone National Park?",
	answers: ["500", "150", "300"],
	correct: "300"
},
];

var time = 30;

var questionCount = 0;

var correct = 0;

var incorrect = 0;

var unAnswered = 0;

var intervalId;

function countDown (){
	intervalId = setInterval(decrement,1000);
};

function decrement (){
	time--;
	$(".timer").html(time);
	if (time === 0) {
		$(".flashAlert").html("<h3>Time is up! The correct answer was ")
	}
};










