# TriviaGame

Ojective: to develop a trivia game where one question shows up at a time. Each question can only have one answer. The player will have 30 seconds to answer. If they answer correctly, the next question will show up. If they do not answer, they will get a time out and the next question will come up. 
	-Scenarios = if they get the right anwser, score goes up
				-if they get the wrong answer, misses goes up
				-if they do not answer, nothing happens. 


Necessary Items:

variables = wins, loses, questions [variable index], counter

-Create an index of obects:
	var questions = [ {Q1: "", Ans1: "", Ans2:"",...},{},{},...]

-using if statements set the timer, the first question to be answered, and the set of answers. 
use a for loop to change the question once a question has been answered or the time is up. 

