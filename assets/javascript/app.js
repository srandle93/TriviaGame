// As soon as the page loads, start timer from 60 secs.
// Add function so it starts when page is loaded.
// Create if else statements for each answer.
// Create score count alert to pop up at end of timer or
//  once player presses "submit" button.
// If player chooses Direct Messege, Who Knows?, and/or Fake News! they get
//  one correct answer point for each. If they choose other options they get
//  one incorrect answer point for each.
// Once thte timer runs out then the alert will say "Time's Up" and the 
//  tally of the player's score will be displayed below in the alert.
// Once the player refreshes the page, the timer will restart.
// Lets code the questions and answers in javascript instead of HTML

var questions = ["What is a DM?", "Does Keke love Drake?", "If it's not true then it is...?"]
var choices = ["Distant Mother.","Direct Message.","Duty Module."];
              ["Yes.","No.","Who knows?"];
              ["Fake News!","Super duper true.","Still true."];
var answers = ["Direct Message", "Whos knows?", "Fake News!"];
var correct = 0
var incorrect = 0
// This code is to call function to begin count down.

countdown(10, "timer")
function countdown(secs, elem){
    var element = document.getElementById(elem);
    element.innerHTML = "Time Remaining: "+secs + " seconds";
    if (secs < 1) {
        clearTimeout(timeLeft);
        element.innerHTML = "Time's Up! ";
        element.innerHTML += "Correct: "+ correct + " Incorrect: "+ incorrect;  
    }
    secs--;
    var timeLeft = setTimeout('countdown('+secs+', "'+elem+'")',1000)
}
    var value = $('input[name = answer]:checked', '.myForm').val()
    $('.myForm input').on('change', function() {
        if (val = "wrong"){
            incorrect++;
            
        }
        else if (val = "correct") {
            correct++;
        }

        
    });
    function radio_changed(val){
        console.log(val)
    }
// if (answers[0]=checked){
//     correct++
// }
// else if (answers[1]=checked){
//     correct++
// }
// else if (answers[2]=checked){
//     correct++
// }
// else{
//     incorrect++
// }


// function increment(){}
//     // Form.addEventListener(click)
// if (correct=+1)
// $(document).print
// $("#btn").on("click", function(){
//     alert("resutls: "+correct+incorrect)
// });
// });       
    
    

